import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  Lock,
  Database,
  Network,
  Globe,
  Users,
  BarChart3,
  FileText,
  Clock,
  Star,
  Award,
  Target,
  Rocket,
  Smartphone,
  Wifi,
  Server,
  Cloud,
  Activity,
  Monitor,
  Smartphone as MobileIcon
} from 'lucide-react';

const AIEdgeComputingPlatform = () => {
  const features = [
    {
      title: "Edge AI Processing",
      description: "Run AI models directly on edge devices for real-time decision making",
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      benefits: ["Sub-10ms latency", "Offline AI capabilities", "Reduced bandwidth costs"]
    },
    {
      title: "Intelligent Edge Orchestration",
      description: "Automatically distribute workloads across edge nodes using AI optimization",
      icon: <Network className="w-6 h-6 text-green-500" />,
      benefits: ["Dynamic load balancing", "Predictive scaling", "Fault tolerance"]
    },
    {
      title: "Edge Security & Privacy",
      description: "Advanced security protocols with local data processing and encryption",
      icon: <Shield className="w-6 h-6 text-red-500" />,
      benefits: ["Zero-trust architecture", "Local data processing", "Compliance ready"]
    },
    {
      title: "Real-time Analytics",
      description: "Process and analyze data at the edge for instant insights and actions",
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      benefits: ["Real-time insights", "Reduced cloud costs", "Improved user experience"]
    }
  ];

  const pricingPlans = [
    {
      name: "Edge Starter",
      price: "$199/month",
      description: "Perfect for small IoT deployments and startups",
      features: [
        "Edge AI Processing",
        "5 Edge Nodes",
        "Basic Analytics",
        "Email Support",
        "100GB Data/month"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Edge Professional",
      price: "$599/month",
      description: "Ideal for growing businesses and IoT networks",
      features: [
        "Everything in Starter",
        "Advanced Edge Orchestration",
        "25 Edge Nodes",
        "Priority Support",
        "500GB Data/month",
        "Custom AI Models"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Edge Enterprise",
      price: "Custom Pricing",
      description: "For large organizations with extensive edge deployments",
      features: [
        "Everything in Professional",
        "Unlimited Edge Nodes",
        "Unlimited Data",
        "Dedicated Support Team",
        "Custom Edge Hardware",
        "On-premise Edge Setup"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Smart Cities",
      description: "Real-time traffic management, environmental monitoring, and public safety",
      icon: <Globe className="w-8 h-8 text-green-500" />
    },
    {
      title: "Industrial IoT",
      description: "Predictive maintenance, quality control, and process optimization",
      icon: <Server className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Autonomous Vehicles",
      description: "Real-time decision making, sensor fusion, and safety systems",
      icon: <Car className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Healthcare Monitoring",
      description: "Patient monitoring, medical device management, and emergency response",
      icon: <Activity className="w-8 h-8 text-orange-500" />
    }
  ];

  const edgeAdvantages = [
    {
      title: "Ultra-Low Latency",
      description: "Process data locally for sub-10ms response times",
      icon: <Zap className="w-12 h-12 text-yellow-500" />
    },
    {
      title: "Bandwidth Optimization",
      description: "Reduce cloud data transfer by processing locally",
      icon: <Wifi className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Offline Operation",
      description: "Continue functioning even without internet connectivity",
      icon: <Server className="w-12 h-12 text-green-500" />
    },
    {
      title: "Enhanced Privacy",
      description: "Keep sensitive data local and reduce exposure risks",
      icon: <Lock className="w-12 h-12 text-purple-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Cpu className="w-16 h-16 text-blue-500 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                AI-Powered Edge Computing Platform
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Bring AI to the edge of your network. Process data locally, reduce latency, 
              and enable real-time decision making across your IoT infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-semibold text-lg">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Edge Advantages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the transformative benefits of processing data closer to where it's generated
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {edgeAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Edge-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge edge computing capabilities with AI integration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  {feature.icon}
                  <h3 className="text-2xl font-semibold text-white ml-4">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Edge Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scale your edge computing infrastructure with flexible pricing options
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500 ring-2 ring-blue-500/20' 
                    : 'border-slate-700'
                } hover:border-blue-500 transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  {plan.price !== "Custom Pricing" && (
                    <p className="text-gray-400">per month</p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform various industries with edge computing solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Bring AI to the Edge?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the edge computing revolution and transform your IoT infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition-colors font-semibold text-lg">
                Schedule a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIEdgeComputingPlatform;