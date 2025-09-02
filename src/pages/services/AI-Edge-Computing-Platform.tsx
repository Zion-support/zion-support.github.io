import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, BarChart3, Users, CheckCircle, Globe, FileText, Settings, Target, Activity, Clock, TrendingUp, Award, Phone, Mail, MapPin, Network, Database, Wifi } from 'lucide-react';

const AIEdgeComputingPlatform: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: "Edge AI Processing",
      description: "Real-time AI inference at the edge with ultra-low latency processing capabilities."
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Sub-millisecond response times for critical applications and real-time decision making."
    },
    {
      icon: Shield,
      title: "Edge Security",
      description: "Advanced security protocols and data protection at the edge infrastructure."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Live data processing and analytics without cloud dependency for faster insights."
    },
    {
      icon: Network,
      title: "Distributed Computing",
      description: "Intelligent workload distribution across edge nodes for optimal performance."
    },
    {
      icon: Database,
      title: "Local Data Processing",
      description: "Process sensitive data locally while maintaining privacy and compliance."
    }
  ];

  const benefits = [
    "Reduce latency by 90% compared to cloud processing",
    "Process data 10x faster at the edge",
    "Reduce bandwidth costs by 70%",
    "Improve reliability with offline capabilities",
    "Enhanced data privacy and security",
    "Real-time decision making capabilities",
    "Scalable edge infrastructure",
    "Cost-effective data processing"
  ];

  const useCases = [
    {
      title: "Autonomous Vehicles",
      description: "Real-time object detection, path planning, and decision making for autonomous driving systems."
    },
    {
      title: "Industrial IoT",
      description: "Predictive maintenance, quality control, and process optimization in manufacturing."
    },
    {
      title: "Smart Cities",
      description: "Traffic management, environmental monitoring, and public safety systems."
    },
    {
      title: "Healthcare",
      description: "Real-time patient monitoring, medical imaging analysis, and emergency response."
    },
    {
      title: "Retail",
      description: "Customer behavior analysis, inventory management, and personalized experiences."
    },
    {
      title: "Telecommunications",
      description: "5G network optimization, content delivery, and network function virtualization."
    }
  ];

  const edgeTechnologies = [
    "Edge AI Chips",
    "5G Edge Computing",
    "Edge Containers",
    "Edge Databases",
    "Edge Analytics",
    "Edge Security",
    "Edge Orchestration",
    "Edge Networking"
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$3,800",
      period: "/month",
      description: "Perfect for small-scale edge deployments",
      features: [
        "Basic edge AI processing",
        "Up to 5 edge nodes",
        "Standard analytics",
        "Email support",
        "Basic security features"
      ]
    },
    {
      plan: "Professional",
      price: "$12,500",
      period: "/month",
      description: "Ideal for medium to large enterprises",
      features: [
        "Advanced edge AI capabilities",
        "Up to 50 edge nodes",
        "Real-time analytics",
        "Priority support",
        "Advanced security",
        "Custom integrations"
      ]
    },
    {
      plan: "Enterprise",
      price: "$19,500",
      period: "/month",
      description: "For large-scale edge deployments",
      features: [
        "Full edge computing suite",
        "Unlimited edge nodes",
        "Custom AI models",
        "24/7 dedicated support",
        "Maximum security",
        "White-label solution",
        "Custom development"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-indigo-600/20 rounded-full">
              <Cpu className="w-12 h-12 text-indigo-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Edge Computing Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your edge computing with AI-powered analytics, real-time processing,
            and intelligent orchestration. Process data where it's generated for maximum performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:border-gray-500 font-semibold rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Edge Computing Features
            </h2>
            <p className="text-xl text-gray-300">
              Powerful AI-driven edge computing capabilities for real-time processing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-indigo-600/20 rounded-lg">
                    <feature.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Edge Computing Benefits
            </h2>
            <p className="text-xl text-gray-300">
              Transform your operations with edge computing advantages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300">
              Real-world edge computing solutions across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-300">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Edge Technologies
            </h2>
            <p className="text-xl text-gray-300">
              Cutting-edge technologies powering the edge computing revolution
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {edgeTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
              >
                <div className="p-2 bg-indigo-600/20 rounded-lg w-fit mx-auto mb-3">
                  <Wifi className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-white font-semibold">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300">
              Scale your edge computing infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 border rounded-xl p-8 ${
                  index === 1 ? 'border-indigo-500 bg-indigo-500/10' : 'border-white/10'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  index === 1
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Move to the Edge?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your applications with edge computing and unlock real-time processing
            capabilities for your most demanding workloads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-gray-600 text-gray-300 hover:border-gray-500 font-semibold rounded-lg transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Ready to implement edge computing? Contact our edge computing experts today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-3 bg-indigo-600/20 rounded-full w-fit mx-auto mb-4">
                <Phone className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-indigo-600/20 rounded-full w-fit mx-auto mb-4">
                <Mail className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-indigo-600/20 rounded-full w-fit mx-auto mb-4">
                <MapPin className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEdgeComputingPlatform;