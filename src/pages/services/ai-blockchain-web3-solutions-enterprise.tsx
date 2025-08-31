import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Network, 
  Zap, 
  Brain, 
  Shield, 
  Database, 
  Globe, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Coins,
  Image,
  Users,
  Lock
} from 'lucide-react';

const AIBlockchainWeb3SolutionsEnterprise: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-green-400" />,
      title: "AI-Powered Smart Contracts",
      description: "Intelligent smart contracts that automatically adapt, optimize, and execute based on real-time market conditions and AI analysis."
    },
    {
      icon: <Network className="w-6 h-6 text-green-400" />,
      title: "Multi-Chain Integration",
      description: "Seamless integration across Ethereum, Polygon, Solana, and other major blockchain networks with unified management."
    },
    {
      icon: <Zap className="w-6 h-6 text-green-400" />,
      title: "Automated DeFi Strategies",
      description: "AI-driven DeFi yield farming, liquidity management, and arbitrage strategies that maximize returns while minimizing risks."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Enhanced Security",
      description: "Advanced security protocols including multi-signature wallets, hardware security modules, and AI-powered threat detection."
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: "Decentralized Data Management",
      description: "Secure, immutable data storage with AI-powered analytics and automated data validation across distributed networks."
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" />,
      title: "Web3 Infrastructure",
      description: "Complete Web3 development platform with APIs, SDKs, and tools for building next-generation decentralized applications."
    }
  ];

  const solutions = [
    {
      icon: <Coins className="w-8 h-8 text-green-400" />,
      title: "DeFi & Yield Farming",
      description: "Automated DeFi strategies, yield optimization, and cross-chain liquidity management with AI-powered risk assessment."
    },
    {
      icon: <Image className="w-8 h-8 text-green-400" />,
      title: "NFT Marketplace & Gaming",
      description: "AI-enhanced NFT creation, trading platforms, and blockchain gaming solutions with automated market making."
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "DAO & Governance",
      description: "Decentralized autonomous organizations with AI-powered voting systems, proposal analysis, and automated execution."
    },
    {
      icon: <Lock className="w-8 h-8 text-green-400" />,
      title: "Supply Chain & Identity",
      description: "Blockchain-based supply chain tracking, digital identity management, and verifiable credentials with AI verification."
    }
  ];

  const benefits = [
    {
      metric: "60%",
      description: "Reduction in transaction costs"
    },
    {
      metric: "10x",
      description: "Faster transaction processing"
    },
    {
      metric: "100%",
      description: "Transparency and auditability"
    },
    {
      metric: "24/7",
      description: "Automated operations"
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$3,999",
      period: "/month",
      features: [
        "Up to 1000 transactions/day",
        "Basic smart contracts",
        "Single blockchain support",
        "Standard support",
        "Monthly reports"
      ]
    },
    {
      plan: "Professional",
      price: "$6,999",
      period: "/month",
      features: [
        "Up to 10,000 transactions/day",
        "Advanced smart contracts",
        "Multi-chain support",
        "Priority support",
        "Real-time monitoring",
        "Custom integrations"
      ],
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$14,999",
      period: "/month",
      features: [
        "Unlimited transactions",
        "Custom smart contracts",
        "Full blockchain support",
        "24/7 dedicated support",
        "White-label solution",
        "On-premise deployment",
        "Custom training"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Blockchain Web3 Solutions Enterprise | Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade AI-powered blockchain and Web3 solutions with smart contracts, DeFi strategies, and multi-chain integration capabilities." />
        <meta name="keywords" content="AI blockchain, Web3 solutions, smart contracts, DeFi, NFT, DAO, enterprise blockchain" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-blockchain-web3-solutions-enterprise" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Blockchain Web3 Solutions
                <span className="text-green-400 block">Enterprise Platform</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with the most advanced AI-powered blockchain and Web3 platform. 
                Get intelligent smart contracts, automated DeFi strategies, and seamless multi-chain integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Schedule Demo
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise-Grade Blockchain Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built for enterprise scale with cutting-edge AI technology and comprehensive blockchain capabilities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-colors"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Web3 Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Complete blockchain and Web3 solutions for every industry and use case
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{solution.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Blockchain Transformation Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See real results with our AI-powered blockchain and Web3 platform
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                    {benefit.metric}
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Enterprise Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the blockchain solution that fits your organization's needs and scale
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-green-500 ring-2 ring-green-500/20' 
                      : 'border-gray-700'
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'border border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-green-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform with Blockchain?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Join leading enterprises that trust our AI-powered blockchain and Web3 platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Get in Touch
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIBlockchainWeb3SolutionsEnterprise;