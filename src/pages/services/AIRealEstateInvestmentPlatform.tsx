import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {

  Home, 
  Brain, 
  Shield, 
  Users, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Lock,
  Globe,
  Smartphone,
  TrendingUp,
  MapPin,
  Calculator,
  Target,
  Zap,
  DollarSign,
  Building,
  ChartLine
} from 'lucide-react';

const AIRealEstateInvestmentPlatform: React.FC = () => {

  const features = [
    {

      icon: <Brain className="w-6 h-6" />,
      title: "AI Market Analysis",
      description: "Advanced algorithms analyze market trends, property values, and investment opportunities in real-time"
    },
    {

      icon: <Home className="w-6 h-6" />,
      title: "Property Valuation AI",
      description: "Instant property valuations using machine learning and comprehensive market data analysis"
    },
    {

      icon: <TrendingUp className="w-6 h-6" />,
      title: "ROI Prediction Engine",
      description: "Predict investment returns with 92% accuracy using historical data and market forecasting"
    },
    {

      icon: <MapPin className="w-6 h-6" />,
      title: "Location Intelligence",
      description: "AI-powered neighborhood analysis including crime rates, school quality, and future development plans"
    },
    {

      icon: <Calculator className="w-6 h-6" />,
      title: "Investment Calculator",
      description: "Advanced financial modeling with tax implications, maintenance costs, and cash flow projections"
    },
    {

      icon: <Building className="w-6 h-6" />,
      title: "Portfolio Management",
      description: "Comprehensive portfolio tracking with performance analytics and rebalancing recommendations"
    }
  ];

  const pricing = [
    {

      plan: "Investor Starter",
      price: "$149/month",
      features: [
        "Up to 50 property analyses per month",
        "Basic ROI predictions",
        "Market trend reports",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {

      plan: "Professional Investor",
      price: "$399/month",
      features: [
        "Unlimited property analyses",
        "Advanced AI predictions",
        "Portfolio management tools",
        "Priority support",
        "API access",
        "Custom reports",
        "Team collaboration (up to 5 users)"
      ],
      popular: true
    },
    {

      plan: "Enterprise Portfolio",
      price: "$1,299/month",
      features: [
        "Everything in Professional",
        "Unlimited team members",
        "White-label solutions",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced analytics dashboard",
        "Compliance reporting",
        "24/7 phone support"
      ],
      popular: false
    }
  ];

  const benefits = [
    {

      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increase Investment Returns",
      description: "AI-powered insights help identify high-performing properties, increasing ROI by 25-40%"
    },
    {

      icon: <Clock className="w-8 h-8" />,
      title: "Save Time on Research",
      description: "Reduce property research time from weeks to hours with automated market analysis"
    },
    {

      icon: <Shield className="w-8 h-8" />,
      title: "Reduce Investment Risk",
      description: "Advanced risk assessment models help avoid poor investments and market downturns"
    },
    {

      icon: <DollarSign className="w-8 h-8" />,
      title: "Optimize Portfolio Performance",
      description: "Data-driven recommendations for portfolio rebalancing and diversification strategies"
    }
  ];

  const useCases = [
    {

      title: "Individual Investors",
      description: "Make informed decisions on single-family homes, condos, and small multi-family properties",
      icon: <Users className="w-6 h-6" />
    },
    {

      title: "Real Estate Companies",
      description: "Scale operations with AI-powered market insights and portfolio optimization",
      icon: <Building className="w-6 h-6" />
    },
    {

      title: "Property Managers",
      description: "Optimize rental rates and identify properties with the highest management potential",
      icon: <Home className="w-6 h-6" />
    },
    {

      title: "Investment Funds",
      description: "Large-scale portfolio management with institutional-grade analytics and reporting",
      icon: <ChartLine className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Real Estate Investment Platform - Zion Tech Group</title>
        <meta name="description" content="Transform your real estate investments with AI-powered market analysis, property valuation, and portfolio management. Get 92% accurate ROI predictions." />
        <meta name="keywords" content="AI real estate, property investment, market analysis, ROI prediction, portfolio management, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-real-estate-investment-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Home className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Real Estate Investment
              <span className="text-blue-400 block">Platform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your real estate investments with AI-powered market analysis, 
              property valuation, and portfolio management. Make data-driven decisions 
              with 92% accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                <Smartphone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
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
              AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced artificial intelligence that transforms how you analyze and invest in real estate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Investment Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the perfect plan for your investment strategy and portfolio size
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border ${

                  plan.popular 
                    ? 'border-blue-500/50 bg-gradient-to-b from-blue-500/10 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">per month</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ziontechgroup.com/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${

                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  Get Started
                </a>
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
              Investment Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your real estate investment strategy with AI-powered insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="text-blue-400 mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect For
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you're a first-time investor or managing a large portfolio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-blue-400 mb-4 flex justify-center">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Real Estate Investments?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of investors using AI to make smarter real estate decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Help Getting Started?
          </h3>
          <p className="text-gray-300 mb-6">
            Our real estate AI experts are here to guide you through the platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-gray-300">
              <Smartphone className="w-5 h-5 mr-2" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Globe className="w-5 h-5 mr-2" />
              <span>ziontechgroup.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Lock className="w-5 h-5 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIRealEstateInvestmentPlatform;