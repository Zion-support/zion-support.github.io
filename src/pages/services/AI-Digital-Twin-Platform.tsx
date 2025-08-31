import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Database, 
  BarChart3, 
  Globe, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Settings,
  Target,
  Star,
  TrendingUp,
  Shield,
  Monitor,
  Network
} from 'lucide-react';

const AIDigitalTwinPlatform: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: "Real-time Digital Twin Creation",
      description: "Build accurate digital replicas of physical assets, processes, and systems"
    },
    {
      icon: Database,
      title: "AI-Powered Predictive Analytics",
      description: "Use machine learning to predict maintenance needs and optimize performance"
    },
    {
      icon: BarChart3,
      title: "Live Performance Monitoring",
      description: "Monitor real-time data from IoT sensors and connected devices"
    },
    {
      icon: Globe,
      title: "Multi-Asset Management",
      description: "Manage digital twins across multiple locations and asset types"
    },
    {
      icon: Zap,
      title: "Automated Optimization",
      description: "AI-driven recommendations for performance improvement and cost reduction"
    },
    {
      icon: Users,
      title: "Collaborative Workspace",
      description: "Team-based access to digital twin data and analytics"
    }
  ];

  const benefits = [
    "Reduce operational costs by 25-40% through predictive maintenance",
    "Improve asset performance by 30-50% with real-time optimization",
    "Cut downtime by up to 60% through early issue detection",
    "Increase energy efficiency by 20-35% with AI optimization",
    "Enable remote monitoring and control of critical assets",
    "Reduce safety risks by 40% through virtual testing and simulation"
  ];

  const pricing = [
    {
      plan: "Professional",
      price: "$4,200",
      period: "/month",
      features: [
        "Up to 50 digital twins",
        "Basic AI analytics",
        "Real-time monitoring",
        "Standard reporting",
        "Email support",
        "Basic integrations"
      ]
    },
    {
      plan: "Enterprise",
      price: "$9,800",
      period: "/month",
      features: [
        "Up to 500 digital twins",
        "Advanced AI analytics",
        "Predictive maintenance",
        "Custom dashboards",
        "Priority support",
        "API access",
        "Advanced integrations"
      ]
    },
    {
      plan: "Industrial",
      price: "$24,000",
      period: "/month",
      features: [
        "Unlimited digital twins",
        "Custom AI model training",
        "Multi-site management",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label options",
        "On-premise deployment"
      ]
    }
  ];

  const useCases = [
    {
      title: "Manufacturing",
      description: "Digital twins of production lines, equipment, and processes",
      icon: Cpu
    },
    {
      title: "Smart Cities",
      description: "Urban infrastructure, traffic systems, and utility networks",
      icon: Globe
    },
    {
      title: "Healthcare",
      description: "Medical devices, hospital systems, and patient monitoring",
      icon: Shield
    },
    {
      title: "Energy",
      description: "Power plants, renewable energy systems, and grid management",
      icon: Zap
    }
  ];

  const technologies = [
    {
      title: "IoT Integration",
      description: "Connect sensors, devices, and equipment for real-time data",
      icon: Network
    },
    {
      title: "AI/ML Models",
      description: "Advanced algorithms for prediction and optimization",
      icon: Brain
    },
    {
      title: "3D Visualization",
      description: "Immersive 3D models and augmented reality interfaces",
      icon: Eye
    },
    {
      title: "Cloud Computing",
      description: "Scalable infrastructure for processing and storage",
      icon: Cloud
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              AI-Powered Digital Twin Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Digital Twin
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {" "}Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create intelligent digital replicas of your physical world. Monitor, predict, and 
              optimize performance with AI-powered digital twins for maximum efficiency and insight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Digital Twin Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leverage cutting-edge AI to create, manage, and optimize digital twins
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built on the latest advancements in AI, IoT, and cloud computing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-400">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform operations across various industries with digital twin technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-400">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-slate-800/30">
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
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See measurable improvements in efficiency, performance, and cost savings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the plan that fits your digital twin implementation needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  index === 1 
                    ? 'border-purple-500/50 bg-purple-500/5' 
                    : 'border-slate-700'
                }`}
              >
                {index === 1 && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500 text-white text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    index === 1
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'border border-slate-600 text-gray-300 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build Your Digital Twin?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join leading organizations that trust our AI-powered digital twin platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-gray-500 hover:text-white transition-all duration-200"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 text-gray-400">
            <div>
              <h3 className="text-white font-semibold mb-2">Contact Us</h3>
              <p>kleber@ziontechgroup.com</p>
              <p>+1 (302) 464-0950</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p>364 E Main St STE 1008</p>
              <p>Middletown DE 19709</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Website</h3>
              <a 
                href="https://ziontechgroup.com" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDigitalTwinPlatform;