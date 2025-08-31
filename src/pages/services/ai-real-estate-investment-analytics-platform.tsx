import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Home, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Clock,
  DollarSign,
  Star,
  Award,
  Globe,
  Lock,
  BarChart3,
  Workflow,
  Database,
  Cpu,
  Network,
  Eye,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  BarChart3,
  Target,
  Lightbulb,
  Calculator,
  Map,
  Search,
  PieChart,
  LineChart,
  BarChart,
  Activity,
  Shield,
  TrendingDown,
  Percent
} from 'lucide-react';

export default function AIRealEstateInvestmentAnalyticsPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Market Analysis",
      description: "Advanced AI algorithms analyze real estate markets, trends, and investment opportunities with 95% accuracy"
    },
    {
      icon: BarChart3,
      title: "Predictive Investment Modeling",
      description: "Machine learning models predict property values, rental yields, and market appreciation over time"
    },
    {
      icon: Map,
      title: "Geographic Intelligence",
      description: "AI-driven location analysis for optimal investment opportunities and market timing"
    },
    {
      icon: Calculator,
      title: "ROI Optimization",
      description: "Intelligent algorithms optimize investment strategies for maximum returns and risk management"
    },
    {
      icon: Database,
      title: "Comprehensive Data Integration",
      description: "Real-time integration with MLS, public records, market data, and economic indicators"
    },
    {
      icon: Workflow,
      title: "Automated Investment Workflows",
      description: "Streamlined processes for property analysis, due diligence, and investment decision-making"
    }
  ];

  const pricingPlans = [
    {
      name: "Investor",
      price: "$399",
      period: "/month",
      description: "Perfect for individual real estate investors and small portfolios",
      features: [
        "Up to 100 property analyses/month",
        "Basic AI market insights",
        "Standard investment models",
        "Email support",
        "Basic reporting dashboard",
        "Mobile app access"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$899",
      period: "/month",
      description: "Ideal for real estate professionals and growing investment portfolios",
      features: [
        "Up to 1,000 property analyses/month",
        "Advanced AI market analysis",
        "Custom investment models",
        "Priority support",
        "Advanced analytics and reporting",
        "Portfolio management tools",
        "API access",
        "White-label options"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large investment firms and institutional investors",
      features: [
        "Unlimited property analyses",
        "Full AI-powered analytics suite",
        "Custom AI model training",
        "24/7 dedicated support",
        "Advanced security and compliance",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "85% Time Savings",
      description: "Reduce investment research time from weeks to hours with AI automation"
    },
    {
      icon: DollarSign,
      title: "40% Higher Returns",
      description: "AI-optimized investment strategies consistently outperform traditional methods"
    },
    {
      icon: TrendingUp,
      title: "95% Accuracy Rate",
      description: "AI models trained on millions of real estate transactions ensure high accuracy"
    },
    {
      icon: Users,
      title: "Risk Mitigation",
      description: "Advanced risk assessment and portfolio diversification recommendations"
    }
  ];

  const useCases = [
    {
      title: "Residential Investment",
      description: "Analyze single-family homes, multi-family properties, and residential portfolios for optimal returns",
      icon: Home
    },
    {
      title: "Commercial Real Estate",
      description: "Evaluate office buildings, retail spaces, industrial properties, and mixed-use developments",
      icon: Building
    },
    {
      title: "Portfolio Optimization",
      description: "Optimize real estate portfolios for maximum returns and risk-adjusted performance",
      icon: PieChart
    },
    {
      title: "Market Timing",
      description: "Identify optimal entry and exit points using AI-powered market cycle analysis",
      icon: TrendingUp
    }
  ];

  const analyticsFeatures = [
    {
      title: "Market Trend Analysis",
      description: "AI-powered analysis of market cycles, seasonal patterns, and long-term trends",
      icon: LineChart
    },
    {
      title: "Property Valuation Models",
      description: "Advanced valuation algorithms considering location, amenities, and market conditions",
      icon: Calculator
    },
    {
      title: "Rental Yield Optimization",
      description: "Maximize rental income through AI-driven pricing and tenant optimization",
      icon: Percent
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis including market volatility and property-specific factors",
      icon: Shield
    },
    {
      title: "Portfolio Diversification",
      description: "AI recommendations for optimal geographic and property type diversification",
      icon: PieChart
    },
    {
      title: "Investment Timing",
      description: "Predictive models for optimal buy/sell timing based on market conditions",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <SEO 
        title="AI-Powered Real Estate Investment Analytics Platform | Zion Tech Group"
        description="Revolutionary AI platform that transforms real estate investment with predictive analytics, market intelligence, and ROI optimization. Increase returns by 40% and reduce research time by 85%."
        keywords="AI real estate, real estate investment, property analytics, investment optimization, real estate AI, market analysis"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Real Estate Technology
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Real Estate Investment Analytics Platform
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Transform real estate investment with AI-powered analytics. Predict market trends, 
              optimize portfolios, and maximize returns with unprecedented accuracy and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-orange-400 text-orange-300 font-semibold rounded-lg hover:bg-orange-500/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Real Estate Technology
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge machine learning with comprehensive real estate data 
              to deliver unprecedented investment insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-orange-900/20 border border-orange-500/20 rounded-xl p-6 hover:border-orange-400/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-orange-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Features Section */}
      <section className="py-20 bg-orange-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Investment Analytics
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Comprehensive analytics tools to maximize your real estate investment returns.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsFeatures.map((analyticsFeature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-orange-900/20 border border-orange-500/20 rounded-xl p-6 hover:border-orange-400/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <analyticsFeature.icon className="w-6 h-6 text-orange-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{analyticsFeature.title}</h3>
                <p className="text-orange-100">{analyticsFeature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Real Estate Investments
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Experience unprecedented returns and efficiency in real estate investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-orange-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-orange-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-orange-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Investment Solutions
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              From residential to commercial, our platform serves every real estate investment need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-orange-900/20 border border-orange-500/20 rounded-xl p-8 hover:border-orange-400/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-orange-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-orange-100 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Choose the plan that best fits your investment portfolio needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-orange-900/20 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-orange-400 shadow-lg shadow-orange-400/25' 
                    : 'border-orange-500/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-orange-100 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-orange-100">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                      <span className="text-orange-100">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                    : 'bg-orange-500/20 text-orange-300 border border-orange-400 hover:bg-orange-500/30'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Maximize Your Real Estate Returns?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join thousands of investors who have already revolutionized their real estate investment 
              strategies with our AI platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-orange-400 text-orange-300 font-semibold rounded-lg hover:bg-orange-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-orange-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-orange-100 hover:text-orange-300 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-orange-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-orange-100 hover:text-orange-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-orange-300 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-orange-100">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            <p className="text-orange-100">
              Ready to revolutionize your real estate investment strategy? Contact us today to learn more about our 
              AI-Powered Real Estate Investment Analytics Platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}