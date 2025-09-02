import React from 'react';
import { motion } from 'framer-motion';
import { 
  Atom, 
  TrendingUp, 
  Zap, 
  Shield, 
  Brain, 
  Cpu,
  Globe,
  BarChart3,
  LineChart,
  Activity,
  Target,
  Clock,
  DollarSign,
  Star,
  Award,
  CheckCircle,
  Users,
  Database,
  Lock,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  AlertCircle,
  Mail
} from 'lucide-react';

const QuantumAITradingPlatform: React.FC = () => {
  const features = [
    {
      icon: Atom,
      title: "Quantum Computing Power",
      description: "Leverage quantum algorithms for ultra-fast market analysis and pattern recognition"
    },
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "State-of-the-art machine learning models trained on global financial data"
    },
    {
      icon: Zap,
      title: "Real-time Execution",
      description: "Execute trades in microseconds with our high-frequency trading infrastructure"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with multi-factor authentication and encrypted communications"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Forecast market movements with 90%+ accuracy using quantum-enhanced algorithms"
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Trade across 150+ markets and exchanges worldwide with real-time data feeds"
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$1,499",
      period: "/month",
      description: "For professional traders and small investment firms",
      features: [
        "Up to 10 trading accounts",
        "Quantum AI algorithms",
        "Real-time market data",
        "Advanced charting tools",
        "Email & phone support",
        "API access",
        "Risk management tools",
        "Performance analytics"
      ],
      popular: false
    },
    {
      name: "Institutional",
      price: "$4,999",
      period: "/month",
      description: "For institutional investors and hedge funds",
      features: [
        "Up to 100 trading accounts",
        "Full quantum computing access",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 priority support",
        "White-label solutions",
        "Advanced compliance tools",
        "Portfolio optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large financial institutions and banks",
      features: [
        "Unlimited trading accounts",
        "Private quantum infrastructure",
        "Custom algorithm development",
        "On-premise deployment",
        "Dedicated support team",
        "Regulatory compliance",
        "Multi-currency support",
        "Advanced reporting"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "ROI Improvement",
      value: "500%+",
      description: "Average return on investment within 18 months"
    },
    {
      icon: Clock,
      title: "Execution Speed",
      value: "0.001ms",
      description: "Ultra-fast trade execution latency"
    },
    {
      icon: TrendingUp,
      title: "Success Rate",
      value: "87%+",
      description: "Profitable trade success rate"
    },
    {
      icon: Users,
      title: "Active Users",
      value: "50,000+",
      description: "Traders worldwide using our platform"
    }
  ];

  const markets = [
    "Stocks & ETFs",
    "Forex & Currencies",
    "Cryptocurrencies",
    "Commodities",
    "Options & Futures",
    "Bonds & Fixed Income",
    "Real Estate",
    "Alternative Investments"
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
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full">
                <Atom className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quantum AI Trading Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your trading with the world's first quantum-powered AI platform. 
              Experience unprecedented speed, accuracy, and profitability in global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Trading Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our quantum AI platform combines cutting-edge quantum computing with advanced 
              artificial intelligence to deliver unmatched trading performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Global Market Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access the world's largest financial markets with our comprehensive trading platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {markets.map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-700 p-6 rounded-xl text-center hover:bg-slate-600 transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg w-fit mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{market}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Performance
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of successful traders who have transformed their financial future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{benefit.value}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Trading Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing designed for traders at every level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-slate-700 p-8 rounded-xl relative ${
                  plan.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                    : 'bg-slate-600 text-white hover:bg-slate-500'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your funds and data are protected by the highest security standards in the industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-700 p-6 rounded-xl text-center"
            >
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full w-fit mx-auto mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Bank-Level Encryption</h3>
              <p className="text-gray-300">256-bit AES encryption for all data transmission and storage</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-slate-700 p-6 rounded-xl text-center"
            >
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Multi-Factor Authentication</h3>
              <p className="text-gray-300">Advanced 2FA and biometric authentication options</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-slate-700 p-6 rounded-xl text-center"
            >
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full w-fit mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Monitoring</h3>
              <p className="text-gray-300">Continuous security monitoring and threat detection</p>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the elite traders who are already experiencing the future of trading 
              with quantum AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full w-fit mx-auto mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full w-fit mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">
                  <a href="tel:+13024640950" className="hover:text-purple-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full w-fit mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300">
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-purple-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QuantumAITradingPlatform;