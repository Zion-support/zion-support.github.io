import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { 
  Users, 
  BarChart3, 
  Brain, 
  Zap, 
  Eye, 
  TrendingUp, 
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Heart,
  MessageSquare,
  Activity,
  Target,
  Clock,
  DollarSign,
  Award,
  Database,
  Network,
  Cpu,
  PieChart,
  LineChart
} from 'lucide-react';

export default function AICustomerExperienceAnalytics() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Sentiment Analysis',
      description: 'Advanced natural language processing that analyzes customer feedback and sentiment across all channels.',
      benefits: ['Real-time sentiment tracking', 'Multi-language support', 'Emotion detection', 'Trend analysis']
    },
    {
      icon: Eye,
      title: 'Customer Journey Mapping',
      description: 'Visualize and analyze customer touchpoints across the entire customer lifecycle with AI insights.',
      benefits: ['Journey visualization', 'Touchpoint analysis', 'Conversion tracking', 'Optimization insights']
    },
    {
      icon: Activity,
      title: 'Predictive Analytics',
      description: 'Forecast customer behavior, churn risk, and lifetime value using machine learning algorithms.',
      benefits: ['Churn prediction', 'LTV forecasting', 'Behavior modeling', 'Risk assessment']
    },
    {
      icon: MessageSquare,
      title: 'Voice of Customer Analytics',
      description: 'Extract actionable insights from customer conversations, surveys, and feedback across all channels.',
      benefits: ['Feedback analysis', 'Survey insights', 'Conversation mining', 'Actionable recommendations']
    },
    {
      icon: Heart,
      title: 'Customer Satisfaction Metrics',
      description: 'Track and analyze key customer experience metrics with real-time dashboards and reporting.',
      benefits: ['NPS tracking', 'CSAT monitoring', 'CES measurement', 'Performance analytics']
    },
    {
      icon: BarChart3,
      title: 'Advanced Reporting',
      description: 'Comprehensive analytics dashboard with customizable reports and automated insights delivery.',
      benefits: ['Custom dashboards', 'Automated reporting', 'KPI tracking', 'Performance optimization']
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce & Retail',
      title: 'Customer Journey Optimization',
      description: 'Optimize the online shopping experience with AI-powered customer journey analysis and personalization.',
      metrics: ['25% increase in conversion rates', '30% improvement in customer satisfaction', '20% reduction in cart abandonment']
    },
    {
      industry: 'Financial Services',
      title: 'Customer Experience Enhancement',
      description: 'Improve customer satisfaction and loyalty with AI-driven insights and personalized service recommendations.',
      metrics: ['35% improvement in customer retention', '40% increase in customer lifetime value', '25% reduction in complaints']
    },
    {
      industry: 'Healthcare',
      title: 'Patient Experience Analytics',
      description: 'Enhance patient satisfaction and care quality with AI-powered experience analytics and feedback analysis.',
      metrics: ['30% improvement in patient satisfaction', '25% reduction in wait times', '20% increase in care quality scores']
    },
    {
      industry: 'Telecommunications',
      title: 'Service Quality Monitoring',
      description: 'Monitor and improve service quality with real-time customer experience analytics and predictive insights.',
      metrics: ['40% reduction in customer churn', '35% improvement in service quality', '30% increase in customer loyalty']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Customer Satisfaction',
      description: 'Improve customer satisfaction scores and loyalty through data-driven insights.',
      value: '25-40%'
    },
    {
      icon: DollarSign,
      title: 'Revenue Growth',
      description: 'Increase revenue through better customer experience and retention strategies.',
      value: '20-35%'
    },
    {
      icon: Users,
      title: 'Customer Retention',
      description: 'Reduce customer churn and improve lifetime value with predictive analytics.',
      value: '30-50%'
    },
    {
      icon: Target,
      title: 'Operational Efficiency',
      description: 'Streamline operations and improve efficiency with AI-powered insights.',
      value: '25-40%'
    }
  ];

  const technologies = [
    'Machine Learning AI',
    'Natural Language Processing',
    'Sentiment Analysis',
    'Predictive Analytics',
    'Customer Journey Analytics',
    'Real-time Processing',
    'Big Data Analytics',
    'Cloud Computing',
    'API Integration',
    'Data Visualization',
    'Automated Reporting',
    'Multi-channel Analytics'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$129',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic sentiment analysis',
        'Customer journey mapping',
        'Basic analytics dashboard',
        'Email support',
        'Standard reporting',
        'Up to 10,000 interactions/month'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      plan: 'Professional',
      price: '$349',
      period: '/month',
      description: 'Ideal for growing businesses and enterprises',
      features: [
        'Advanced AI analytics',
        'Predictive analytics',
        'Multi-channel integration',
        'Custom dashboards',
        'Priority support',
        'Advanced reporting',
        'API access',
        'Up to 100,000 interactions/month'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$899',
      period: '/month',
      description: 'For large organizations with complex customer experience needs',
      features: [
        'Full AI analytics suite',
        'Custom AI models',
        'Dedicated support team',
        'SLA guarantees',
        'On-site implementation',
        'Custom development',
        'White-label options',
        'Unlimited interactions'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Customer Experience Analytics - Zion Tech Group"
        description="Transform your customer experience with AI-powered analytics. Get insights into customer behavior, sentiment, and journey optimization."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
                {' '}Customer Experience Analytics
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Transform your customer experience with AI-powered analytics. Understand customer behavior, 
              optimize journeys, and drive loyalty with data-driven insights and predictive analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center space-x-2 border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300"
              >
                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">25-40%</div>
              <div className="text-slate-400">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">20-35%</div>
              <div className="text-slate-400">Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">30-50%</div>
              <div className="text-slate-400">Customer Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">25-40%</div>
              <div className="text-slate-400">Operational Efficiency</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful Analytics
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Features
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI customer experience analytics platform combines cutting-edge technology with comprehensive 
              features to deliver actionable insights that drive customer success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-pink-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI customer experience analytics platform is tailored to meet the unique challenges of different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-pink-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-pink-400/20 text-pink-400 text-sm rounded-full">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Key Results:</h4>
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-slate-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Measurable
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Business Impact
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI customer experience analytics platform delivers quantifiable results that directly impact your business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-4">{benefit.value}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Technologies
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built on the latest AI and analytics technologies to deliver superior customer experience insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-pink-400/50 transition-all duration-300 text-center"
              >
                <div className="text-white font-semibold">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transparent
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Pricing
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Choose the perfect customer experience analytics plan for your business. All plans include a 30-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-pink-400/50 scale-105' 
                    : 'border-slate-700/50 hover:border-pink-400/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.plan === 'Enterprise' ? '/contact' : '/signup'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white hover:from-pink-500 hover:to-purple-600'
                      : 'border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Customer Experience?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already revolutionized their customer experience 
              with our AI-powered analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 border border-pink-400 text-pink-400 px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300"
              >
                <span>Call +1 302 464 0950</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6 text-slate-400">
              <p>Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:text-pink-300">kleber@ziontechgroup.com</a></p>
              <p>Visit us at <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">ziontechgroup.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}