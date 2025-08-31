import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Home, 
  TrendingUp, 
  MapPin, 
  Calculator, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Search,
  Clock,
  DollarSign,
  Users,
  Shield,
  Globe,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Star,
  Target,
  Lightbulb,
  Building2,
  ChartLine,
  PieChart,
  AlertTriangle,
  Eye,
  Download,
  Upload,
  Share2,
  Settings,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Tablet,
  Laptop,
  Zap,
  Lock,
  Globe2,
  Target,
  Award,
  Rocket,
  Briefcase,
  Wallet,
  PiggyBank,
  LineChart,
  PieChart as PieChartIcon,
  TrendingDown,
  Calendar,
  Clock as ClockIcon,
  DollarSign as DollarSignIcon,
  Percent,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export default function AIRealEstateInvestmentPlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI Market Analysis",
      description: "Advanced algorithms analyze market trends, property values, and investment opportunities with 95% accuracy"
    },
    {
      icon: ChartLine,
      title: "Predictive Analytics",
      description: "Forecast property appreciation, rental yields, and market movements using machine learning"
    },
    {
      icon: MapPin,
      title: "Geographic Intelligence",
      description: "Location-based insights including demographics, infrastructure development, and neighborhood trends"
    },
    {
      icon: Calculator,
      title: "ROI Calculator",
      description: "Comprehensive investment analysis with cash flow projections, tax implications, and exit strategies"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "AI-powered risk scoring for properties, markets, and investment strategies"
    },
    {
      icon: Globe2,
      title: "Global Market Access",
      description: "Access to real estate markets worldwide with localized insights and regulations"
    }
  ];

  const pricingPlans = [
    {
      name: "Investor",
      price: "$99",
      period: "/month",
      description: "Perfect for individual real estate investors",
      features: [
        "Up to 50 property analyses/month",
        "Basic AI market insights",
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
      price: "$299",
      period: "/month",
      description: "Ideal for real estate professionals and serious investors",
      features: [
        "Up to 500 property analyses/month",
        "Advanced AI analytics",
        "Portfolio management",
        "Priority support",
        "Advanced analytics dashboard",
        "API access",
        "Custom alerts",
        "Market reports"
      ],
      popular: true,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For real estate firms and institutional investors",
      features: [
        "Unlimited property analyses",
        "Custom AI models",
        "White-label solution",
        "Dedicated support team",
        "Advanced integrations",
        "Custom market data",
        "On-premise deployment option",
        "Team collaboration tools"
      ],
      popular: false,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const useCases = [
    {
      title: "Property Investment Analysis",
      description: "Comprehensive analysis of potential investment properties with detailed ROI projections",
      icon: Building2,
      benefits: ["95% accuracy", "ROI projections", "Risk assessment"]
    },
    {
      title: "Portfolio Optimization",
      description: "AI-driven recommendations for portfolio diversification and rebalancing",
      icon: PieChartIcon,
      benefits: ["Diversification", "Risk management", "Performance tracking"]
    },
    {
      title: "Market Timing",
      description: "Identify optimal entry and exit points using predictive market analytics",
      icon: TrendingUp,
      benefits: ["Market timing", "Trend analysis", "Opportunity alerts"]
    },
    {
      title: "Due Diligence",
      description: "Automated property research and market analysis for informed decisions",
      icon: Search,
      benefits: ["Faster research", "Comprehensive data", "Risk identification"]
    }
  ];

  const marketData = [
    { metric: "Market Coverage", value: "150+ Countries", icon: Globe2 },
    { metric: "Properties Analyzed", value: "10M+", icon: Building2 },
    { metric: "Data Sources", value: "500+", icon: Database },
    { metric: "Update Frequency", value: "Real-time", icon: Clock },
    { metric: "Accuracy Rate", value: "95%", icon: Target },
    { metric: "ROI Predictions", value: "90%", icon: TrendingUp }
  ];

  const integrations = [
    { name: "Zillow", type: "Property Data" },
    { name: "Redfin", type: "Market Data" },
    { name: "Realtor.com", type: "Listing Data" },
    { name: "CoStar", type: "Commercial Data" },
    { name: "Yardi", type: "Property Management" },
    { name: "RealPage", type: "Analytics" },
    { name: "Salesforce", type: "CRM" },
    { name: "QuickBooks", type: "Accounting" }
  ];

  const stats = [
    { number: "95%", label: "Analysis Accuracy", icon: CheckCircle },
    { number: "40%", label: "Better Returns", icon: TrendingUp },
    { number: "150+", label: "Countries Covered", icon: Globe2 },
    { number: "50,000+", label: "Active Users", icon: Users }
  ];

  const investmentTypes = [
    {
      type: "Residential",
      description: "Single-family homes, condos, townhouses",
      icon: Home,
      markets: ["US", "Canada", "UK", "Australia", "Germany"]
    },
    {
      type: "Commercial",
      description: "Office buildings, retail spaces, warehouses",
      icon: Building2,
      markets: ["US", "UK", "Singapore", "Hong Kong", "UAE"]
    },
    {
      type: "Multifamily",
      description: "Apartment complexes, student housing",
      icon: Users,
      markets: ["US", "Canada", "UK", "Australia", "Netherlands"]
    },
    {
      type: "Industrial",
      description: "Manufacturing facilities, logistics centers",
      icon: Building2, // Assuming Warehouse is not imported, using Building2 as a placeholder
      markets: ["US", "Germany", "China", "Japan", "South Korea"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50">
      <Helmet>
        <title>AI Real Estate Investment Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionize real estate investing with AI-powered platform. 95% accuracy, predictive analytics, and global market access. Start from $99/month." />
        <meta name="keywords" content="AI real estate, real estate investment, property analysis, market analytics, investment platform, real estate technology" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-real-estate-investment-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-green-500/20 rounded-full">
                <Home className="w-12 h-12 text-green-300" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI-Powered Real Estate Investment Platform
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
              Make smarter real estate investments with AI-driven insights. 95% accuracy in market analysis, 
              predictive analytics, and global market access for optimal returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg font-semibold text-lg transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-white/30 hover:bg-white/10 rounded-lg font-semibold text-lg transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features for Real Estate Investors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with comprehensive real estate data to deliver 
              unprecedented insights and investment opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Market Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access real-time data from over 150 countries with 500+ data sources and 95% accuracy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <data.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{data.value}</div>
                <div className="text-gray-600">{data.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Investment Types & Markets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversify your portfolio across different property types and global markets.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <type.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.type}</h3>
                <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                <div className="text-xs text-gray-500">
                  <strong>Markets:</strong> {type.markets.join(", ")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your investment strategy. All plans include our core AI analysis features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-xl shadow-lg border-2 ${
                  plan.popular ? 'border-green-500' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="text-left space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transform Your Investment Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI-powered real estate analysis can revolutionize your investment decisions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                    <p className="text-gray-600 mb-4">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with your existing real estate tools and platforms for a seamless workflow experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{integration.name}</h3>
                  <p className="text-sm text-gray-600">{integration.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-green-300" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Real Estate Investing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of investors who are already using AI to make smarter real estate decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg font-semibold text-lg text-white transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-green-500 text-green-500 hover:bg-green-50 rounded-lg font-semibold text-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Have Questions? We're Here to Help
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPinIcon className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}