import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Cpu,
  Lock,
  Target,
  Rocket,
  DollarSign,
  ChartLine,
  Activity,
  Eye,
  Clock,
  Star
} from 'lucide-react';

const AIQuantumFinancialTradingPlatform = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Market Analysis",
      description: "Advanced machine learning algorithms analyze market patterns, news sentiment, and global economic indicators in real-time"
    },
    {
      icon: Cpu,
      title: "Quantum Computing Integration",
      description: "Leverage quantum algorithms for complex financial modeling, risk assessment, and portfolio optimization"
    },
    {
      icon: Shield,
      title: "Advanced Risk Management",
      description: "AI-driven risk assessment with real-time monitoring and automated stop-loss mechanisms"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast market movements with 85%+ accuracy using quantum-enhanced predictive models"
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Trade across 150+ global markets with real-time data from major exchanges"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and multi-factor authentication"
    }
  ];

  const benefits = [
    "Increase trading accuracy by 40-60%",
    "Reduce risk exposure by 70%",
    "24/7 automated trading capabilities",
    "Real-time market insights and alerts",
    "Multi-asset portfolio management",
    "Regulatory compliance automation"
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$999",
      period: "/month",
      description: "Perfect for individual traders and small portfolios",
      features: [
        "AI market analysis",
        "Basic risk management",
        "5 trading strategies",
        "Email alerts",
        "Basic reporting",
        "Email support"
      ],
      cta: "Start Trading",
      popular: false
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "/month",
      description: "Advanced features for professional traders and funds",
      features: [
        "Everything in Starter",
        "Quantum computing access",
        "Advanced risk management",
        "20+ trading strategies",
        "Real-time alerts",
        "Advanced analytics",
        "Priority support"
      ],
      cta: "Go Professional",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "/month",
      description: "Full-featured platform for institutional clients",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "White-label solutions",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Hedge Funds",
      description: "Advanced portfolio optimization and risk management for institutional investors",
      icon: Users
    },
    {
      title: "Retail Traders",
      description: "Professional-grade tools accessible to individual traders",
      icon: Target
    },
    {
      title: "Asset Managers",
      description: "Comprehensive portfolio management with AI-driven insights",
      icon: BarChart3
    },
    {
      title: "Quantitative Firms",
      description: "Quantum computing power for complex financial modeling",
      icon: Cpu
    }
  ];

  return (
    <>
      <SEO 
        title="AI Quantum Financial Trading Platform | Zion Tech Group"
        description="Revolutionary AI-powered trading platform with quantum computing integration. Increase trading accuracy by 40-60% and reduce risk by 70%."
        keywords="AI trading platform, quantum computing, financial trading, risk management, portfolio optimization"
        canonical="https://ziontechgroup.com/services/ai-quantum-financial-trading-platform"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>AI-Powered Trading</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Quantum Financial
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Trading Platform
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Revolutionize your trading with the world's first AI-powered platform that combines 
                quantum computing with advanced machine learning for unprecedented accuracy and performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Our AI Quantum Trading Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of trading with cutting-edge technology that gives you a 
                competitive edge in the global financial markets.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your Trading Power
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your trading needs and portfolio size.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                    tier.popular 
                      ? 'border-cyan-500 bg-slate-800/80 scale-105' 
                      : 'border-slate-700 bg-slate-800/50 hover:border-cyan-500/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-400 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    {tier.cta}
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Who Benefits Most?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform is designed for traders and institutions who demand the highest level 
                of performance and accuracy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl p-12 text-center border border-cyan-500/30"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Trading?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of traders who have already upgraded to AI-powered trading. 
                Start your free trial today and experience the future of financial markets.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-cyan-500/30 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>Need help? Contact our team at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
                <p>Or call us at <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIQuantumFinancialTradingPlatform;