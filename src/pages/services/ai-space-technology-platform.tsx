import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Satellite, 
  Rocket, 
  Globe, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  MapPin,
  TrendingUp,
  Cpu,
  Database,
  Cloud,
  Lock,
  Eye,
  Activity,
  Target,
  Brain,
  Network,
  Smartphone,
  Monitor,
  Server,
  Workflow,
  BarChart,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Telescope,
  Globe,
  Star,
  Orbit,
  Signal,
  Antenna,
  Radar,
  Compass
} from 'lucide-react';

const AISpaceTechnologyPlatform = () => {
  const features = [
    {
      title: "AI-Powered Satellite Operations",
      description: "Autonomous satellite management with predictive maintenance, orbit optimization, and real-time anomaly detection",
      icon: Satellite,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Space Data Analytics",
      description: "Advanced AI algorithms for processing satellite imagery, space weather data, and astronomical observations",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Autonomous Mission Planning",
      description: "AI-driven mission optimization for space exploration, resource allocation, and risk assessment",
      icon: Rocket,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Real-time Space Monitoring",
      description: "Continuous monitoring of space debris, satellite health, and cosmic events with AI-powered alerts",
      icon: Eye,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Quantum Communication Networks",
      description: "Next-generation quantum encryption for secure space communications and data transmission",
      icon: Signal,
      color: "from-cyan-500 to-teal-500"
    },
    {
      title: "Space Weather Forecasting",
      description: "Predictive models for solar storms, cosmic radiation, and space weather events affecting Earth",
      icon: Globe,
      color: "from-yellow-500 to-amber-500"
    }
  ];

  const benefits = [
    "Reduce satellite operational costs by 40%",
    "Improve mission success rate by 95%",
    "Enhance data processing speed by 300%",
    "Minimize space debris collision risk by 80%",
    "Increase satellite lifespan by 25%",
    "Enable autonomous space operations 24/7"
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "$4,999",
      period: "/month",
      description: "For space research institutions",
      features: [
        "AI Satellite Operations (up to 5 satellites)",
        "Basic Space Data Analytics",
        "Real-time Monitoring Dashboard",
        "Mobile App Access",
        "Email Support",
        "Basic Space Weather Alerts"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Mission Control",
      price: "$12,999",
      period: "/month",
      description: "For space agencies and companies",
      features: [
        "Everything in Explorer",
        "AI Satellite Operations (up to 25 satellites)",
        "Advanced Space Data Analytics",
        "Autonomous Mission Planning",
        "Quantum Communication",
        "API Access",
        "Priority Support",
        "Advanced Analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Space Command",
      price: "Custom",
      period: "",
      description: "For large space operations",
      features: [
        "Everything in Mission Control",
        "Unlimited Satellites",
        "Custom AI Models",
        "White-label Solutions",
        "Dedicated Support",
        "Custom Integrations",
        "On-premise Deployment",
        "SLA Guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Satellite Constellation Management",
      description: "AI-powered management of large satellite networks for global coverage and communication",
      icon: Network,
      metrics: "95% operational efficiency, 40% cost reduction"
    },
    {
      title: "Earth Observation & Climate Monitoring",
      description: "Advanced satellite imagery analysis for environmental monitoring and climate research",
      icon: Globe,
      metrics: "300% faster data processing, 90% accuracy improvement"
    },
    {
      title: "Space Debris Tracking",
      description: "Real-time monitoring and collision avoidance for space debris management",
      icon: Radar,
      metrics: "80% collision risk reduction, 24/7 monitoring"
    },
    {
      title: "Deep Space Exploration",
      description: "AI-driven mission planning and autonomous navigation for interplanetary missions",
      icon: Rocket,
      metrics: "60% mission success improvement, 50% fuel optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-8">
              <Satellite className="w-4 h-4 mr-2" />
              Revolutionary Space Technology
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Space Technology
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Revolutionize space operations with AI-powered satellite management, autonomous mission planning, 
              and advanced space data analytics. Explore the cosmos with unprecedented intelligence and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
                <Phone className="w-5 h-5 ml-2" />
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
              Revolutionary Features for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Space Exploration
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge space technology with artificial intelligence 
              to deliver unprecedented capabilities for space operations and research.
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
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
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
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Space Operations
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4 bg-slate-800/30 border border-slate-700 rounded-xl p-6"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
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
              Flexible Pricing for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Space Missions
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your space exploration needs and scale as you grow.
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
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-indigo-500 shadow-2xl shadow-indigo-500/25' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
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

      {/* Use Cases Section */}
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
              Proven Success Across
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Space Applications
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                    <p className="text-gray-400 text-sm">{useCase.metrics}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Explore
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                the Final Frontier?
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join leading space agencies and companies that have already revolutionized their operations with AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
                <Phone className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-indigo-500/20 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:+1 302 464 0950" className="text-indigo-400 hover:text-indigo-300">
                    +1 302 464 0950
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                  <Mail className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <MapPinIcon className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                  <p className="text-blue-400">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISpaceTechnologyPlatform;