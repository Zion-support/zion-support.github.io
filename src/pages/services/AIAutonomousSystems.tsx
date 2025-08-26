import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Database,
  Lock,
  Cloud,
  Settings,
  Monitor,
  AlertTriangle,
  RefreshCw,
  Eye,
  Heart,
  Star
} from 'lucide-react';

const AIAutonomousSystems = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Decision Making",
      description: "Advanced algorithms that make intelligent decisions in real-time, optimizing business processes and outcomes.",
      benefits: ["Reduced decision latency", "Improved accuracy", "24/7 operation"]
    },
    {
      icon: Cpu,
      title: "Autonomous Process Automation",
      description: "Self-managing systems that handle complex workflows without human intervention.",
      benefits: ["Increased efficiency", "Cost reduction", "Error elimination"]
    },
    {
      icon: Shield,
      title: "Intelligent Security",
      description: "AI-driven threat detection and response systems that protect your digital assets proactively.",
      benefits: ["Real-time monitoring", "Automated response", "Threat prevention"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Machine learning models that forecast trends and identify opportunities before they become apparent.",
      benefits: ["Strategic insights", "Risk mitigation", "Growth optimization"]
    }
  ];

  const useCases = [
    {
      title: "Manufacturing & Supply Chain",
      description: "Autonomous inventory management, predictive maintenance, and supply chain optimization.",
      icon: Database
    },
    {
      title: "Financial Services",
      description: "Automated trading, fraud detection, and risk assessment systems.",
      icon: BarChart3
    },
    {
      title: "Healthcare",
      description: "Patient monitoring, diagnostic assistance, and treatment optimization.",
      icon: Users
    },
    {
      title: "Retail & E-commerce",
      description: "Personalized recommendations, inventory management, and customer service automation.",
      icon: Target
    }
  ];

  const technologies = [
    "Machine Learning & Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Robotic Process Automation",
    "Edge Computing & IoT",
    "Quantum Computing Integration",
    "Blockchain & Distributed Systems",
    "Cloud-Native Architecture"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI & Autonomous Systems - Zion Tech Group" 
        description="Revolutionary AI systems that operate independently and transform business operations across industries."
        tags={["AI autonomous systems", "artificial intelligence", "machine learning", "business automation"]}
        url="https://ziontechgroup.com/services/ai-autonomous-systems"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
=======
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Cpu, Globe, Rocket, Users, Target } from 'lucide-react';

export default function AIAutonomousSystems() {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Decision Making",
      description: "AI systems that make autonomous decisions based on real-time data analysis and predictive modeling."
    },
    {
      icon: Zap,
      title: "Self-Learning Capabilities",
      description: "Continuous learning and adaptation to improve performance and efficiency over time."
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Built-in security protocols and threat detection for autonomous operation safety."
    },
    {
      icon: Cpu,
      title: "Scalable Architecture",
      description: "Modular design that scales from small implementations to enterprise-wide deployments."
    },
    {
      icon: Globe,
      title: "Multi-Domain Integration",
      description: "Seamless integration across different business domains and systems."
    },
    {
      icon: Rocket,
      title: "Future-Ready Technology",
      description: "Built on cutting-edge AI frameworks and designed for tomorrow's challenges."
    }
  ];

  const useCases = [
    "Autonomous Business Process Management",
    "Intelligent Customer Service Systems",
    "Predictive Maintenance Operations",
    "Autonomous Supply Chain Management",
    "Smart Energy Management Systems",
    "Autonomous Financial Trading Platforms"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Autonomous Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with intelligent, self-operating systems that learn, adapt, and optimize continuously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
=======
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              AI Autonomous Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with intelligent, self-managing systems that operate autonomously 
              while delivering unprecedented efficiency and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 text-lg font-semibold"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-40 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Systems are designed with cutting-edge technology to deliver intelligent, reliable, and scalable solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
      title: "Intelligent Decision Making",
      description: "AI systems that make autonomous decisions based on real-time data and learned patterns",
      icon: Brain,
      benefits: ["Real-time analysis", "Predictive modeling", "Adaptive learning"]
    },
    {
      title: "Self-Optimizing Systems",
      description: "Systems that continuously improve their performance without human intervention",
      icon: Cog,
      benefits: ["Performance optimization", "Efficiency gains", "Continuous improvement"]
    },
    {
      title: "Advanced Robotics Integration",
      description: "Seamless integration with robotic systems for autonomous operations",
      icon: Bot,
      benefits: ["Automated workflows", "Precision operations", "24/7 availability"]
    },
    {
      title: "Predictive Maintenance",
      description: "AI-powered systems that predict and prevent equipment failures",
      icon: Activity,
      benefits: ["Reduced downtime", "Cost savings", "Extended equipment life"]
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Autonomous production lines with AI-driven quality control and optimization",
      icon: Cog,
      examples: ["Quality control", "Production optimization", "Predictive maintenance"]
    },
    {
      title: "Healthcare",
      description: "AI-powered diagnostic systems and autonomous medical equipment",
      icon: Target,
      examples: ["Medical imaging", "Patient monitoring", "Drug discovery"]
    },
    {
      title: "Transportation",
      description: "Autonomous vehicles and intelligent traffic management systems",
      icon: Rocket,
      examples: ["Self-driving cars", "Traffic optimization", "Fleet management"]
    },
    {
      title: "Energy Management",
      description: "Smart grids and autonomous energy distribution systems",
      icon: Zap,
      examples: ["Grid optimization", "Renewable integration", "Demand response"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$3,500",
      period: "/month",
      description: "Perfect for small businesses starting with AI automation",
      features: [
        "Basic AI autonomous systems",
        "Standard API access",
        "Community support",
        "Basic documentation",
        "50 autonomous operations/day"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      plan: "Professional",
      price: "$12,000",
      period: "/month",
      description: "Ideal for growing businesses with complex automation needs",
      features: [
        "Advanced AI autonomous features",
        "Priority API access",
        "Dedicated support",
        "Comprehensive documentation",
        "500 autonomous operations/day",
        "Custom AI model training"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Full platform customization",
        "Unlimited operations",
        "24/7 dedicated support",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Active Systems" },
    { icon: TrendingUp, value: "85%", label: "Efficiency Gain" },
    { icon: Award, value: "25+", label: "Industry Awards" },
    { icon: Globe, value: "30+", label: "Countries" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Bot className="w-4 h-4 mr-2" />
              Next-Generation AI
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-600">
                Systems
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your operations with cutting-edge AI autonomous systems that think, learn, 
              and act independently. Experience the future of intelligent automation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Automation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                to="#demo"
                className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/70 text-white font-semibold rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI autonomous systems are built on cutting-edge technology, designed to deliver 
              intelligent automation across all aspects of your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-cyan-400">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the advanced features that make our AI autonomous systems the future of automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/30 rounded-lg p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <feature.icon className="w-16 h-16 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
=======
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg w-fit mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI Autonomous Systems can revolutionize various industries and business processes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-4 hover:bg-gray-600/50 transition-all duration-300"
              >
                <Target className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-200">{useCase}</span>
              </motion.div>
=======
      <section className="py-16 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From manufacturing to healthcare, our AI autonomous systems are revolutionizing industries worldwide
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <useCase.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                      {example}
                    </li>
                  ))}
                </ul>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how AI autonomous systems are revolutionizing industries across the globe.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <useCase.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on the latest advancements in artificial intelligence and autonomous systems.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <Cpu className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the AI revolution and unlock unprecedented efficiency and intelligence for your business operations.
=======
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how AI autonomous systems can revolutionize your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg shadow-cyan-500/30"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
=======
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Future?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the revolution of autonomous business operations with Zion Tech Group's AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Schedule Demo
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Go Autonomous?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your operations with AI autonomous systems that work smarter, 
              faster, and more efficiently than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousSystems;