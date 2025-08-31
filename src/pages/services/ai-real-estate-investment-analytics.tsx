import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Building2, 
  TrendingUp, 
  MapPin, 
  DollarSign, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  Brain,
  Clock,
  Users,
  Shield,
  Globe,
  Home,
  Calculator,
  Target,
  Award,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  PieChart,
  LineChart,
  Search,
  Filter,
  AlertTriangle,
  Star,
  Eye
} from 'lucide-react';

export default function AIRealEstateInvestmentAnalytics() {
  const features = [
    {
      icon: Brain,
      title: "AI Market Predictions",
      description: "Predict property values and market trends with 92% accuracy using advanced ML algorithms"
    },
    {
      icon: BarChart3,
      title: "Investment ROI Calculator",
      description: "Calculate potential returns, cash flow, and investment metrics in real-time"
    },
    {
      icon: MapPin,
      title: "Geographic Intelligence",
      description: "Analyze neighborhood trends, demographics, and development patterns"
    },
    {
      icon: TrendingUp,
      title: "Market Trend Analysis",
      description: "Track historical data and forecast future market movements"
    },
    {
      icon: Search,
      title: "Property Search Engine",
      description: "Find investment opportunities matching your criteria across multiple markets"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Evaluate investment risks including market volatility and property-specific factors"
    }
  ];

  const pricingPlans = [
    {
      name: "Investor",
      price: "$199",
      period: "/month",
      description: "Perfect for individual real estate investors",
      features: [
        "Up to 100 property analyses/month",
        "Basic market predictions",
        "ROI calculations",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for real estate professionals and small firms",
      features: [
        "Up to 1,000 property analyses/month",
        "Advanced AI predictions",
        "Comprehensive analytics",
        "Priority support",
        "API access",
        "Custom dashboards",
        "Market reports",
        "Portfolio tracking"
      ],
      popular: true,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large investment firms and real estate companies",
      features: [
        "Unlimited property analyses",
        "Custom AI models",
        "White-label solutions",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security",
        "Team collaboration tools",
        "Compliance reporting"
      ],
      popular: false,
      color: "from-blue-500 to-blue-600"
    }
  ];

  const benefits = [
    "Increase investment returns by 25-40%",
    "Reduce research time by 80%",
    "Identify undervalued properties faster",
    "Minimize investment risks with AI insights",
    "Access to exclusive market data",
    "Portfolio optimization recommendations"
  ];

  const useCases = [
    {
      title: "Residential Investment",
      description: "Analyze single-family homes, condos, and multi-family properties for investment potential",
      icon: Home
    },
    {
      title: "Commercial Real Estate",
      description: "Evaluate office buildings, retail spaces, and industrial properties",
      icon: Building2
    },
    {
      title: "Market Research",
      description: "Conduct comprehensive market analysis for new investment opportunities",
      icon: Search
    },
    {
      title: "Portfolio Management",
      description: "Optimize existing real estate portfolios for maximum returns",
      icon: PieChart
    }
  ];

  const stats = [
    { number: "92%", label: "Prediction Accuracy", icon: Target },
    { number: "80%", label: "Time Savings", icon: Clock },
    { number: "40%", label: "ROI Improvement", icon: TrendingUp },
    { number: "25+", label: "Markets Covered", icon: Globe }
  ];

  const marketData = [
    {
      market: "New York",
      growth: "+8.5%",
      capRate: "4.2%",
      trend: "up"
    },
    {
      market: "Los Angeles",
      growth: "+6.8%",
      capRate: "3.8%",
      trend: "up"
    },
    {
      market: "Miami",
      growth: "+12.3%",
      capRate: "5.1%",
      trend: "up"
    },
    {
      market: "Austin",
      growth: "+15.2%",
      capRate: "4.8%",
      trend: "up"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Real Estate Investment Analytics Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your real estate investments with AI-powered analytics. Predict market trends, calculate ROI, and identify opportunities with 92% accuracy." />
        <meta name="keywords" content="AI real estate analytics, investment platform, property analysis, market predictions, ROI calculator, real estate tech" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-real-estate-investment-analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4 mr-2 text-green-400" />
                AI-Powered Real Estate Analytics
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Real Estate <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Investment Analytics</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Make smarter real estate investment decisions with AI-powered market analysis, 
                ROI predictions, and comprehensive property insights. Achieve 92% prediction accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zinc-600 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <stat.icon className="w-12 h-12 text-green-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Live Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Insights</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real-time data from top markets across the United States with AI-powered trend analysis.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketData.map((market, index) => (
                <motion.div
                  key={market.market}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-4">{market.market}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Growth:</span>
                        <span className="text-green-400 font-semibold">{market.growth}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Cap Rate:</span>
                        <span className="text-blue-400 font-semibold">{market.capRate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Trend:</span>
                        <TrendingUp className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Features for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Smart Investors</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with real estate expertise to deliver unmatched investment insights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-500/20 rounded-lg">
                      <feature.icon className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Investment <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Opportunities</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI platform transforms various types of real estate investments and market analysis.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-500/20 rounded-lg mr-4">
                      <useCase.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-gray-400">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Pricing Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your investment strategy and analysis needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-zinc-800/50 border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-green-500/50 bg-gradient-to-br from-zinc-800/80 to-green-900/20' 
                      : 'border-zinc-700/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                        : 'bg-zinc-700 text-white hover:bg-zinc-600'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Investment Strategy</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented insights and returns in real estate investment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center bg-zinc-800/50 border border-zinc-700/50 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Maximize</span> Your Returns?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of investors who have already revolutionized their real estate strategy with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-green-500 text-white font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300"
                >
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <Phone className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-400">+1 302 464 0950</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-400">kleber@ziontechgroup.com</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <MapPinIcon className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}