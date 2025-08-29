import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Brain,
  Target,
  Rocket,
  DollarSign,
  ExternalLink,
  Heart,
  Zap,
  Activity,
  Gauge,
  Layers,
  Target,
  Award,
  Clock,
  Bell,
  Mail,
  Phone,
  Video
} from 'lucide-react';

export default function AICustomerSuccessPlatform() {
  const features = [
    {
      icon: Users,
      title: 'Intelligent Customer Segmentation',
      description: 'AI-powered customer segmentation based on behavior, usage patterns, and predictive analytics',
      benefits: ['Behavioral analysis', 'Predictive segmentation', 'Dynamic personas', 'Real-time updates']
    },
    {
      icon: MessageSquare,
      title: 'Proactive Engagement Engine',
      description: 'Automated outreach and engagement based on customer health scores and predicted churn risk',
      benefits: ['Automated outreach', 'Personalized messaging', 'Multi-channel engagement', 'Response tracking']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Churn Prevention',
      description: 'Early warning system for customer churn with actionable insights and intervention strategies',
      benefits: ['Churn prediction', 'Risk scoring', 'Intervention strategies', 'Success tracking']
    },
    {
      icon: Shield,
      title: 'Customer Health Monitoring',
      description: 'Comprehensive customer health scoring with real-time monitoring and alerting',
      benefits: ['Health scoring', 'Real-time monitoring', 'Custom metrics', 'Alert system']
    }
  ];

  const useCases = [
    {
      title: 'SaaS & Subscription Businesses',
      description: 'Reduce churn and increase customer lifetime value with intelligent success management',
      benefits: ['Churn reduction', 'LTV optimization', 'Expansion revenue', 'Customer satisfaction']
    },
    {
      title: 'Enterprise B2B Services',
      description: 'Manage complex customer relationships with AI-powered insights and automation',
      benefits: ['Relationship management', 'Account expansion', 'Risk mitigation', 'Success planning']
    },
    {
      title: 'E-commerce & Retail',
      description: 'Personalize customer experiences and increase repeat purchases with intelligent engagement',
      benefits: ['Personalization', 'Repeat purchases', 'Customer loyalty', 'Revenue growth']
    },
    {
      title: 'Financial Services',
      description: 'Enhance customer retention and cross-selling with predictive analytics and automation',
      benefits: ['Retention optimization', 'Cross-selling', 'Risk management', 'Compliance automation']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses starting their customer success journey',
      features: [
        'Up to 1,000 customers',
        'Basic health scoring',
        'Email engagement',
        'Standard support',
        'Basic analytics'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced features for growing customer success teams',
      features: [
        'Up to 10,000 customers',
        'Advanced health scoring',
        'Multi-channel engagement',
        'Priority support',
        'Advanced analytics',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Full-featured platform for large customer success organizations',
      features: [
        'Unlimited customers',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom analytics',
        'API access',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const integrations = [
    'Salesforce', 'HubSpot', 'Intercom', 'Zendesk', 'Slack', 'Microsoft Teams',
    'Stripe', 'Chargebee', 'Recurly', 'Shopify', 'WooCommerce', 'Magento',
    'Google Analytics', 'Mixpanel', 'Amplitude', 'Segment', 'Zapier', 'Webhook APIs'
  ];

  const metrics = [
    {
      title: 'Churn Reduction',
      value: '25-40%',
      description: 'Average reduction in customer churn rate'
    },
    {
      title: 'LTV Increase',
      value: '30-50%',
      description: 'Average increase in customer lifetime value'
    },
    {
      title: 'Response Time',
      value: '<2 hours',
      description: 'Average response time to customer issues'
    },
    {
      title: 'Customer Satisfaction',
      value: '95%+',
      description: 'Average customer satisfaction score'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="AI-Powered Customer Success Platform - Zion Tech Group"
        description="Transform your customer success with AI-powered insights, predictive analytics, and automated engagement. Reduce churn and increase customer lifetime value."
        keywords="customer success platform, AI customer success, churn prevention, customer health scoring, customer engagement automation"
        canonical="https://ziontechgroup.com/services/ai-customer-success-platform"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/50 px-4 py-2 text-cyan-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Users className="h-4 w-4" />
            <span className="text-sm font-semibold">CUSTOMER SUCCESS</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI-Powered Customer Success Platform
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your customer success with intelligent insights, predictive analytics, and automated engagement. Reduce churn, increase customer lifetime value, and build lasting relationships.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/request-quote" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Request Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Intelligent Customer Success
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leverage AI to understand your customers better, predict their needs, and engage proactively
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6">{feature.description}</p>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Proven Results
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See the measurable impact of AI-powered customer success on your business
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <h3 className="text-xl font-bold text-white mb-2">{metric.title}</h3>
                <p className="text-slate-300">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how AI-powered customer success transforms operations across industries
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-300">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your customer success needs and scale as you grow
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={plan.cta === 'Contact Sales' ? '/contact' : '/contact'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with your existing tools and platforms through our extensive integration ecosystem
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-3 md:grid-cols-6 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {integrations.map((integration, index) => (
              <div
                key={integration}
                className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center hover:border-cyan-500 transition-all duration-300"
              >
                <span className="text-sm text-slate-300 font-medium">{integration}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Your Customer Success?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join organizations already reducing churn and increasing customer lifetime value with AI-powered insights
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/request-quote" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-sm text-cyan-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>Contact us: <a href="tel:+13024640950" className="underline">+1 302 464 0950</a> | <a href="mailto:kleber@ziontechgroup.com" className="underline">kleber@ziontechgroup.com</a></p>
            <p className="mt-2">364 E Main St STE 1008, Middletown DE 19709</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}