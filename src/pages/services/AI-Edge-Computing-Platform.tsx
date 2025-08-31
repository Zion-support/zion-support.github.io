import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Cpu, 
  Wifi, 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Database,
  Network,
  Smartphone,
  Server,
  BarChart3,
  Clock,
  DollarSign,
  Users,
  Building2,
  Factory,
  Truck,
  Heart,
  ShoppingCart
} from 'lucide-react';

export default function AIEdgeComputingPlatform() {
  const features = [
    {
      title: "Real-time AI Processing",
      description: "Process AI models at the edge for instant decision-making",
      icon: Zap,
      benefits: ["Sub-10ms response times", "Reduced latency", "Improved user experience", "Real-time analytics"]
    },
    {
      title: "Edge AI Model Optimization",
      description: "Optimize AI models for edge devices with minimal resource usage",
      icon: Brain,
      benefits: ["Model compression", "Quantization", "Pruning", "Efficient inference"]
    },
    {
      title: "Distributed Edge Intelligence",
      description: "Distribute AI processing across multiple edge nodes",
      icon: Network,
      benefits: ["Load balancing", "Fault tolerance", "Scalable architecture", "Geographic distribution"]
    },
    {
      title: "Edge-Cloud Hybrid Processing",
      description: "Seamless integration between edge and cloud AI processing",
      icon: Cloud,
      benefits: ["Hybrid workloads", "Data synchronization", "Resource optimization", "Flexible deployment"]
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      icon: Factory,
      applications: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Worker safety monitoring"]
    },
    {
      industry: "Healthcare",
      icon: Heart,
      applications: ["Patient monitoring", "Medical imaging", "Drug discovery", "Telemedicine"]
    },
    {
      industry: "Transportation",
      icon: Truck,
      applications: ["Autonomous vehicles", "Traffic management", "Fleet optimization", "Predictive maintenance"]
    },
    {
      industry: "Retail",
      icon: ShoppingCart,
      applications: ["Inventory management", "Customer analytics", "Loss prevention", "Personalized experiences"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses starting with edge AI",
      features: [
        "Up to 10 edge nodes",
        "Basic AI model optimization",
        "Standard support",
        "Basic analytics dashboard"
      ]
    },
    {
      plan: "Professional",
      price: "$8,000",
      period: "/month",
      description: "Ideal for growing enterprises",
      features: [
        "Up to 100 edge nodes",
        "Advanced AI optimization",
        "Priority support",
        "Advanced analytics & monitoring",
        "Custom model deployment"
      ]
    },
    {
      plan: "Enterprise",
      price: "$25,000",
      period: "/month",
      description: "For large-scale deployments",
      features: [
        "Unlimited edge nodes",
        "Custom AI model development",
        "24/7 dedicated support",
        "Full analytics suite",
        "White-label solutions",
        "On-premise deployment"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI Edge Computing Platform | Zion Tech Group"
        description="Revolutionary AI Edge Computing Platform for real-time processing, distributed intelligence, and edge-cloud hybrid solutions. Transform your business with edge AI."
        keywords="AI edge computing, edge AI, real-time AI, distributed AI, edge-cloud hybrid, IoT AI, edge processing"
      />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6"
          >
            <Cpu className="w-4 h-4 mr-2" />
            AI Edge Computing Platform
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            AI at the Edge
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Intelligence Everywhere
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            Transform your business with our revolutionary AI Edge Computing Platform. 
            Process AI models at the edge for instant decision-making, reduced latency, 
            and distributed intelligence across your entire infrastructure.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
            >
              Start Your Edge AI Journey
            </a>
            <a
              href="#demo"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
            >
              Watch Demo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary Edge AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform brings AI processing to the edge, enabling real-time intelligence 
              and decision-making across your entire infrastructure.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how edge AI is transforming industries across the globe
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3">
                  {useCase.industry}
                </h3>
                
                <ul className="space-y-2">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="text-sm text-gray-300">
                      • {application}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.plan === 'Professional' 
                    ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent' 
                    : 'border-white/10 hover:border-cyan-500/50'
                }`}
              >
                {plan.plan === 'Professional' && (
                  <div className="inline-flex items-center px-3 py-1 bg-cyan-500 text-white text-sm font-medium rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.plan}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {plan.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.plan === 'Professional'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
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
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-500/20 to-blue-600/20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with Edge AI?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join the future of computing with our AI Edge Computing Platform. 
              Experience real-time intelligence, reduced latency, and distributed AI processing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-semibold"
              >
                Start Your Free Trial
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 font-semibold"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}