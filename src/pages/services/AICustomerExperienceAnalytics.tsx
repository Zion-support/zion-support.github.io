import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  MessageCircle, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Target, 
  Zap, 
  Shield,
  Eye,
  Heart,
  Star,
  Globe,
  Cpu,
  Lock,
  Award,
  Rocket,
  Lightbulb,
  PieChart,
  Activity,
  Smartphone,
  ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AICustomerExperienceAnalytics: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Sentiment Analysis',
      description: 'Advanced natural language processing to understand customer emotions and satisfaction levels'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics Dashboard',
      description: 'Live insights into customer behavior, satisfaction scores, and experience metrics'
    },
    {
      icon: Users,
      title: 'Customer Journey Mapping',
      description: 'Visualize and optimize the complete customer experience across all touchpoints'
    },
    {
      icon: Target,
      title: 'Predictive Customer Insights',
      description: 'AI-driven predictions for customer churn, lifetime value, and satisfaction trends'
    },
    {
      icon: MessageCircle,
      title: 'Multi-channel Feedback Integration',
      description: 'Unified analysis from surveys, social media, reviews, and support interactions'
    },
    {
      icon: Shield,
      title: 'Privacy-First Analytics',
      description: 'GDPR and CCPA compliant with enterprise-grade security and data protection'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Customer Experience',
      description: 'Optimize online shopping experiences and increase conversion rates',
      icon: ShoppingCart,
      benefits: ['25% increase in conversion rates', '40% reduction in cart abandonment', 'Improved customer retention']
    },
    {
      title: 'SaaS Product Analytics',
      description: 'Understand user behavior and optimize product features for better adoption',
      icon: Cpu,
      benefits: ['30% improvement in feature adoption', 'Reduced churn by 35%', 'Better product roadmap decisions']
    },
    {
      title: 'Customer Support Optimization',
      description: 'Identify pain points and improve support quality and response times',
      icon: MessageCircle,
      benefits: ['50% faster issue resolution', 'Improved customer satisfaction scores', 'Reduced support costs']
    },
    {
      title: 'Brand Reputation Management',
      description: 'Monitor and improve brand perception across all customer touchpoints',
      icon: Star,
      benefits: ['Real-time brand sentiment tracking', 'Proactive reputation management', 'Improved brand loyalty']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses starting their CX analytics journey',
      features: [
        'Up to 10,000 customer interactions/month',
        'Basic sentiment analysis',
        'Standard analytics dashboard',
        'Email support',
        'Basic reporting (weekly)',
        'Up to 3 team members',
        'Standard integrations'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses with advanced CX analytics needs',
      features: [
        'Up to 100,000 customer interactions/month',
        'Advanced AI sentiment analysis',
        'Custom analytics dashboards',
        'Priority support (4-hour response)',
        'Real-time reporting',
        'Up to 15 team members',
        'Advanced integrations',
        'Customer journey mapping',
        'Predictive analytics'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with enterprise-scale customer experience needs',
      features: [
        'Unlimited customer interactions',
        'Custom AI model training',
        'White-label solutions',
        'Dedicated account manager',
        'Custom integrations development',
        'Unlimited team members',
        'Advanced security features',
        'SLA guarantees',
        'Custom reporting & analytics'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const metrics = [
    {
      icon: TrendingUp,
      title: 'Customer Satisfaction Score',
      value: '4.8/5',
      description: 'Average customer satisfaction rating'
    },
    {
      icon: Users,
      title: 'Customer Retention Rate',
      value: '92%',
      description: 'Annual customer retention rate'
    },
    {
      icon: Star,
      title: 'Net Promoter Score',
      value: '78',
      description: 'Industry-leading NPS score'
    },
    {
      icon: Zap,
      title: 'Response Time',
      value: '<2hrs',
      description: 'Average response time to customer feedback'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                <BarChart3 className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Customer Experience Analytics
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
              Transform customer insights into actionable intelligence with AI-powered analytics. 
              Understand your customers better, predict their needs, and deliver exceptional experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Proven Results
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform delivers measurable improvements in customer experience metrics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-fit mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{metric.title}</h3>
              <p className="text-gray-300 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Powerful Analytics Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to understand and optimize your customer experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg w-fit mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Transform Your Customer Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how AI-powered analytics can revolutionize customer experience across different industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-400 mb-3">Key Benefits:</h4>
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the plan that best fits your customer experience analytics needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border ${
                tier.popular 
                  ? 'border-blue-400/50 bg-gradient-to-b from-blue-500/10 to-transparent' 
                  : 'border-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={tier.cta === 'Contact Sales' ? '/contact' : '/contact'}
                className={`w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                }`}
              >
                {tier.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already improved their customer experience with AI-powered analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-gray-300">
          <p className="mb-4">
            Questions? Contact our team at{' '}
            <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
              kleber@ziontechgroup.com
            </a>
          </p>
          <p>
            Call us at{' '}
            <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">
              +1 (302) 464-0950
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AICustomerExperienceAnalytics;