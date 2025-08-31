import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Wifi, 
  BarChart3, 
  Brain, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  DollarSign,
  Target,
  Activity,
  Lightbulb,
  Database,
  Server,
  Globe,
  Lock,
  MessageCircle,
  FileText,
  Settings,
  Eye,
  Users,
  Target as TargetIcon,
  BarChart,
  Palette,
  Monitor,
  Smartphone,
  Globe2,
  Zap as ZapIcon,
  Network,
  Cloud,
  HardDrive,
  Smartphone as SmartphoneIcon,
  Satellite,
  Router,
  Database as DatabaseIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIIoTEdgeComputingPlatform = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Edge Computing",
      description: "Advanced AI algorithms running directly on IoT devices for real-time decision making and data processing."
    },
    {
      icon: Wifi,
      title: "Intelligent IoT Management",
      description: "Centralized management of IoT devices with AI-driven monitoring, optimization, and predictive maintenance."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Instant data processing and analytics at the edge for immediate insights and actionable intelligence."
    },
    {
      icon: Target,
      title: "Predictive Maintenance",
      description: "AI-powered predictive analytics to prevent equipment failures and optimize maintenance schedules."
    },
    {
      icon: Settings,
      title: "Automated Optimization",
      description: "Self-optimizing IoT networks that automatically adjust performance based on real-time conditions and demands."
    },
    {
      icon: Shield,
      title: "Edge Security",
      description: "Advanced security protocols and AI-powered threat detection at the edge for comprehensive protection."
    }
  ];

  const benefits = [
    "Reduce latency by up to 90% with edge processing",
    "Lower bandwidth costs by 70% through local data processing",
    "Improve system reliability with AI-powered predictive maintenance",
    "Enable real-time decision making for critical applications",
    "Scale IoT deployments efficiently with intelligent automation",
    "Enhance data privacy with local processing capabilities"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      description: "Perfect for small IoT deployments and startups",
      features: [
        "Up to 100 IoT devices",
        "Basic AI edge processing",
        "Real-time monitoring",
        "Email support",
        "Standard security features"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Ideal for growing businesses and IoT networks",
      features: [
        "Up to 1,000 IoT devices",
        "Advanced AI algorithms",
        "Predictive analytics",
        "Priority support",
        "Custom integrations",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations with extensive IoT needs",
      features: [
        "Unlimited IoT devices",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Advanced analytics",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Smart Manufacturing",
      description: "Real-time monitoring and optimization of production lines with AI-powered predictive maintenance.",
      icon: Cpu
    },
    {
      title: "Smart Cities",
      description: "Intelligent traffic management, energy optimization, and environmental monitoring systems.",
      icon: Building2
    },
    {
      title: "Healthcare IoT",
      description: "Patient monitoring, medical device management, and healthcare facility optimization.",
      icon: Heart
    },
    {
      title: "Retail & Logistics",
      description: "Inventory management, supply chain optimization, and customer experience enhancement.",
      icon: ShoppingCart
    }
  ];

  const integrations = [
    "AWS IoT Core",
    "Azure IoT Hub",
    "Google Cloud IoT",
    "MQTT & CoAP protocols",
    "REST APIs",
    "Custom protocols"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-8">
              <Cpu className="w-4 h-4 mr-2" />
              AI-Powered IoT Edge Computing
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI IoT Edge
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Computing Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your IoT infrastructure with AI-powered edge computing that processes data locally, 
              reduces latency, and enables real-time decision making across your entire network.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 rounded-xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-purple-400 border-2 border-purple-400 hover:bg-purple-400 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Advanced Features for IoT Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge edge computing with intelligent IoT management 
              to give you unprecedented control and insights into your connected infrastructure.
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
                className="p-6 bg-slate-700/50 rounded-xl border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transform Your IoT Infrastructure
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of companies that have revolutionized their IoT deployments 
              with our AI-powered edge computing platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered IoT edge computing platform adapts to your industry's unique 
              challenges and connectivity requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing IoT infrastructure and cloud platforms for maximum efficiency and productivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <ZapIcon className="w-6 h-6 text-purple-400" />
                </div>
                <p className="text-gray-300 text-sm font-medium">{integration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial 
              with full access to all features.
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
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-purple-500 bg-slate-700/80 shadow-2xl shadow-purple-500/25' 
                    : 'border-slate-600 bg-slate-700/50 hover:border-purple-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "/signup"}
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-purple-500 hover:bg-purple-600 text-white'
                      : 'bg-slate-600 hover:bg-slate-500 text-white'
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
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IoT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the companies that are already using AI to revolutionize their IoT deployments. 
              Start your free trial today and see the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 rounded-xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-purple-400 border-2 border-purple-400 hover:bg-purple-400 hover:text-white rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Schedule Demo
                <MessageCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Missing icon components
const Play = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Building2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Heart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ShoppingCart = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
  </svg>
);

export default AIIoTEdgeComputingPlatform;