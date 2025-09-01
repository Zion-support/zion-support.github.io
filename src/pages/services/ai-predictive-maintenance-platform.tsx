import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wrench, 
  Activity, 
  AlertTriangle, 
  BarChart3, 
  Brain, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Users,
  Shield,
  Globe,
  Award,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Zap,
  TrendingUp,
  Database,
  Cloud,
  Smartphone
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIPredictiveMaintenancePlatform() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Failure Prediction",
      description: "Advanced machine learning algorithms predict equipment failures with 94% accuracy up to 30 days in advance"
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring of equipment health with IoT sensors and edge computing for instant alerts"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics Dashboard",
      description: "Comprehensive insights into equipment performance, maintenance schedules, and cost optimization"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Automated Maintenance Scheduling",
      description: "AI-driven maintenance planning that optimizes schedules based on usage patterns and failure predictions"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Continuous optimization of equipment performance and energy efficiency through machine learning"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Historical Data Analysis",
      description: "Deep analysis of historical performance data to identify patterns and improve predictive accuracy"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$399",
      period: "/month",
      features: [
        "Up to 50 equipment units",
        "Basic AI predictions",
        "Standard monitoring",
        "Email alerts",
        "Basic analytics dashboard",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      features: [
        "Up to 200 equipment units",
        "Advanced AI predictions",
        "Real-time monitoring",
        "SMS & email alerts",
        "Advanced analytics",
        "Maintenance scheduling",
        "API access",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      features: [
        "Unlimited equipment units",
        "Custom AI models",
        "Edge computing deployment",
        "Custom integrations",
        "White-label options",
        "Dedicated support",
        "SLA guarantees",
        "On-site training"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Reduce unplanned downtime by 75%",
    "Lower maintenance costs by 40%",
    "Extend equipment lifespan by 30%",
    "Improve operational efficiency by 60%",
    "Save $100,000+ annually on maintenance",
    "Increase equipment reliability to 99.5%"
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Predictive maintenance for production lines, CNC machines, and industrial equipment",
      savings: "$500K+ annually"
    },
    {
      industry: "Healthcare",
      description: "Medical equipment monitoring and predictive maintenance for critical devices",
      savings: "$200K+ annually"
    },
    {
      industry: "Transportation",
      description: "Fleet maintenance optimization and vehicle health monitoring",
      savings: "$300K+ annually"
    },
    {
      industry: "Energy",
      description: "Wind turbine, solar panel, and power plant equipment monitoring",
      savings: "$1M+ annually"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI-Powered Predictive Maintenance Platform - Zion Tech Group"
        description="Advanced AI platform for predictive maintenance, equipment monitoring, and maintenance optimization. Reduce downtime by 75% and save 40% on maintenance costs."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Predictive Maintenance Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your maintenance operations with intelligent failure prediction, real-time monitoring, and automated scheduling. 
              Reduce unplanned downtime by 75% while cutting maintenance costs by 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Predictive Maintenance Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built by industrial engineers and AI experts, our platform delivers unprecedented accuracy in equipment failure prediction and maintenance optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <p className="text-white text-lg font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Maintenance Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to transform your maintenance operations from reactive to predictive.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored predictive maintenance solutions for your industry with proven ROI and results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="flex items-center text-green-400 font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {useCase.savings}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your organization's size and maintenance needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-slate-700 hover:border-blue-500'
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full inline-flex justify-center items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Maintenance Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already reduced downtime and maintenance costs with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}