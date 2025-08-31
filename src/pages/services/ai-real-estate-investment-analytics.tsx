import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Home, 
  TrendingUp, 
  BarChart3, 
  MapPin, 
  DollarSign, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Users,
  Shield,
  Globe,
  Search,
  Calculator,
  PieChart,
  Target,
  Building,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Zap,
  Eye,
  AlertTriangle,
  BookOpen,
  Briefcase,
  Calendar,
  LineChart,
  PieChart as PieChartIcon,
  Target as TargetIcon,
  Building as BuildingIcon
} from 'lucide-react';

export default function AIRealEstateInvestmentAnalytics() {
  const features = [
    {
      title: "AI-Powered Market Analysis",
      description: "Advanced machine learning algorithms analyze market trends, property values, and investment opportunities",
      icon: TrendingUp,
      benefits: ["Real-time market insights", "Predictive analytics", "Risk assessment", "ROI projections"]
    },
    {
      title: "Property Valuation Engine",
      description: "Accurate property valuations using AI and comprehensive data analysis",
      icon: Calculator,
      benefits: ["Instant valuations", "Market comparisons", "Historical trends", "Future projections"]
    },
    {
      title: "Investment Portfolio Optimization",
      description: "AI-driven portfolio management with diversification strategies and risk management",
      icon: PieChart,
      benefits: ["Portfolio optimization", "Risk diversification", "Performance tracking", "Rebalancing alerts"]
    },
    {
      title: "Market Trend Forecasting",
      description: "Predict future market movements and identify emerging investment opportunities",
      icon: LineChart,
      benefits: ["Trend prediction", "Opportunity identification", "Market timing", "Risk mitigation"]
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
        "Basic market insights",
        "Property valuations",
        "Email support",
        "Mobile app access",
        "Basic reporting"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for real estate professionals and small firms",
      features: [
        "Up to 500 property analyses/month",
        "Advanced AI analytics",
        "Portfolio optimization",
        "Priority support",
        "API access",
        "Custom reports",
        "Team collaboration",
        "Market alerts"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large investment firms and real estate companies",
      features: [
        "Unlimited analyses",
        "Custom AI models",
        "White-label solution",
        "24/7 dedicated support",
        "Advanced analytics",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantees",
        "Data export",
        "Multi-user management"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const useCases = [
    {
      title: "Property Investment Analysis",
      description: "Comprehensive analysis of potential investment properties",
      icon: Home,
      benefits: ["ROI calculation", "Cash flow analysis", "Market comparison", "Risk assessment"]
    },
    {
      title: "Portfolio Management",
      description: "Optimize your real estate investment portfolio",
      icon: PieChartIcon,
      benefits: ["Diversification", "Performance tracking", "Rebalancing", "Risk management"]
    },
    {
      title: "Market Research",
      description: "Deep dive into local and national real estate markets",
      icon: Search,
      benefits: ["Trend analysis", "Opportunity identification", "Market timing", "Competitive analysis"]
    },
    {
      title: "Development Planning",
      description: "Plan and analyze real estate development projects",
      icon: BuildingIcon,
      benefits: ["Feasibility studies", "Cost analysis", "Market demand", "ROI projections"]
    }
  ];

  const marketData = [
    {
      metric: "Market Coverage",
      value: "50+",
      unit: "Markets",
      description: "Major metropolitan areas across the US"
    },
    {
      metric: "Data Points",
      value: "10M+",
      unit: "Properties",
      description: "Comprehensive property database"
    },
    {
      metric: "Accuracy Rate",
      value: "95%",
      unit: "Predictions",
      description: "AI-powered forecasting accuracy"
    },
    {
      metric: "Update Frequency",
      value: "Real-time",
      unit: "Data",
      description: "Live market data updates"
    }
  ];

  const industries = [
    { name: "Residential", icon: "🏠", description: "Single-family homes, condos, and apartments" },
    { name: "Commercial", icon: "🏢", description: "Office buildings, retail spaces, and warehouses" },
    { name: "Industrial", icon: "🏭", description: "Manufacturing facilities and logistics centers" },
    { name: "Land", icon: "🌱", description: "Development land and agricultural properties" },
    { name: "Multi-family", icon: "🏘️", description: "Apartment complexes and townhomes" },
    { name: "Hospitality", icon: "🏨", description: "Hotels, resorts, and vacation rentals" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Real Estate Investment Analytics Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your real estate investments with AI-powered analytics. Get market insights, property valuations, and portfolio optimization with our advanced platform." />
        <meta name="keywords" content="AI real estate analytics, property investment analysis, real estate market data, portfolio optimization, property valuation AI" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-real-estate-investment-analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative z-10 container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2 text-yellow-400" />
                AI-Powered Real Estate Analytics
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Real Estate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Investment Analytics</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Make smarter real estate investment decisions with AI-powered analytics. Get instant property valuations, 
                market insights, and portfolio optimization recommendations. Cover 50+ markets with 10M+ properties analyzed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
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

        {/* Market Data Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {marketData.map((data, index) => (
                <motion.div
                  key={data.metric}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <BarChart3 className="w-12 h-12 text-blue-400" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{data.value}</div>
                  <div className="text-gray-400 mb-2">{data.unit}</div>
                  <div className="text-sm text-gray-500">{data.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform combines advanced analytics with comprehensive real estate data to deliver unmatched investment insights.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
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
                Investment <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Use Cases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI platform transforms various aspects of real estate investment and portfolio management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                  
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Real Estate Sectors We Cover
              </h2>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
                Comprehensive coverage across all major real estate sectors and property types.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-sm text-zinc-400">{industry.description}</p>
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
                Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your investment needs. All plans include a 14-day free trial.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-white/5 to-cyan-900/20' 
                      : 'border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-zinc-700 text-white hover:bg-zinc-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Real Estate Investments?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Join thousands of investors who have already revolutionized their real estate strategy with AI-powered analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Get in Touch</h3>
                  <p className="text-gray-300 mb-8">
                    Ready to revolutionize your real estate investment strategy? Our team is here to help you get started with AI-powered analytics.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPinIcon className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    />
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}