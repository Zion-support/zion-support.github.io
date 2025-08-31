import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Users, 
  Clock, 
  DollarSign,
  CheckCircle,
  Star,
  ArrowRight,
  MapPin,
  BarChart3,
  Cpu,
  Database,
  Cloud,
  Lock,
  Activity,
  Phone,
  Mail,
  PieChart,
  Target,
  Zap,
  Globe,
  Building2,
  CreditCard,
  PiggyBank,
  ChartLine,
  Coins,
  Wallet,
  Calculator,
  AlertTriangle,
  CheckSquare,
  FileText,
  BookOpen,
  GraduationCap,
  Handshake,
  Rocket,
  Lightbulb,
  Network,
  Server,
  Monitor,
  Smartphone,
  Wifi,
  Satellite,
  Atom,
  Flask,
  Microscope,
  Beaker,
  TestTube,
  Dna,
  Pill,
  Stethoscope,
  Heart,
  Car,
  Plane,
  Ship,
  Train,
  Truck,
  Factory,
  Warehouse,
  Store,
  Bank,
  Building,
  Leaf,
  Gamepad2,
  MessageCircle,
  Settings,
  Cog,
  Palette,
  Menu,
  X,
  Video,
  Calendar,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheckCircle
} from 'lucide-react';

const AIAutonomousFinancialAdvisorPlatform = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Investment Analysis",
      description: "Advanced machine learning algorithms analyze market trends, risk factors, and investment opportunities in real-time."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Predictive Market Intelligence",
      description: "ML models forecast market movements, identify emerging trends, and provide data-driven investment recommendations."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management & Compliance",
      description: "Automated risk assessment, portfolio stress testing, and regulatory compliance monitoring for all investment strategies."
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Real-time Portfolio Monitoring",
      description: "24/7 portfolio tracking with automated rebalancing, performance analytics, and instant alerts for market changes."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personalized Financial Planning",
      description: "AI-driven financial goal setting, retirement planning, and tax optimization strategies tailored to individual needs."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive reporting on investment performance, risk metrics, and wealth growth projections."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for individual investors",
      features: [
        "Up to $100K portfolio management",
        "Basic AI investment recommendations",
        "Portfolio monitoring",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing portfolios",
      features: [
        "Up to $1M portfolio management",
        "Advanced AI algorithms",
        "Risk management tools",
        "Tax optimization",
        "Priority support",
        "Custom strategies"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For high-net-worth individuals",
      features: [
        "Unlimited portfolio size",
        "Full AI suite",
        "Custom AI models",
        "Dedicated advisor",
        "White-label options",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Higher Returns",
      description: "AI-driven strategies typically outperform traditional methods by 15-25% annually."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: "Risk Reduction",
      description: "Advanced risk management reduces portfolio volatility by 30-40%."
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "24/7 Monitoring",
      description: "Continuous market analysis and automated portfolio adjustments."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Personalized Service",
      description: "AI adapts to your financial goals, risk tolerance, and investment preferences."
    }
  ];

  const investmentStrategies = [
    {
      title: "Growth Investing",
      description: "AI identifies high-potential growth stocks with advanced pattern recognition and market analysis.",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />
    },
    {
      title: "Value Investing",
      description: "Machine learning algorithms find undervalued assets using fundamental analysis and market sentiment.",
      icon: <Target className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Dividend Investing",
      description: "AI optimizes dividend portfolios for consistent income and long-term wealth building.",
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />
    },
    {
      title: "ESG Investing",
      description: "Sustainable investment strategies aligned with environmental, social, and governance criteria.",
      icon: <Leaf className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Finance
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous
              <span className="text-zion-cyan"> Financial Advisor</span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Revolutionize your wealth management with autonomous AI that analyzes markets, manages risk, 
              and optimizes your investment portfolio 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors">
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Financial Intelligence
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our platform combines cutting-edge artificial intelligence with proven financial strategies to maximize your wealth potential.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-zion-cyan/50 transition-colors"
              >
                <div className="text-zion-cyan mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI-Powered Investment Strategies
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our AI platform offers diverse investment strategies tailored to your financial goals and risk tolerance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {investmentStrategies.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-zion-cyan/50 transition-colors"
              >
                <div className="flex items-center mb-4">{strategy.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{strategy.title}</h3>
                <p className="text-zion-slate-light">{strategy.description}</p>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Financial Advisory?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Experience unprecedented financial growth and security with our AI-powered investment platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose the plan that fits your investment needs. All plans include our core AI features and 24/7 monitoring.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-zion-slate-light mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-zion-cyan text-white hover:bg-zion-cyan/90'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Wealth?
            </h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of investors already using our AI platform to grow their wealth and secure their financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-zion-cyan text-white rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zion-slate-light mb-4">
            Questions about our AI Autonomous Financial Advisor Platform?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-zion-cyan">
              <Phone className="w-4 h-4 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center text-zion-cyan">
              <Mail className="w-4 h-4 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center text-zion-cyan">
              <MapPin className="w-4 h-4 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousFinancialAdvisorPlatform;