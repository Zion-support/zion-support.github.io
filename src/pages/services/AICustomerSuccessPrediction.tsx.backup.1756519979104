import React from 'react.ts';
import { SEO  } from '@/components/SEO';
import { motion  } from 'framer-motion.ts';
import { TrendingUp, Users, Target, BarChart3, Shield, Zap, Globe, Clock, CheckCircle, Star, ArrowRight, Phone, Mail, ExternalLink  } from 'lucide-react.ts';

const AICustomerSuccessPrediction: React.FC = (): JSX.Element => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI algorithms predict customer churn, upsell opportunities, and lifetime value with 95% accuracy',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Automated customer clustering based on behavior, usage patterns, and engagement metrics',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Success Scoring',
      description: 'Real-time customer health scoring with actionable recommendations for success teams',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Performance Insights',
      description: 'Comprehensive dashboards showing customer journey, touchpoints, and success metrics',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Risk Assessment',
      description: 'Early warning system for at-risk customers with automated intervention workflows',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Automated Actions',
      description: 'Trigger automated emails, tasks, and alerts based on customer behavior patterns',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for growing SaaS companies',
      features: [
        'Up to 1,000 customers',
        'Basic predictive analytics',
        'Customer health scoring',
        'Email alerts',
        'Basic reporting',
        'Email support'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for established businesses',
      features: [
        'Up to 10,000 customers',
        'Advanced AI predictions',
        'Custom success workflows',
        'API access',
        'Advanced analytics',
        'Priority support',
        'Custom integrations'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large-scale operations',
      features: [
        'Unlimited customers',
        'Custom AI models',
        'White-label solution',
        'Dedicated success manager',
        'Custom reporting',
        '24/7 phone support',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'SaaS Companies',
      description: 'Predict churn, identify expansion opportunities, and optimize customer success operations',
      metrics: ['Reduce churn by 25%', 'Increase expansion revenue by 40%', 'Improve NPS scores']
    },
    {
      title: 'E-commerce',
      description: 'Customer lifetime value prediction, personalized recommendations, and retention strategies',
      metrics: ['Increase CLV by 35%', 'Reduce cart abandonment by 20%', 'Boost repeat purchases']
    },
    {
      title: 'Financial Services',
      description: 'Risk assessment, product adoption prediction, and customer satisfaction monitoring',
      metrics: ['Reduce risk by 30%', 'Increase product adoption by 45%', 'Improve satisfaction scores']
    }
  ];

  const integrations = [
    'Salesforce', 'HubSpot', 'Intercom', 'Zendesk', 'Slack', 'Microsoft Teams',
    'Google Analytics', 'Mixpanel', 'Amplitude', 'Segment', 'Zapier', 'Webhooks'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Customer Success Prediction Platform - Zion Tech Group"
        description="Predict customer churn, identify upsell opportunities, and optimize customer success with AI-powered analytics. Reduce churn by 25% and increase expansion revenue by 40%."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Customer Success Prediction Platform
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Leverage artificial intelligence to predict customer churn, identify expansion opportunities, 
              and optimize your customer success operations with unprecedented accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#demo" 
                className="inline-flex items-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-200 border border-slate-600"
              >
                Watch Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Customer Success Strategy
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI platform delivers measurable results that directly impact your bottom line
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">25% Churn Reduction</h3>
              <p className="text-slate-300">Identify at-risk customers before they leave and take proactive action</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">40% Revenue Growth</h3>
              <p className="text-slate-300">Uncover expansion opportunities and increase customer lifetime value</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">95% Prediction Accuracy</h3>
              <p className="text-slate-300">Advanced AI algorithms provide reliable insights for better decision-making</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Customer Success
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to predict, prevent, and optimize customer success outcomes
            </p>
          </div>
          
          <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing for Every Business
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid md: anygrid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800 rounded-xl p-8 border-2 ${
                  plan.popular 
                    ? 'border-green-500 relative' 
                    : 'border-slate-700'
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
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how different businesses are transforming their customer success with AI
            </p>
          </div>
          
          <div className="grid md: anygrid-cols-3 gap-8">
            {useCases.map((useCase, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-slate-300">
                      <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with your existing tools and workflows without disruption
            </p>
          </div>
          
          <div className="grid grid-cols-2 md: anygrid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index)  => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800 rounded-lg p-4 border border-slate-700 text-center hover:border-slate-600 transition-all duration-200"
              >
                <span className="text-slate-300 font-medium">{integration}</span>
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
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Customer Success?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Join hundreds of companies already using AI to predict customer behavior and drive growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="inline-flex items-center px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-all duration-200 border border-slate-600"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-400">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-slate-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <ExternalLink className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerSuccessPrediction;