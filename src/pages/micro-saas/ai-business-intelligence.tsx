import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Zap,
  Shield,
  Globe,
  Database,
  PieChart,
  LineChart,
  Activity,
  Target,
  Award
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analytics',
    description: 'Advanced machine learning algorithms that automatically identify patterns and trends in your data.'
  },
  {
    icon: BarChart3,
    title: 'Real-time Dashboards',
    description: 'Live, interactive dashboards that update automatically with real-time data from all your sources.'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Insights',
    description: 'Forecast future trends and outcomes using historical data and AI-driven predictive modeling.'
  },
  {
    icon: Users,
    title: 'Custom Reports',
    description: 'Generate personalized reports tailored to different stakeholders and business needs.'
  },
  {
    icon: PieChart,
    title: 'Data Visualization',
    description: 'Beautiful, interactive charts and graphs that make complex data easy to understand.'
  },
  {
    icon: Activity,
    title: 'Performance Monitoring',
    description: 'Track key performance indicators and business metrics in real-time.'
  }
];

const benefits = [
  'Make data-driven decisions with confidence',
  'Identify hidden opportunities and risks',
  'Improve operational efficiency',
  'Enhance customer understanding',
  'Reduce manual reporting time',
  'Scale analytics as your business grows'
];

const pricing = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small businesses getting started with analytics',
    features: [
      'Up to 5 data sources',
      'Basic dashboards',
      'Standard reports',
      'Email support',
      'Monthly data refresh'
    ]
  },
  {
    name: 'Professional',
    price: '$599',
    period: '/month',
    description: 'Ideal for growing businesses with advanced analytics needs',
    features: [
      'Up to 20 data sources',
      'Advanced dashboards',
      'Custom reports',
      'Priority support',
      'Real-time data updates',
      'API access',
      'Advanced analytics'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$1,299',
    period: '/month',
    description: 'For large organizations requiring enterprise-grade analytics',
    features: [
      'Unlimited data sources',
      'Custom dashboards',
      'Advanced reporting',
      '24/7 support',
      'Real-time streaming',
      'Full API access',
      'Custom integrations',
      'Dedicated account manager'
    ]
  }
];

const integrations = [
  'Salesforce', 'HubSpot', 'Google Analytics', 'Stripe', 'Shopify',
  'MySQL', 'PostgreSQL', 'MongoDB', 'AWS', 'Google Cloud',
  'Microsoft Azure', 'Slack', 'Microsoft Teams', 'Zapier'
];

export default function AIBusinessIntelligence() {
  return (
    <>
      <SEO 
        title="AI Business Intelligence | Micro SaaS | Zion Tech Group"
        description="Transform your business data into actionable insights with our AI-powered business intelligence platform. Real-time analytics, predictive insights, and custom reporting."
        canonical="https://ziontechgroup.com/micro-saas/ai-business-intelligence"
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
                <Brain className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Business <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Intelligence</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Transform your business data into actionable insights with AI-powered analytics, 
                real-time dashboards, and predictive intelligence that drives growth.
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
                Powerful Features for Modern Businesses
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Everything you need to turn data into decisions, insights into actions, and information into innovation.
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
                Why Choose AI Business Intelligence?
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Experience the power of intelligent analytics that adapts to your business needs.
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
                <h3 className="text-2xl font-semibold text-white mb-4">What You'll Get</h3>
                <div className="space-y-3 text-white/90">
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-white mr-3" />
                    <span>Deploy in under 24 hours</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-white mr-3" />
                    <span>Enterprise-grade security</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-white mr-3" />
                    <span>Global cloud infrastructure</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="w-5 h-5 text-white mr-3" />
                    <span>Unlimited data storage</span>
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
                Choose the plan that fits your business needs. All plans include our core features.
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
                Ready to Unlock Your Data's Potential?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using AI-powered insights to drive growth and innovation.
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