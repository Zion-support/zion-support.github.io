import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  MessageCircle, 
  Heart, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Database,
  BarChart3,
  TrendingUp,
  Target,
  Award,
  Star,
  Smile,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const features = [
  {
    icon: Users,
    title: 'Customer Journey Mapping',
    description: 'Visualize and optimize every touchpoint in your customer\'s experience journey.'
  },
  {
    icon: MessageCircle,
    title: 'Personalization Engine',
    description: 'AI-powered personalization that adapts content and experiences to individual customers.'
  },
  {
    icon: BarChart3,
    title: 'Feedback Analytics',
    description: 'Advanced analytics to understand customer sentiment and satisfaction levels.'
  },
  {
    icon: Heart,
    title: 'Automated Support',
    description: 'Intelligent chatbots and automated workflows to provide instant customer support.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Monitoring',
    description: 'Real-time tracking of customer experience metrics and KPIs.'
  },
  {
    icon: Target,
    title: 'Customer Segmentation',
    description: 'Advanced segmentation to deliver targeted experiences and communications.'
  }
];

const benefits = [
  'Increase customer satisfaction and loyalty',
  'Reduce customer churn and support costs',
  'Improve conversion rates and revenue',
  'Gain deeper customer insights',
  'Automate repetitive customer interactions',
  'Scale customer experience operations'
];

const pricing = [
  {
    name: 'Starter',
    price: '$199',
    period: '/month',
    description: 'Perfect for small businesses starting their CX journey',
    features: [
      'Up to 1,000 customers',
      'Basic journey mapping',
      'Email support',
      'Standard analytics',
      'Basic personalization'
    ]
  },
  {
    name: 'Professional',
    price: '$399',
    period: '/month',
    description: 'Ideal for growing businesses with advanced CX needs',
    features: [
      'Up to 10,000 customers',
      'Advanced journey mapping',
      'Priority support',
      'Advanced analytics',
      'AI personalization',
      'Automated workflows',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$899',
    period: '/month',
    description: 'For large organizations requiring enterprise-grade CX capabilities',
    features: [
      'Unlimited customers',
      'Custom journey mapping',
      '24/7 support',
      'Custom analytics',
      'Advanced AI features',
      'Full API access',
      'Custom integrations',
      'Dedicated account manager'
    ]
  }
];

const integrations = [
  'Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Slack',
  'Microsoft Teams', 'Shopify', 'WooCommerce', 'Mailchimp', 'Klaviyo',
  'Google Analytics', 'Facebook Pixel', 'Twitter Ads', 'LinkedIn Ads'
];

export default function CustomerExperience() {
  return (
    <>
      <SEO 
        title="Customer Experience Platform | Micro SaaS | Zion Tech Group"
        description="Deliver exceptional customer experiences with our AI-powered platform. Journey mapping, personalization, feedback analytics, and automated support."
        canonical="https://ziontechgroup.com/micro-saas/customer-experience"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Customer <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Experience</span> Platform
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Deliver exceptional customer experiences with intelligent automation, 
                personalization, and analytics that drive loyalty and growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn-neon px-8 py-3 text-lg"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-outline px-8 py-3 text-lg"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful CX Features
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Everything you need to create memorable customer experiences that drive loyalty and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Customer Experience
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                See measurable improvements in customer satisfaction, loyalty, and business metrics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                      <span className="text-zion-slate-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">What You'll Achieve</h3>
                <div className="space-y-3 text-white/90">
                  <div className="flex items-center">
                    <Smile className="w-5 h-5 text-white mr-3" />
                    <span>Higher customer satisfaction scores</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-white mr-3" />
                    <span>Increased customer loyalty</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-white mr-3" />
                    <span>Improved conversion rates</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-white mr-3" />
                    <span>Better customer retention</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core CX features.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-zion-slate-dark/50 border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-zion-cyan shadow-lg shadow-zion-cyan/20' 
                      : 'border-zion-cyan/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                      <span className="text-zion-slate-light">{plan.period}</span>
                    </div>
                    <p className="text-zion-slate-light">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/20'
                        : 'bg-zion-cyan/10 text-zion-cyan border border-zion-cyan hover:bg-zion-cyan hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Seamless Integrations
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Connect with your existing tools and platforms. We integrate with the tools you already use.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6"
            >
              {integrations.map((integration, index) => (
                <div
                  key={integration}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg p-4 text-center hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <span className="text-zion-slate-light font-medium">{integration}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Customer Experience?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of businesses delivering exceptional customer experiences with our platform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/contact" 
                  className="btn-outline-white px-8 py-3 text-lg font-semibold"
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}