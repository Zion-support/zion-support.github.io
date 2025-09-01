import React from 'react';
import { motion } from 'framer-motion';
import {

  Home, 
  TrendingUp, 
  BarChart3, 
  Target, 
  CheckCircle, 
  Users,
  Zap,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ArrowRight,
  Building,
  MapPin as MapPinIcon,
  DollarSign,
  BarChart,
  Eye,
  Search,
  Calculator,
  Shield,
  Clock,
  Globe,
  Database,
  Analytics,
  PieChart,
  LineChart
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIRealEstateAnalyticsPlatform() {

  const contactInfo = {

    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    {

      icon: TrendingUp,
      title: 'AI-Powered Market Predictions',
      description: 'Advanced machine learning algorithms predict market trends with 85% accuracy up to 12 months ahead'
    },
    {

      icon: Calculator,
      title: 'Property Valuation Algorithms',
      description: 'Real-time property valuation using multiple data sources including market trends, comparable sales, and location factors'
    },
    {

      icon: Target,
      title: 'Investment Opportunity Scoring',
      description: 'AI-driven scoring system that identifies high-potential investment opportunities based on multiple risk and return factors'
    },
    {

      icon: ChartBar,
      title: 'Market Trend Analysis',
      description: 'Comprehensive analysis of market trends, price movements, and demand patterns across different property types and locations'
    },
    {

      icon: Search,
      title: 'Comparative Market Analysis',
      description: 'Advanced CMA tools that provide detailed comparisons with similar properties in the market'
    },
    {

      icon: Shield,
      title: 'Risk Assessment Tools',
      description: 'Comprehensive risk assessment including market volatility, economic factors, and property-specific risks'
    }
  ];

  const benefits = [
    {

      icon: TrendingUp,
      title: 'Increase Investment Returns by 25%',
      description: 'Data-driven insights help identify undervalued properties and optimal timing for transactions'
    },
    {

      icon: Clock,
      title: 'Reduce Market Research Time by 70%',
      description: 'Automated data collection and analysis save hundreds of hours of manual research'
    },
    {

      icon: Target,
      title: 'Improve Decision Accuracy by 40%',
      description: 'AI algorithms eliminate human bias and provide objective market analysis'
    },
    {

      icon: Zap,
      title: 'Identify Opportunities Faster',
      description: 'Real-time alerts and predictive analytics help you act quickly on market opportunities'
    }
  ];

  const pricing = [
    {

      name: 'Starter',
      price: '$599',
      period: '/month',
      description: 'Perfect for individual investors and small real estate teams',
      features: [
        'Up to 100 property analyses per month',
        'Basic market predictions',
        'Property valuation tools',
        'Email support',
        'Standard market reports',
        'Mobile app access'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {

      name: 'Professional',
      price: '$1,199',
      period: '/month',
      description: 'Ideal for real estate agencies and investment firms',
      features: [
        'Up to 500 property analyses per month',
        'Advanced AI predictions',
        'Portfolio optimization tools',
        'Priority support',
        'Custom market reports',
        'API access',
        'Team collaboration features'
      ],
      cta: 'Schedule Demo',
      popular: true
    },
    {

      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'For large investment firms and institutional investors',
      features: [
        'Unlimited property analyses',
        'Full AI suite access',
        'Custom algorithm training',
        'Dedicated support',
        'White-label solutions',
        'Advanced analytics',
        'Custom integrations'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {

      name: 'David Rodriguez',
      role: 'Real Estate Investor',
      company: 'Rodriguez Properties',
      content: 'This platform has transformed my investment strategy. I\'ve increased my returns by 30% and can now make decisions in minutes instead of days.',
      rating: 5
    },
    {

      name: 'Jennifer Kim',
      role: 'Investment Manager',
      company: 'Urban Development Fund',
      content: 'The AI predictions are incredibly accurate. We\'ve been able to identify market opportunities before our competitors.',
      rating: 5
    },
    {

      name: 'Robert Thompson',
      role: 'Real Estate Agent',
      company: 'Thompson Realty Group',
      content: 'The comparative market analysis tools are game-changing. I can provide clients with data-driven insights that build trust.',
      rating: 5
    }
  ];

  const marketData = [
    {

      metric: '$8.9B',
      label: 'Market Size',
      description: 'Real Estate Tech Industry'
    },
    {

      metric: '35%',
      label: 'Annual Growth',
      description: 'AI Analytics Solutions'
    },
    {

      metric: '85%',
      label: 'Prediction Accuracy',
      description: 'Market Trend Forecasting'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <SEO 
        title="AI Real Estate Analytics Platform | Zion Tech Group"
        description="Advanced real estate analytics platform using AI to predict market trends, property valuations, and investment opportunities with unprecedented accuracy."
        keywords="AI real estate analytics, property valuation, market predictions, investment analysis, real estate tech, market trends"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-green-600/20 rounded-full">
                <Home className="h-8 w-8 text-green-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              AI Real Estate Analytics Platform
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto">
              Advanced real estate analytics platform using AI to predict market trends, property valuations, and investment opportunities with unprecedented accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=AI Real Estate Analytics Platform Demo Request`}
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Market Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The real estate market is becoming increasingly data-driven, with AI-powered analytics providing unprecedented insights into market trends and investment opportunities.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {marketData.map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-green-50 rounded-xl"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{data.metric}</div>
                <div className="text-lg font-semibold text-gray-900">{data.label}</div>
                <div className="text-gray-600">{data.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive real estate analytics designed for investors, agents, and developers.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your real estate investment strategy with AI-powered analytics and predictive insights.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 bg-green-100 rounded-lg">
                  <benefit.icon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your real estate analytics needs and scale as your portfolio grows.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg p-8 ${

                  plan.popular ? 'ring-2 ring-green-500 relative' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-1">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={`mailto:${contactInfo.email}?subject=${plan.name} Plan Inquiry`}
                  className="w-full inline-flex justify-center items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of real estate professionals who have transformed their investment strategies with our platform.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Real Estate Strategy?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
               Join the future of real estate analytics with AI-powered insights. Schedule a demo today and see how we can help you make smarter investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${contactInfo.email}?subject=AI Real Estate Analytics Platform Demo Request`}
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to revolutionize your real estate analytics? Contact our team to learn more about our AI-powered platform.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-6 bg-green-50 rounded-xl"
            >
              <Phone className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <a href={`tel:${contactInfo.phone}`} className="text-green-600 hover:text-green-700">
                {contactInfo.phone}
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6 bg-emerald-50 rounded-xl"
            >
              <Mail className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a href={`mailto:${contactInfo.email}`} className="text-emerald-600 hover:text-emerald-700">
                {contactInfo.email}
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-6 bg-teal-50 rounded-xl"
            >
              <MapPin className="h-8 w-8 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-teal-600">{contactInfo.address}</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href={contactInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
            >
              Visit Our Website
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}