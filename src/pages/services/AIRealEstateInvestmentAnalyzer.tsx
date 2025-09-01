import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Building2, 
  TrendingUp, 
  MapPin, 
  Calculator, 
  BarChart3, 
  Target,
  Shield,
  Zap,
  Users,
  Globe,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  ExternalLink,
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Database,
  LineChart,
  PieChart,
  Building,
  Home,
  DollarSign,
  Percent,
  Calendar,
  AlertTriangle,
  Award,
  Clock,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  BookOpen,
  Lightbulb,
  Rocket,
  Crown,
  Gem,
  Sparkles
} from 'lucide-react';

export default function AIRealEstateInvestmentAnalyzer() {
  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    {
      icon: Brain,
      title: 'AI Market Analysis',
      description: 'Advanced machine learning algorithms analyze market trends, property values, and investment opportunities in real-time'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast property appreciation, rental yields, and market fluctuations with 85%+ accuracy'
    },
    {
      icon: MapPin,
      title: 'Geographic Intelligence',
      description: 'Location-based insights including neighborhood growth, infrastructure development, and demographic trends'
    },
    {
      icon: Calculator,
      title: 'ROI Calculator',
      description: 'Comprehensive investment analysis including cash flow, cap rates, and break-even analysis'
    },
    {
      icon: Database,
      title: 'Big Data Integration',
      description: 'Access to millions of property records, market data, and economic indicators'
    },
    {
      icon: LineChart,
      title: 'Portfolio Optimization',
      description: 'AI-driven recommendations for optimal property mix and diversification strategies'
    }
  ];

  const benefits = [
    'Increase investment returns by 25-40% through data-driven decisions',
    'Reduce research time from weeks to hours with automated analysis',
    'Minimize risk with comprehensive market intelligence and trend analysis',
    'Access institutional-grade analytics previously only available to large firms',
    'Stay ahead of market changes with real-time alerts and predictions',
    'Optimize portfolio performance with AI-powered recommendations'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: 'month',
      description: 'Perfect for individual investors',
      features: [
        'Up to 100 property analyses per month',
        'Basic market reports',
        'ROI calculations',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: 'month',
      description: 'Ideal for real estate professionals',
      features: [
        'Up to 500 property analyses per month',
        'Advanced market intelligence',
        'Portfolio optimization tools',
        'Priority support',
        'API access',
        'Custom reports',
        'Market alerts'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: 'month',
      description: 'For large investment firms',
      features: [
        'Unlimited property analyses',
        'White-label solutions',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced analytics dashboard',
        'Team collaboration tools',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Individual Investors',
      description: 'Make informed decisions on residential and commercial properties',
      icon: Users
    },
    {
      title: 'Real Estate Agents',
      description: 'Provide clients with data-driven investment insights',
      icon: Building2
    },
    {
      title: 'Property Managers',
      description: 'Optimize portfolio performance and identify new opportunities',
      icon: Building
    },
    {
      title: 'Investment Firms',
      description: 'Scale operations with institutional-grade analytics',
      icon: Crown
    }
  ];

  const marketData = {
    marketSize: '$15.8B (Real Estate Analytics)',
    growthRate: '23.4% CAGR',
    targetAudience: 'Real estate investors, agents, property managers, investment firms',
    competitiveAdvantage: 'AI-first approach with 85%+ prediction accuracy'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI Real Estate Investment Analyzer | Zion Tech Group"
        description="Transform your real estate investments with AI-powered market analysis, predictive analytics, and portfolio optimization. Get 85%+ accuracy on market predictions."
        keywords="AI real estate, investment analysis, market intelligence, property analytics, real estate AI, investment optimization"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100/10 border border-purple-200/20 text-purple-200 text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Real Estate Intelligence
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Real Estate Investment
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Analyzer</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your real estate investments with AI-powered market analysis, predictive analytics, and portfolio optimization. 
              Get institutional-grade insights with 85%+ prediction accuracy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactInfo.email}?subject=AI Real Estate Investment Analyzer Demo Request`}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-200/20 text-purple-200 font-semibold hover:bg-purple-200/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features for Smart Investing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leverage cutting-edge artificial intelligence to make data-driven real estate investment decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-200/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
              Why Choose Our AI Analyzer?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the power of AI-driven real estate investment intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options for every type of investor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-purple-400/50 bg-purple-500/10' 
                    : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:${contactInfo.email}?subject=${plan.name} Plan - AI Real Estate Investment Analyzer`}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Who Benefits Most?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI analyzer is designed for all types of real estate professionals and investors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Market Opportunity
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join the rapidly growing AI-powered real estate analytics market
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{marketData.marketSize}</div>
              <p className="text-gray-300">Market Size</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{marketData.growthRate}</div>
              <p className="text-gray-300">Growth Rate</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">85%+</div>
              <p className="text-gray-300">Prediction Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <p className="text-gray-300">Real-time Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of investors who are already using AI to make smarter, more profitable real estate decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactInfo.email}?subject=AI Real Estate Investment Analyzer Demo Request`}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 rounded-lg border border-purple-200/20 text-purple-200 font-semibold hover:bg-purple-200/10 transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-white font-semibold">Phone</p>
              <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-purple-400 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-white font-semibold">Email</p>
              <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-purple-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPinIcon className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-gray-300 text-center">{contactInfo.address}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}