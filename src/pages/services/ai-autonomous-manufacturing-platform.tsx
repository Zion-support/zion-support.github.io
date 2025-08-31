import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Cpu,
  Brain,
  Zap,
  Shield,
  BarChart3,
  Globe,
  Clock,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Target,
  Rocket,
  Star,
  Award,
  Phone,
  Mail,
  MapPin,
  Database,
  Network,
  Lock,
  Cloud,
  Workflow,
  Users,
  Eye,
  Search,
  Code,
  Microchip,
  Settings,
  Wifi,
  Activity,
  Monitor,
  Factory,
  Cog,
  Wrench,
  Truck,
  Package,
  Gauge,
  AlertTriangle
} from 'lucide-react';

const AIAutonomousManufacturingPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Production Planning",
      description: "Intelligent production scheduling and optimization using machine learning algorithms for maximum efficiency"
    },
    {
      icon: Cpu,
      title: "Autonomous Quality Control",
      description: "Computer vision and AI systems that automatically detect defects and ensure product quality with 99.9% accuracy"
    },
    {
      icon: Workflow,
      title: "Smart Process Automation",
      description: "End-to-end automation of manufacturing processes with AI-driven decision making and predictive maintenance"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics Dashboard",
      description: "Comprehensive monitoring and analytics for production metrics, efficiency, and predictive insights"
    },
    {
      icon: Shield,
      title: "Cybersecurity & Compliance",
      description: "Industrial-grade security with OT/IT convergence protection and regulatory compliance (ISO 27001, NIST)"
    },
    {
      icon: Cloud,
      title: "Edge Computing Integration",
      description: "Local processing capabilities with cloud connectivity for real-time decision making and data synchronization"
    }
  ];

  const pricing = [
    {
      name: "Manufacturing Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small manufacturing facilities (1-10 production lines)",
      features: [
        "Basic AI quality control",
        "Production monitoring",
        "5 user licenses",
        "Email support",
        "Standard security",
        "Mobile app access",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Manufacturing Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for medium-sized facilities (10-50 production lines)",
      features: [
        "All Starter features",
        "Advanced AI analytics",
        "Predictive maintenance",
        "20 user licenses",
        "Priority support",
        "Custom integrations",
        "Advanced reporting",
        "API access"
      ],
      popular: true
    },
    {
      name: "Manufacturing Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large manufacturing plants (50+ production lines)",
      features: [
        "All Professional features",
        "Unlimited production lines",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solutions",
        "Advanced security",
        "Custom development",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "40% Cost Reduction",
      description: "Streamline operations and eliminate inefficiencies with AI-powered optimization"
    },
    {
      icon: Clock,
      title: "60% Faster Production",
      description: "AI-driven automation and optimization accelerate manufacturing processes"
    },
    {
      icon: Target,
      title: "99.9% Quality Rate",
      description: "Advanced AI systems ensure consistent product quality and defect detection"
    },
    {
      icon: Users,
      title: "Enhanced Safety",
      description: "AI monitoring and automation reduce workplace accidents and improve worker safety"
    }
  ];

  const useCases = [
    {
      icon: Factory,
      title: "Automotive Manufacturing",
      description: "AI-powered assembly lines, quality control, and supply chain optimization"
    },
    {
      icon: Package,
      title: "Electronics Production",
      description: "Precision manufacturing with AI quality assurance and component tracking"
    },
    {
      icon: Cog,
      title: "Industrial Equipment",
      description: "Smart manufacturing with predictive maintenance and performance optimization"
    },
    {
      icon: Truck,
      title: "Supply Chain Management",
      description: "End-to-end visibility and AI-driven logistics optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              Next-Generation Smart Manufacturing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                Manufacturing Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your manufacturing operations with the world's most intelligent autonomous platform. 
              Powered by advanced AI, computer vision, and IoT sensors to drive efficiency, quality, 
              and safety across your entire production facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Smart Manufacturing
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <a
                href="tel:+1 302 464 0950"
                className="px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/10 hover:border-green-400 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call +1 302 464 0950
              </a>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Revolutionary Manufacturing Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experience the future of manufacturing with AI-powered intelligence, automation, 
              and real-time insights that transform how you produce and deliver products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-green-500/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI manufacturing platform is transforming industries across the globe, 
              from automotive to electronics, with intelligent automation and quality control.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {useCase.description}
                </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Smart Manufacturing Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your manufacturing facility. All plans include our core AI capabilities 
              with industrial-grade security and 24/7 support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-green-500 shadow-2xl shadow-green-500/25' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400 font-normal">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-cyan-500 text-white hover:from-green-600 hover:to-cyan-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Proven Manufacturing Benefits
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Join hundreds of manufacturing facilities that have transformed their operations 
              with our AI autonomous manufacturing platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/50 to-cyan-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Manufacturing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free 30-day trial today and experience the power of AI-driven 
              autonomous manufacturing that revolutionizes your production processes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-green-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <a
                href="tel:+1 302 464 0950"
                className="px-8 py-4 border-2 border-green-400/50 text-green-400 font-semibold rounded-xl hover:bg-green-400/10 hover:border-green-400 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call +1 302 464 0950
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>30-Day Free Trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>No Setup Fees</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>24/7 Expert Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <a href="tel:+1 302 464 0950" className="text-gray-300 hover:text-green-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-green-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">
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

export default AIAutonomousManufacturingPlatform;