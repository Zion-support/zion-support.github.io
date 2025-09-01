import { Brain, 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Calendar,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Globe,
  Smartphone,
  Monitor,
  BookOpen,
  MessageSquare,
  Share2,
  Analytics,
  Palette,
  Clock,
  DollarSign,
  Shield,
  Headphones,
  Rocket,
  LineChart,
  PieChart,
  Activity,
  Cpu,
  Database,
  Network,
  Lock,
  Eye,
  AlertTriangle
 } from 'lucide-react';

export default function AIFinancialTradingPlatform(...args[]):  {
  
    "Real-time market data and news feeds",;
    "Portfolio performance tracking and analytics",;
    "Compliance and regulatory monitoring",;
    "Custom trading algorithm development",;
    "High-frequency trading capabilities",;
    "Secure and encrypted trading infrastructure";
  ];

  
    "Increase trading returns by 25-40%",;
    "Reduce trading risks by 30-50%",;
    "24/7 automated trading operations",;
    "Eliminate emotional trading decisions",;
    "Access to institutional-grade tools";
  ];

  
    "Hedge funds and asset managers",;
    "Institutional investors",;
    "Cryptocurrency traders",;
    "Forex trading professionals",;
    "Options and derivatives traders",;
    "Quantitative trading firms";
  ];

  
        "AI market analysis (5 strategies)",
        "Basic algorithmic trading",
        "Real-time market data",
        "Portfolio tracking",
        "Basic risk management",
        "Email support"
      ],;
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for active traders and professionals",
      features[;
        "AI market analysis (unlimited strategies)",
        "Advanced algorithmic trading",
        "Multi-asset class trading",
        "Advanced risk management",
        "Backtesting and optimization",
        "Priority support",
        "API access"
      ],;
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For institutional investors and hedge funds",
      features[;
        "Custom AI model development",
        "High-frequency trading",
        "White-label solutions",
        "Dedicated infrastructure",
        "Custom integrations",;
        "Dedicated account manager",;
        "24/7 phone support";
      ],;
      cta: "Contact Sales",;
      popular: false};
  ];

  return (
    <div className = "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO title="AI Financial Trading Platform - Zion Tech Group"
        description="Revolutionize your trading with AI-powered market analysis, algorithmic trading, and risk management. Increase returns and reduce risks."
       />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            animate = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2"  />
              AI-Powered Trading
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Financial
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {" "}Trading Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your trading with AI that analyzes markets, executes trades, and manages risk automatically.
              Increase returns, reduce risks, and trade with institutional-grade technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200"

                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"

                Watch Demo
              </motion.button>
            </div>
          </motion.div>;
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Trading Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to trade like a professional with AI-powered insights and automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300"

                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white"  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">;
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Trading Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See measurable improvements in your trading performance and profitability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                className="text-center"

                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-white"  />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Trader
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From beginners to institutional investors, our platform adapts to your trading needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-green-500 transition-all duration-300"

                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white"  />
                </div>
                <h3 className="text-lg font-semibold text-white">{useCase}</h3>
              </motion.div>;
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">;
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font-bold text-white mb-4">
              Competitive Pricing for Every Trader
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your trading style and scale as you grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">
            {pricing.map((plan, index)  => (
              <motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20 






}}
                whileInView = {
  { opacity: 1,
  y: 0 






}}
                transition = {
  { duration: 0.5,
  delay: index * 0.1 






}}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular
                    ? 'border-green-500 ring-2 ring-green-500/20'
                    : 'border-gray-700'
                }`}

                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0"  />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}

                  {plan.cta}
                </motion.button>;
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">;
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 20 






}}
            whileInView = {
  { opacity: 1,
  y: 0 






}}
            transition={{ duration: 0.8 }}

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of traders who have already revolutionized their trading with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200"

                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"

                Schedule Demo
              </motion.button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No credit card required • 14-day free trial • Cancel time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/50">;
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Need help choosing the right plan? Contact our sales team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
            <span>📞 +1 302 464 0950</span>
            <span>📧 kleber@ziontechgroup.com</span>
            <span>🌐 https://ziontechgroup.com</span>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}
