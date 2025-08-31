import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Blockchain,
  Lock,
  Database,
  Network,
  Cpu,
  Globe,
  Users,
  BarChart3,
  FileText,
  Clock,
  Star,
  Award,
  Target,
  Rocket
} from 'lucide-react';

const AIBlockchainIntegrationPlatform = () => {
  const features = [
    {
      title: "AI-Powered Smart Contract Generation",
      description: "Automatically generate, audit, and optimize smart contracts using advanced AI algorithms",
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      benefits: ["Reduced development time by 70%", "99.9% security audit compliance", "Automatic vulnerability detection"]
    },
    {
      title: "Intelligent DeFi Analytics",
      description: "Real-time market analysis, yield optimization, and risk assessment using machine learning",
      icon: <BarChart3 className="w-6 h-6 text-green-500" />,
      benefits: ["Predictive market insights", "Automated yield farming strategies", "Risk mitigation algorithms"]
    },
    {
      title: "Cross-Chain Interoperability",
      description: "Seamless asset and data transfer across multiple blockchain networks",
      icon: <Network className="w-6 h-6 text-purple-500" />,
      benefits: ["Multi-chain asset management", "Reduced transaction costs", "Enhanced liquidity access"]
    },
    {
      title: "AI-Enhanced Security",
      description: "Advanced threat detection and prevention using machine learning algorithms",
      icon: <Shield className="w-6 h-6 text-red-500" />,
      benefits: ["Real-time threat monitoring", "Automated incident response", "Zero-day attack prevention"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299/month",
      description: "Perfect for small projects and startups",
      features: [
        "AI Smart Contract Generator",
        "Basic DeFi Analytics",
        "2 Blockchain Networks",
        "Email Support",
        "100 API Calls/month"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799/month",
      description: "Ideal for growing businesses and developers",
      features: [
        "Everything in Starter",
        "Advanced DeFi Analytics",
        "5 Blockchain Networks",
        "Priority Support",
        "1000 API Calls/month",
        "Custom Integrations"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      description: "For large organizations with specific requirements",
      features: [
        "Everything in Professional",
        "Unlimited API Calls",
        "All Blockchain Networks",
        "Dedicated Support Team",
        "Custom AI Models",
        "On-premise Deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "DeFi Platforms",
      description: "Build intelligent DeFi applications with AI-powered yield optimization and risk management",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />
    },
    {
      title: "Supply Chain Management",
      description: "Create transparent and efficient supply chains with blockchain and AI-driven analytics",
      icon: <Network className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Digital Identity",
      description: "Secure identity management with zero-knowledge proofs and AI verification",
      icon: <Shield className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Asset Tokenization",
      description: "Tokenize real-world assets with AI-powered valuation and compliance",
      icon: <Database className="w-8 h-8 text-orange-500" />
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
              <Blockchain className="w-16 h-16 text-blue-500 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                AI Blockchain Integration Platform
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionize your blockchain applications with cutting-edge AI integration. 
              Automate smart contracts, optimize DeFi strategies, and enhance security with machine learning.
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
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence to transform your blockchain applications
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
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to suit your needs and scale with your business
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
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI and blockchain integration can transform various industries
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
              Ready to Transform Your Blockchain Applications?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers and businesses already using AI to revolutionize their blockchain solutions
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

export default AIBlockchainIntegrationPlatform;