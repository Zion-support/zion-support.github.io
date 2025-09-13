import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  DollarSign, 
  Brain, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  Zap,
  ArrowRight,
  LineChart,
  PieChart,
  Target,
  Search,
  Edit3,
  Download,
  Eye,
  Lock,
  Globe,
  Smartphone,
  Headphones,
  Database,
  CheckCircle,
  AlertTriangle,
  FileText,
  Activity,
  Cpu,
  Network,
  Monitor
} from 'lucide-react';

export default function AIFinancialTrading() {
  const features = [
    {
      icon: Brain,
      title: "AI Trading Algorithms",
      description: "Advanced machine learning algorithms that analyze market patterns and execute trades automatically"
    },
    {
      icon: TrendingUp,
      title: "Real-time Market Analysis",
      description: "Live market data processing with instant insights and trend identification"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Sophisticated risk assessment and portfolio protection mechanisms"
    },
    {
      icon: BarChart3,
      title: "Portfolio Optimization",
      description: "AI-powered portfolio rebalancing and asset allocation optimization"
    },
    {
      icon: Zap,
      title: "High-Frequency Trading",
      description: "Ultra-fast execution with microsecond precision for optimal trade timing"
    },
    {
      icon: Users,
      title: "Social Trading",
      description: "Copy successful traders and share strategies with the community"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for individual traders and beginners",
      features: [
        "Basic AI trading signals",
        "Up to 10 trades/day",
        "Standard market data",
        "Email support",
        "Basic risk management",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for active traders and small funds",
      features: [
        "Advanced AI algorithms",
        "Up to 100 trades/day",
        "Real-time market data",
        "Priority support",
        "Advanced risk management",
        "Portfolio analytics",
        "API access",
        "Custom strategies"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Institutional",
      price: "$1,999",
      period: "/month",
      description: "For hedge funds and large institutions",
      features: [
        "Custom AI models",
        "Unlimited trades",
        "Institutional data feeds",
        "Dedicated account manager",
        "White-label solution",
        "Custom integrations",
        "On-premise deployment",
        "Advanced compliance"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Returns",
      description: "AI algorithms consistently outperform traditional trading strategies by 15-25% annually"
    },
    {
      icon: Clock,
      title: "24/7 Trading",
      description: "Automated trading operates around the clock, capturing opportunities in all time zones"
    },
    {
      icon: Shield,
      title: "Risk Reduction",
      description: "Advanced risk management reduces portfolio volatility and protects capital"
    },
    {
      icon: Brain,
      title: "Emotion-Free Trading",
      description: "AI eliminates human emotions and biases from trading decisions"
    },
    {
      icon: Zap,
      title: "Speed Advantage",
      description: "Microsecond execution speed provides competitive edge in fast-moving markets"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Comprehensive analytics and reporting for informed decision making"
    }
  ];

  const tradingInstruments = [
    {
      icon: LineChart,
      title: "Stocks & ETFs",
      description: "AI-powered analysis of individual stocks, sectors, and market indices"
    },
    {
      icon: PieChart,
      title: "Forex Trading",
      description: "Currency pair analysis with real-time exchange rate monitoring"
    },
    {
      icon: Target,
      title: "Cryptocurrency",
      description: "Digital asset trading with blockchain-based security and transparency"
    },
    {
      icon: Activity,
      title: "Commodities",
      description: "Oil, gold, silver, and agricultural commodity trading strategies"
    },
    {
      icon: Network,
      title: "Options & Futures",
      description: "Derivatives trading with advanced hedging and speculation strategies"
    },
    {
      icon: Monitor,
      title: "Bonds & Fixed Income",
      description: "Fixed income securities with yield optimization and risk management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            AI-Powered Financial Technology
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Trading</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionize your trading with AI-powered algorithms. Execute trades with precision, manage risk intelligently, and maximize returns with cutting-edge financial technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/request-demo"
              className="px-8 py-3 border border-purple-500 text-purple-400 font-medium rounded-lg hover:bg-purple-500/10 transition-all duration-200"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
            <div className="text-gray-400">Higher Returns</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-400">Trading</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">μs</div>
            <div className="text-gray-400">Execution Speed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Advanced Trading Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trading Instruments Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Trading Instruments & Markets
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tradingInstruments.map((instrument, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <instrument.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{instrument.title}</h3>
                <p className="text-gray-400">{instrument.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Transparent Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500 bg-purple-500/5' 
                    : 'border-gray-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-1">
                    {plan.price}
                  </div>
                  <div className="text-gray-400 mb-4">{plan.period}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
                  {plan.popular ? (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white block">
                      {plan.cta}
                    </span>
                  ) : (
                    <span className="border border-gray-600 text-gray-300 block hover:border-purple-500 hover:text-purple-400">
                      {plan.cta}
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI Financial Trading?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of traders who are already leveraging AI to maximize returns and minimize risks in volatile markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial Today
              </Link>
              <Link
                to="/request-demo"
                className="px-8 py-3 border border-purple-500 text-purple-400 font-medium rounded-lg hover:bg-purple-500/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}