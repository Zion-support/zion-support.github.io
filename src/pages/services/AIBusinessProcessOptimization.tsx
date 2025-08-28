import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  BarChart3, 
  Clock, 
  DollarSign, 
  Shield, 
  Users, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Globe,
  Cpu,
  Database,
  Workflow,
  Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AIBusinessProcessOptimization: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Process Analysis",
      description: "Advanced machine learning algorithms analyze your business processes to identify inefficiencies, bottlenecks, and optimization opportunities in real-time."
    },
    {
      icon: Workflow,
      title: "Intelligent Workflow Automation",
      description: "Automatically design and implement optimized workflows that adapt to changing business conditions and learn from user behavior patterns."
    },
    {
      icon: BarChart3,
      title: "Predictive Performance Analytics",
      description: "Forecast process performance, resource requirements, and potential issues before they impact your operations using AI-driven predictive modeling."
    },
    {
      icon: Zap,
      title: "Real-Time Optimization",
      description: "Continuously monitor and optimize processes in real-time, automatically adjusting parameters and workflows for maximum efficiency."
    },
    {
      icon: Users,
      title: "Human-AI Collaboration",
      description: "Seamless integration between human workers and AI systems, with intelligent task allocation and decision support for optimal team performance."
    },
    {
      icon: Shield,
      title: "Compliance & Risk Management",
      description: "Built-in compliance monitoring and risk assessment, ensuring all process optimizations meet regulatory requirements and industry standards."
    }
  ];

  const benefits = [
    "Reduce process execution time by 40-60%",
    "Cut operational costs by 25-35%",
    "Improve process accuracy by 95%",
    "Increase employee productivity by 30%",
    "Reduce manual errors by 90%",
    "Achieve 99.9% process uptime"
  ];

  const useCases = [
    {
      title: "Manufacturing & Production",
      description: "Optimize production lines, inventory management, and quality control processes for maximum efficiency and minimal waste.",
      icon: Cpu
    },
    {
      title: "Financial Services",
      description: "Streamline loan processing, risk assessment, compliance workflows, and customer onboarding for faster service delivery.",
      icon: DollarSign
    },
    {
      title: "Healthcare & Life Sciences",
      description: "Optimize patient care workflows, clinical trial processes, and administrative operations for better patient outcomes.",
      icon: Users
    },
    {
      title: "Retail & E-commerce",
      description: "Streamline order fulfillment, inventory management, customer service, and supply chain operations for seamless customer experiences.",
      icon: Globe
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$799",
      period: "/month",
      description: "Perfect for small businesses starting their process optimization journey",
      features: [
        "Up to 10 process workflows",
        "Basic AI analysis and recommendations",
        "Standard reporting and dashboards",
        "Email support",
        "Basic integration capabilities"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing companies with complex process optimization needs",
      features: [
        "Up to 50 process workflows",
        "Advanced AI optimization algorithms",
        "Real-time monitoring and alerts",
        "Custom dashboards and reports",
        "Priority support",
        "Advanced integrations",
        "Process simulation and testing"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "Comprehensive solution for large enterprises with complex operations",
      features: [
        "Unlimited process workflows",
        "Custom AI model training",
        "Advanced analytics and insights",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations and APIs",
        "On-premise deployment options",
        "Advanced security and compliance"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const roi = [
    {
      metric: "Process Efficiency",
      improvement: "40-60%",
      description: "Faster execution and reduced cycle times"
    },
    {
      metric: "Cost Reduction",
      improvement: "25-35%",
      description: "Lower operational and labor costs"
    },
    {
      metric: "Error Reduction",
      improvement: "90%",
      description: "Minimal manual errors and rework"
    },
    {
      metric: "Productivity Gain",
      improvement: "30%",
      description: "Increased employee output and satisfaction"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-8">
              <Workflow className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Business Process Optimization
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business operations with intelligent process optimization that learns, adapts, and continuously improves your workflows for maximum efficiency and cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Start Optimizing Today
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="tel:+13024640950"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-blue-400/30 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <Phone className="w-5 h-5 mr-2 inline-block" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Intelligent Process Optimization Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive tools to analyze, optimize, and continuously improve your business processes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-blue-400/40 transition-all duration-300 group hover:transform hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements in efficiency, cost reduction, and operational excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI process optimization platform delivers results across diverse industries and business functions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business size and optimization needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/10 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-blue-400/50 bg-gradient-to-br from-blue-600/20 to-purple-600/20' 
                    : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Proven Return on Investment
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our clients consistently achieve significant improvements in operational efficiency and cost reduction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roi.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">{metric.improvement}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{metric.metric}</h3>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Business Processes?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI-powered process optimization can transform your operations and drive measurable results for your business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3 text-white">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="tel:+13024640950"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-blue-400/30 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:bg-white/20 hover:border-blue-400/50"
              >
                <Phone className="w-5 h-5 mr-2 inline-block" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-blue-400" />
            <span className="text-white font-semibold">Zion Tech Group</span>
            <Star className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-gray-400">
            Transforming businesses through intelligent AI solutions and process optimization.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <a href="https://ziontechgroup.com" className="hover:text-blue-400 transition-colors">
              ziontechgroup.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIBusinessProcessOptimization;