import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {

  Users,
  BarChart3,
  Brain,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Zap,
  TrendingUp,
  DollarSign,
  Award,
  Clock,
  Globe,
  MessageCircle,
  FileText,
  Shield,
  Eye,
  Heart,
  Smile,
  Activity,
  PieChart,
  LineChart,
  Smartphone,
  Monitor,
  Tablet,
  ShoppingCart
} from 'lucide-react';

export default function AICustomerExperienceAnalyticsPlatform() {

  const features = [
    {

      title: 'Real-time Sentiment Analysis',
      description: 'AI-powered analysis of customer emotions and satisfaction across all touchpoints',
      icon: Heart,
      color: 'from-red-600 to-pink-600'
    },
    {

      title: 'Omnichannel Journey Mapping',
      description: 'Track customer interactions across web, mobile, social, and offline channels',
      icon: Globe,
      color: 'from-blue-600 to-cyan-600'
    },
    {

      title: 'Predictive Customer Behavior',
      description: 'Machine learning models that predict customer churn, lifetime value, and preferences',
      icon: Brain,
      color: 'from-purple-600 to-pink-600'
    },
    {

      title: 'Voice & Text Analytics',
      description: 'Advanced NLP for analyzing customer feedback, calls, and support interactions',
      icon: MessageCircle,
      color: 'from-green-600 to-emerald-600'
    },
    {

      title: 'Personalization Engine',
      description: 'AI-driven recommendations and content personalization for better engagement',
      icon: Target,
      color: 'from-orange-600 to-red-600'
    },
    {

      title: 'Customer Health Scoring',
      description: 'Comprehensive scoring system to identify at-risk customers and opportunities',
      icon: Activity,
      color: 'from-teal-600 to-green-600'
    }
  ];

  const pricing = [
    {

      plan: 'Starter',
      price: '$249',
      period: '/month',
      description: 'Perfect for small businesses starting their CX analytics journey',
      features: [
        'Basic sentiment analysis',
        'Up to 10,000 interactions/month',
        'Web analytics integration',
        'Email support',
        'Basic dashboards',
        'Mobile app access'
      ],
      popular: false
    },
    {

      plan: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing companies with complex customer interactions',
      features: [
        'All Starter features',
        'Unlimited interactions',
        'Advanced AI analytics',
        'Omnichannel tracking',
        'Predictive analytics',
        'Priority support',
        'Custom dashboards',
        'API access'
      ],
      popular: true
    },
    {

      plan: 'Enterprise',
      price: '$1,499',
      period: '/month',
      description: 'For large enterprises with global customer bases',
      features: [
        'All Professional features',
        'Multi-language support',
        'Advanced personalization',
        'Custom AI model training',
        'White-label solutions',
        'Dedicated CX consultant',
        '24/7 phone support',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const benefits = [
    {

      icon: Zap,
      title: 'Improved Customer Satisfaction',
      description: 'Increase NPS scores by up to 30% with data-driven insights'
    },
    {

      icon: TrendingUp,
      title: 'Higher Customer Retention',
      description: 'Reduce churn by up to 25% through proactive customer care'
    },
    {

      icon: DollarSign,
      title: 'Increased Revenue',
      description: 'Boost customer lifetime value by up to 40%'
    },
    {

      icon: Users,
      title: 'Better Customer Understanding',
      description: 'Deep insights into customer needs and preferences'
    }
  ];

  const useCases = [
    {

      title: 'E-commerce & Retail',
      description: 'Optimize shopping experiences, reduce cart abandonment, and increase conversions',
      icon: ShoppingCart,
      color: 'from-blue-600 to-cyan-600'
    },
    {

      title: 'Financial Services',
      description: 'Enhance banking experiences, improve fraud detection, and increase trust',
      icon: Shield,
      color: 'from-green-600 to-emerald-600'
    },
    {

      title: 'Healthcare',
      description: 'Improve patient satisfaction, optimize care delivery, and reduce wait times',
      icon: Heart,
      color: 'from-red-600 to-pink-600'
    },
    {

      title: 'Travel & Hospitality',
      description: 'Enhance guest experiences, optimize pricing, and increase loyalty',
      icon: Globe,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const analytics = [
    'Customer Satisfaction (CSAT)',
    'Net Promoter Score (NPS)',
    'Customer Effort Score (CES)',
    'Customer Lifetime Value (CLV)',
    'Churn Prediction',
    'Sentiment Analysis',
    'Journey Mapping',
    'Touchpoint Analysis',
    'Conversion Funnel',
    'A/B Testing Results',
    'Customer Segmentation',
    'Behavioral Analytics'
  ];

  return (
    <div className="min-h-screen bg-futuristic pt-32">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-6"
            >
              <Users className="h-4 w-4 mr-2" />
              AI-Powered CX Analytics
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              AI Customer Experience
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Analytics Platform
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Transform customer insights into actionable strategies with AI-powered analytics, 
              predictive modeling, and real-time sentiment analysis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Request Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Comprehensive CX Analytics Features
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our AI-powered platform provides deep insights into customer behavior, 
              sentiment, and journey optimization across all touchpoints.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Industry-Specific Solutions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Tailored customer experience analytics for different industry sectors and business models.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${useCase.color} mb-4`}>
                  <useCase.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Metrics Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Comprehensive Analytics Metrics
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Track and analyze every aspect of your customer experience with our comprehensive metrics suite.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {analytics.map((metric, index) => (
              <motion.div
                key={metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center"
              >
                <div className="text-gray-300 font-medium text-sm">{metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Transparent Pricing Plans
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Choose the plan that fits your customer experience goals and scale as you grow.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gray-800/50 rounded-xl p-8 border transition-all duration-300 ${

                  plan.popular 
                    ? 'border-purple-500 bg-gray-800/70 scale-105' 
                    : 'border-gray-700 hover:border-purple-500/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-2 bg-purple-500 text-white text-sm font-medium rounded-full">
                      <Star className="h-4 w-4 mr-2" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${

                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Why Choose Our Platform?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/30"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Experience?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join forward-thinking companies that are using AI to understand their customers better 
              and deliver exceptional experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-8"
            >
              Get in Touch
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <Phone className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +1 302 464 0950
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <Mail className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <MapPin className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-purple-400 text-center">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}