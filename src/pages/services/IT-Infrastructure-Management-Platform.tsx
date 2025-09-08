import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  TrendingUp,
  Lock,
  Eye,
  BarChart3,
  Clock,
  DollarSign,
  Globe,
  Award,
  Target,
  Lightbulb,
  Code,
  Database,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  Bell,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Network,
  Cpu,
  HardDrive,
  Wifi,
  Cloud,
  Activity,
  AlertTriangle,
  CheckSquare,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Router,
  Switch,
  Firewall,
  Backup,
  Recovery,
  Update,
  Security,
  Performance,
  Scalability
} from 'lucide-react';

export default function ITInfrastructureManagementPlatform() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: Server,
      title: "Unified Infrastructure Management",
      description: "Centralized control over servers, networks, storage, and cloud resources"
    },
    {
      icon: Shield,
      title: "Advanced Security & Compliance",
      description: "Enterprise-grade security with automated threat detection and compliance monitoring"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "AI-powered performance monitoring and automated optimization recommendations"
    },
    {
      icon: Cloud,
      title: "Hybrid Cloud Management",
      description: "Seamless management across on-premise, private, and public cloud environments"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 50 devices",
        "Basic monitoring",
        "Standard security",
        "Email support",
        "Basic reporting",
        "Cloud backup (100GB)",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing companies and IT teams",
      features: [
        "Up to 500 devices",
        "Advanced monitoring",
        "Enhanced security",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Team collaboration",
        "Cloud backup (1TB)",
        "Custom integrations",
        "24/7 monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations with complex infrastructure",
      features: [
        "Unlimited devices",
        "Enterprise monitoring",
        "Custom security policies",
        "Dedicated support",
        "Advanced security",
        "Compliance reporting",
        "White-label options",
        "On-premise deployment",
        "Custom SLAs",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Reduce Downtime",
      description: "Minimize system outages with proactive monitoring and alerts"
    },
    {
      icon: DollarSign,
      title: "Lower IT Costs",
      description: "Reduce operational costs by up to 40% through automation"
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Protect your infrastructure with enterprise-grade security"
    },
    {
      icon: TrendingUp,
      title: "Improve Efficiency",
      description: "Streamline IT operations with intelligent automation"
    }
  ];

  const solutions = [
    {
      icon: Monitor,
      title: "Server Management",
      description: "Comprehensive server monitoring, patching, and optimization"
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Network monitoring, configuration management, and performance optimization"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Database performance monitoring, backup, and recovery solutions"
    },
    {
      icon: Security,
      title: "Security Management",
      description: "Threat detection, vulnerability management, and compliance monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Server className="w-4 h-4 mr-2" />
              Enterprise IT Infrastructure Management
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Infrastructure
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Management Platform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Streamline your IT operations with our comprehensive infrastructure management platform. 
              Monitor, secure, and optimize your entire technology stack from a single dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern IT Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform provides everything you need to manage your IT infrastructure efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end solutions for all your IT infrastructure needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the benefits of comprehensive IT infrastructure management
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
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your IT infrastructure needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-purple-500/50 bg-purple-500/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies already using our infrastructure management platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have questions? Our team is here to help you get started
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-white font-semibold">+1 302 464 0950</p>
                <p className="text-gray-400">Call us anytime</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
                <p className="text-gray-400">Email support</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-white font-semibold">364 E Main St STE 1008</p>
                <p className="text-gray-400">Middletown DE 19709</p>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Request a Demo</h3>
              <p className="text-gray-300 mb-6">
                See our platform in action with a personalized demo
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}