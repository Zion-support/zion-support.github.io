import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  Heart, 
  TrendingUp, 
  CheckCircle, 
  MessageSquare, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Star, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Headphones,
  Award,
  Clock,
  DollarSign,
  ShoppingCart
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AICustomerSuccessPlatform() {
  const features = [
    {
      title: 'AI-Powered Customer Journey Mapping',
      description: 'Intelligent tracking and optimization of customer touchpoints across all channels',
      icon: Target,
      benefits: ['360° customer view', 'Personalized experiences', 'Increased retention rates']
    },
    {
      title: 'Predictive Churn Prevention',
      description: 'Advanced AI algorithms identify at-risk customers before they leave',
      icon: Shield,
      benefits: ['Proactive intervention', 'Reduced churn by 25%', 'Higher lifetime value']
    },
    {
      title: 'Intelligent Ticket Routing',
      description: 'AI automatically routes support tickets to the best-suited agents',
      icon: MessageSquare,
      benefits: ['Faster resolution times', 'Improved customer satisfaction', 'Better agent utilization']
    },
    {
      title: 'Sentiment Analysis & Monitoring',
      description: 'Real-time analysis of customer feedback and social media mentions',
      icon: BarChart3,
      benefits: ['Instant feedback insights', 'Brand reputation management', 'Proactive issue resolution']
    },
    {
      title: 'Automated Customer Onboarding',
      description: 'AI-driven onboarding sequences that adapt to individual customer needs',
      icon: Users,
      benefits: ['Faster time-to-value', 'Reduced support tickets', 'Higher adoption rates']
    },
    {
      title: 'Smart Success Metrics',
      description: 'AI-powered KPIs that predict customer success and business outcomes',
      icon: TrendingUp,
      benefits: ['Data-driven decisions', 'Predictive analytics', 'ROI optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Growth',
      price: '$399',
      period: '/month',
      description: 'Perfect for growing SaaS companies',
      features: [
        'Up to 1,000 customers',
        'AI journey mapping',
        'Basic churn prevention',
        'Standard reporting',
        'Email support'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/request-quote?service=ai-customer-success&plan=growth'
    },
    {
      name: 'Scale',
      price: '$799',
      period: '/month',
      description: 'Ideal for scaling businesses',
      features: [
        'Up to 10,000 customers',
        'Advanced AI analytics',
        'Predictive churn prevention',
        'Intelligent routing',
        'Priority support',
        'Custom integrations'
      ],
      popular: true,
      cta: 'Get Started',
      href: '/request-quote?service=ai-customer-success&plan=scale'
    },
    {
      name: 'Enterprise',
      price: '$1,599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited customers',
        'Full AI suite',
        'Custom AI models',
        'Advanced analytics',
        'Dedicated support',
        'White-label options',
        'API access'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/request-quote?service=ai-customer-success&plan=enterprise'
    }
  ];

  const useCases = [
    {
      title: 'SaaS Companies',
      description: 'Optimize customer onboarding, reduce churn, and increase expansion revenue',
      icon: Users,
      benefits: ['Faster onboarding', 'Reduced churn', 'Higher expansion rates']
    },
    {
      title: 'E-commerce Platforms',
      description: 'Personalize customer experiences and improve retention through AI insights',
      icon: ShoppingCart,
      benefits: ['Personalized recommendations', 'Better retention', 'Increased AOV']
    },
    {
      title: 'Financial Services',
      description: 'Enhance customer trust and satisfaction with AI-powered support and insights',
      icon: Shield,
      benefits: ['Trust building', 'Compliance support', 'Better satisfaction']
    },
    {
      title: 'Healthcare Providers',
      description: 'Improve patient engagement and outcomes with intelligent care coordination',
      icon: Heart,
      benefits: ['Better engagement', 'Improved outcomes', 'Care coordination']
    }
  ];

  const benefits = [
    {
      metric: '25%',
      description: 'Reduction in customer churn',
      icon: TrendingUp
    },
    {
      metric: '40%',
      description: 'Faster customer onboarding',
      icon: Zap
    },
    {
      metric: '35%',
      description: 'Increase in customer lifetime value',
      icon: DollarSign
    },
    {
      metric: '50%',
      description: 'Reduction in support tickets',
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Customer Success Platform - Zion Tech Group"
        description="Revolutionary AI-powered customer success platform that predicts churn, optimizes onboarding, and maximizes customer lifetime value."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/10 border border-blue-200/20 text-blue-200 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Customer Success
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Customer Success with
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our revolutionary AI customer success platform predicts churn, optimizes onboarding, 
              and maximizes customer lifetime value. Get 25% reduction in churn with intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote?service=ai-customer-success"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="#demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-blue-200/20 text-blue-200 font-semibold hover:bg-blue-200/10 transition-all duration-200"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results with AI-Powered Customer Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of companies already achieving remarkable improvements in customer retention 
              and satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
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
              AI-Powered Features That Transform Customer Success
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to understand, engage, and retain your customers 
              like never before.
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
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing for Every Business Size
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your organization. All plans include our core AI features 
              with enterprise-grade security and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-blue-500/50 ring-2 ring-blue-500/20' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
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
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.href}
                  className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
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
              Perfect for Any Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI customer success platform adapts to your specific industry needs 
              and customer requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300 mb-3">{useCase.description}</p>
                    <ul className="space-y-1">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Success?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already using AI to reduce churn, improve satisfaction, 
              and maximize customer lifetime value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote?service=ai-customer-success"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-blue-200/20 text-blue-200 font-semibold hover:bg-blue-200/10 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-400 mb-3" />
              <p className="text-white font-semibold">Phone</p>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-blue-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-400 mb-3" />
              <p className="text-white font-semibold">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-400 mb-3" />
              <p className="text-white font-semibold">Address</p>
              <p className="text-gray-300 text-center">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}