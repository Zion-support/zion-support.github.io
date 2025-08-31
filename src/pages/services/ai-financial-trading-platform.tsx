import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Shield, 
  Zap, 
  Brain, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Globe, 
  Eye,
  Clock,
  Star,
  Lock,
  Cpu,
  Workflow,
  Bot,
  Sparkles,
  Activity,
  Database,
  Network,
  Settings,
  Users,
  Target,
  BarChart,
  PieChart,
  LineChart,
  Calendar,
  AlertTriangle,
  CheckSquare,
  FileText,
  MessageSquare,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Cloud,
  Key,
  Fingerprint,
  ShieldCheck,
  Zap as Lightning,
  Target as Bullseye,
  TrendingDown,
  PieChart as ChartPie,
  BarChart2,
  Activity as Pulse
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIFinancialTradingPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Trading Algorithms",
      description: "Advanced machine learning algorithms analyze market patterns, news sentiment, and technical indicators to execute profitable trades automatically.",
      benefits: ["Pattern recognition", "Sentiment analysis", "Technical analysis", "Risk management"]
    },
    {
      icon: TrendingUp,
      title: "Real-Time Market Analysis",
      description: "Live market data processing with millisecond latency, providing instant insights and trading opportunities across multiple markets.",
      benefits: ["Millisecond latency", "Multi-market coverage", "Real-time alerts", "Live streaming data"]
    },
    {
      icon: BarChart3,
      title: "Advanced Portfolio Management",
      description: "Intelligent portfolio optimization with risk-adjusted returns, diversification strategies, and automated rebalancing.",
      benefits: ["Risk-adjusted returns", "Auto-rebalancing", "Diversification", "Performance tracking"]
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level security with multi-factor authentication, encryption, and compliance with financial regulations.",
      benefits: ["Multi-factor auth", "End-to-end encryption", "Regulatory compliance", "Audit trails"]
    },
    {
      icon: Zap,
      title: "Automated Trading Execution",
      description: "High-frequency trading capabilities with smart order routing, market impact analysis, and execution optimization.",
      benefits: ["High-frequency trading", "Smart order routing", "Market impact analysis", "Execution optimization"]
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description: "Trade across multiple exchanges, asset classes, and geographies with unified access and real-time connectivity.",
      benefits: ["Multi-exchange access", "Global markets", "Unified interface", "Real-time connectivity"]
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Perfect for individual traders",
      features: [
        "Up to $100K trading volume",
        "Basic AI algorithms",
        "Real-time market data",
        "Standard analytics",
        "Email support",
        "Mobile app access",
        "Basic risk management",
        "Standard reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Institutional",
      price: "$999",
      period: "/month",
      description: "Ideal for professional traders",
      features: [
        "Up to $1M trading volume",
        "Advanced AI algorithms",
        "High-frequency trading",
        "Priority support",
        "Full market access",
        "Custom dashboards",
        "Advanced risk management",
        "API access",
        "White-label options"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large institutions",
      features: [
        "Unlimited trading volume",
        "Custom AI models",
        "Dedicated infrastructure",
        "24/7 phone support",
        "Custom integrations",
        "Advanced compliance",
        "SLA guarantees",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const tradingFeatures = [
    {
      title: "Multi-Asset Trading",
      description: "Trade stocks, bonds, options, futures, forex, and cryptocurrencies from a single platform.",
      assets: ["Stocks & ETFs", "Options & Futures", "Forex", "Cryptocurrencies", "Bonds", "Commodities"]
    },
    {
      title: "AI-Powered Strategies",
      description: "Access to proven trading strategies powered by artificial intelligence and machine learning.",
      strategies: ["Momentum trading", "Mean reversion", "Arbitrage", "Trend following", "Statistical arbitrage", "Sentiment analysis"]
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk management tools to protect your capital and optimize returns.",
      tools: ["Position sizing", "Stop-loss orders", "Portfolio limits", "Risk metrics", "Stress testing", "Compliance monitoring"]
    }
  ];

  const performanceMetrics = [
    {
      icon: TrendingUp,
      title: "Average Returns",
      description: "Consistent outperformance of market benchmarks",
      value: "15-25% annually"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Advanced risk controls and portfolio protection",
      value: "Max 5% drawdown"
    },
    {
      icon: Zap,
      title: "Execution Speed",
      description: "Ultra-fast trade execution with minimal slippage",
      value: "<1ms latency"
    },
    {
      icon: BarChart3,
      title: "Success Rate",
      description: "High probability trades with proven track record",
      value: "75%+ win rate"
    }
  ];

  const supportedMarkets = [
    {
      name: "US Markets",
      exchanges: ["NYSE", "NASDAQ", "CBOE", "CME", "ICE"],
      description: "Full access to US equity, options, and futures markets"
    },
    {
      name: "European Markets",
      exchanges: ["LSE", "Euronext", "Deutsche Börse", "SIX"],
      description: "Access to major European exchanges and markets"
    },
    {
      name: "Asian Markets",
      exchanges: ["TSE", "HKEX", "SGX", "ASX"],
      description: "Trading access to key Asian markets and exchanges"
    },
    {
      name: "Global Forex",
      exchanges: ["Interbank", "ECN", "Prime Brokers"],
      description: "24/7 forex trading with competitive spreads"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Trading Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your trading with AI-powered algorithms, real-time market analysis, and automated execution. Achieve 15-25% annual returns with advanced risk management." />
        <meta name="keywords" content="AI trading platform, algorithmic trading, automated trading, financial trading, high-frequency trading, portfolio management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Trading
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Financial Trading
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"> Platform</span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your trading with AI-powered algorithms, real-time market analysis, and automated execution. 
                Achieve 15-25% annual returns with advanced risk management and institutional-grade technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-indigo-500/30 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-slate-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                  Free 30-day trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Performance Metrics
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our AI trading platform delivers consistent, market-beating returns with advanced risk management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <metric.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{metric.title}</h3>
                  <p className="text-slate-400 mb-4">{metric.description}</p>
                  <div className="text-2xl font-bold text-indigo-400">{metric.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Features That Drive Results
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our platform combines cutting-edge AI technology with proven trading methodologies 
                to deliver measurable financial outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 mb-4">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trading Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Trading Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Access to multiple asset classes, advanced strategies, and professional-grade tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tradingFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-400 mb-6">{feature.description}</p>
                  
                  <div className="space-y-3">
                    {feature.assets ? feature.assets.map((asset, assetIndex) => (
                      <div key={assetIndex} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                        {asset}
                      </div>
                    )) : feature.strategies ? feature.strategies.map((strategy, strategyIndex) => (
                      <div key={strategyIndex} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                        {strategy}
                      </div>
                    )) : feature.tools ? feature.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                        {tool}
                      </div>
                    )) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Markets Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Global Market Access
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Trade across multiple exchanges and markets worldwide with unified access and real-time connectivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportedMarkets.map((market, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">{market.name}</h3>
                  <p className="text-slate-400 mb-6">{market.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {market.exchanges.map((exchange, exchangeIndex) => (
                      <span key={exchangeIndex} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                        {exchange}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Choose the plan that fits your trading needs. All plans include our core AI features and 30-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ? 'border-indigo-500/50 ring-2 ring-indigo-500/20' : 'border-white/10'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-400 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={plan.name === "Enterprise" ? "/contact" : "/contact"}
                    className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of traders who have already achieved consistent returns with our AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-indigo-500/30 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-slate-400">
              <p>Questions? Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-indigo-400 hover:text-indigo-300">+1 302 464 0950</a></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}