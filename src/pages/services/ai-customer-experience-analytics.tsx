import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Zap, 
  Eye, 
  MessageCircle, 
  CheckCircle,
  ArrowRight,
  Heart,
  Star,
  Globe,
  Phone,
  Mail,
  MapPin,
  Building,
  Target,
  Rocket,
  Sparkles,
  Cpu,
  Network,
  Database,
  Shield,
  Lock,
  Clock,
  Award
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AICustomerExperienceAnalytics() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Sentiment Analysis',
      description: 'Advanced NLP algorithms that understand customer emotions and intent across all channels'
    },
    {
      icon: Eye,
      title: 'Real-time Customer Journey Tracking',
      description: 'Monitor customer interactions across touchpoints with predictive behavior modeling'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast customer churn, lifetime value, and satisfaction scores using machine learning'
    },
    {
      icon: MessageCircle,
      title: 'Omnichannel Analytics',
      description: 'Unified view of customer experience across web, mobile, social, and support channels'
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description: 'AI-generated recommendations for improving customer satisfaction and retention'
    },
    {
      icon: Target,
      title: 'Personalization Engine',
      description: 'Dynamic content and experience optimization based on real-time customer behavior'
    }
  ];

  const benefits = [
    'Increase customer satisfaction by 35%',
    'Reduce customer churn by 25%',
    'Improve conversion rates by 40%',
    'Boost customer lifetime value by 30%',
    'Reduce support costs by 20%',
    'Accelerate product-market fit discovery'
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      applications: ['Customer journey optimization', 'Personalized recommendations', 'Cart abandonment analysis', 'Customer segmentation'],
      icon: Globe
    },
    {
      industry: 'SaaS',
      applications: ['User onboarding optimization', 'Feature adoption tracking', 'Customer success metrics', 'Product usage analytics'],
      icon: Cpu
    },
    {
      industry: 'Financial Services',
      applications: ['Customer satisfaction monitoring', 'Service quality metrics', 'Compliance tracking', 'Risk assessment'],
      icon: Shield
    },
    {
      industry: 'Healthcare',
      applications: ['Patient experience tracking', 'Service quality metrics', 'Compliance monitoring', 'Outcome analysis'],
      icon: Heart
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses starting their CX journey',
      price: { monthly: 299, annual: 2990 },
      features: [
        'Up to 10,000 customer interactions/month',
        'Basic sentiment analysis',
        'Customer journey mapping',
        'Email support',
        'Standard integrations',
        'Monthly reports'
      ],
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      cta: 'Start Free Trial',
      link: '/contact'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing companies with advanced CX needs',
      price: { monthly: 799, annual: 7990 },
      features: [
        'Up to 100,000 interactions/month',
        'Advanced AI analytics',
        'Predictive modeling',
        'Priority support',
        'Custom integrations',
        'Real-time dashboards',
        'API access',
        'Training sessions'
      ],
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      cta: 'Get Started',
      link: '/contact'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex CX requirements',
      price: { monthly: 1999, annual: 19990 },
      features: [
        'Unlimited interactions',
        'Custom AI models',
        'Dedicated CX team',
        '24/7 priority support',
        'On-premise deployment',
        'White-label solutions',
        'SLA guarantees',
        'Compliance reporting'
      ],
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      popular: false,
      cta: 'Contact Sales',
      link: '/contact'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEO 
        title="AI-Powered Customer Experience Analytics | Zion Tech Group"
        description="Transform customer experience with AI-powered analytics. Track customer journeys, analyze sentiment, and optimize engagement across all channels."
        keywords="customer experience analytics, AI analytics, sentiment analysis, customer journey, predictive analytics, CX optimization"
        canonical="https://ziontechgroup.com/services/ai-customer-experience-analytics"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Customer Experience Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Customer 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Experience Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform customer experience with advanced AI analytics. Track customer journeys, 
              analyze sentiment, and optimize engagement across all channels in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/20 transition-all duration-200"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
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
              Advanced CX Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive customer experience analysis powered by cutting-edge AI technology
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
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your customer experience with data-driven insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">{benefit}</span>
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
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trusted by organizations across industries for their CX analytics needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <ul className="space-y-2 text-gray-300">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="text-sm">{app}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your customer experience analytics needs
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
                className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-blue-500 bg-gradient-to-br from-blue-500/20 to-cyan-500/20' 
                    : 'border-white/10'
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
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price.monthly}
                    <span className="text-lg text-gray-300 font-normal">/month</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    ${plan.price.annual} billed annually (save 17%)
                  </p>
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
                  to={plan.link}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
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
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading companies using AI to deliver exceptional customer experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-300 font-semibold rounded-lg hover:bg-blue-500/20 transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about our customer experience analytics? Our team is here to help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}