import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon, 
  CogIcon, 
  RocketLaunchIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
=======
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cpu, 
  Database, 
  Network, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  Lock,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Phone,
  Mail,
  MapPin,
  Bot,
  Cog,
  Activity
} from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e

const AIAutonomousSystems: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: CpuChipIcon,
      title: "Intelligent Decision Making",
      description: "AI-powered autonomous decision-making systems that learn and adapt to complex environments in real-time."
    },
    {
      icon: CpuChipIcon,
      title: "Machine Learning Integration",
      description: "Advanced ML algorithms that continuously improve system performance and decision accuracy."
    },
    {
      icon: CogIcon,
      title: "Automated Operations",
      description: "Fully autonomous system operations with minimal human intervention and maximum efficiency."
    },
    {
      icon: RocketLaunchIcon,
      title: "Scalable Architecture",
      description: "Modular and scalable system architecture that grows with your business needs."
    },
    {
      icon: ChartBarIcon,
      title: "Performance Analytics",
      description: "Comprehensive analytics and monitoring for system performance optimization and insights."
    },
    {
      icon: GlobeAltIcon,
      title: "Global Connectivity",
      description: "Seamless integration with global networks and cloud-based autonomous systems."
    }
  ];

  const benefits = [
    "Increase operational efficiency by 400%",
    "Reduce human error by 95%",
    "24/7 autonomous operation capability",
    "Real-time adaptive decision making",
    "Scalable across all business units",
    "Cost reduction of up to 70% in operations"
  ];

  const useCases = [
    {
      title: "Manufacturing Automation",
      description: "Intelligent manufacturing systems with autonomous quality control and production optimization."
    },
    {
      title: "Logistics & Supply Chain",
      description: "Autonomous logistics systems with intelligent routing and inventory management."
    },
    {
      title: "Healthcare Systems",
      description: "AI-powered healthcare automation with autonomous patient monitoring and care coordination."
    },
    {
      title: "Financial Services",
      description: "Autonomous trading systems and risk management with real-time market analysis."
    }
  ];

  const systemMetrics = [
    {
      metric: "Decision Accuracy",
      value: "99.7%",
      description: "Accuracy of autonomous decisions"
    },
    {
      metric: "Response Time",
      value: "<100ms",
      description: "Average system response time"
    },
    {
      metric: "Uptime",
      value: "99.99%",
      description: "System availability and reliability"
    },
    {
      metric: "Learning Rate",
      value: "+15%",
      description: "Monthly improvement in performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Helmet>
        <title>AI Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered autonomous systems platform. Intelligent decision-making, automated operations, and scalable architecture for enterprise transformation." />
        <meta name="keywords" content="AI systems, autonomous systems, intelligent automation, AI decision making, system automation, AI operations" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-autonomous-systems" />
      </Helmet>

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
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              AI Autonomous Systems
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Next-generation autonomous systems powered by artificial intelligence that make 
              intelligent decisions, operate independently, and continuously learn and improve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start System Assessment
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Demo
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
=======
      <section className="py-16 px-4">
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Autonomous Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI autonomous systems combine cutting-edge artificial intelligence with 
              advanced automation to deliver unprecedented operational efficiency and intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Autonomous Systems are designed with cutting-edge technology to deliver intelligent, reliable, and scalable solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
<<<<<<< HEAD
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
=======
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
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and intelligence with our AI autonomous 
              systems that never sleep and never stop learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-8 border border-cyan-500/30"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">System Performance</h3>
              <div className="space-y-4">
                {systemMetrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-300">{metric.metric}</span>
                    <span className="text-cyan-400 font-semibold">{metric.value}</span>
                  </div>
                ))}
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
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
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
=======
      <section className="py-16 px-4 bg-gray-800/30">
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From manufacturing to healthcare, our AI autonomous systems provide 
              intelligent solutions for every industry and use case.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to meet your automation and AI needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/30 rounded-lg p-8 border transition-all duration-300 ${
                plan.popular 
                  ? 'border-purple-500 bg-purple-500/10' 
                  : 'border-gray-700 hover:border-cyan-500'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.plan === "Enterprise" ? "/contact" : "/contact"}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                      : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
=======
      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the latest AI and machine learning technologies for maximum 
              performance, reliability, and scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <CpuChipIcon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Deep Learning</h3>
              <p className="text-gray-300">Advanced neural networks for complex pattern recognition and decision making</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <ShieldCheckIcon className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
              <p className="text-gray-300">Enterprise-grade security with encryption and access control</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <LightBulbIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
              <p className="text-gray-300">Systems that continuously improve and adapt to new challenges</p>
            </motion.div>
=======
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the AI revolution and unlock unprecedented efficiency and intelligence for your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700/70 text-white font-semibold rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              Explore All Services
            </Link>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-889e
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
>>>>>>> origin/cursor/website-audit-and-enhancement-da65
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