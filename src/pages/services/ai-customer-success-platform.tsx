import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Users, 
  TrendingUp, 
  Target, 
  Zap, 
  Shield, 
  Cloud, 
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Eye,
  Sparkles,
  Rocket,
  Globe,
  Clock,
  Award,
  Star,
  MessageCircle,
  Phone,
  Mail,
  ShoppingCart,
  DollarSign,
  Heart,
  Factory,
  BarChart3,
  Calendar,
  Mail as MailIcon,
  Share2,
  Monitor,
  PieChart,
  Headphones,
  LifeBuoy,
  MessageSquare,
  Activity,
  Target as TargetIcon,
  TrendingDown,
  AlertTriangle
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AICustomerSuccessPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Predict customer churn, identify upsell opportunities, and provide personalized recommendations'
    },
    {
      icon: Users,
      title: 'Customer Journey Mapping',
      description: 'Track and optimize every touchpoint in the customer lifecycle with intelligent automation'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast customer behavior and identify at-risk accounts before they churn'
    },
    {
      icon: Target,
      title: 'Personalized Engagement',
      description: 'Deliver tailored content and support based on individual customer needs and preferences'
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Support',
      description: 'AI-powered chatbots and automated responses for instant customer assistance'
    },
    {
      icon: BarChart3,
      title: 'Success Metrics',
      description: 'Comprehensive dashboards and reporting for measuring customer success KPIs'
    }
  ];

  const benefits = [
    'Reduce customer churn by up to 40% with predictive insights',
    'Increase customer lifetime value through personalized engagement',
    'Improve customer satisfaction scores with proactive support',
    'Automate routine customer success tasks for 10x efficiency',
    'Gain actionable insights into customer behavior and preferences',
    'Scale customer success operations without proportional headcount growth'
  ];

  const useCases = [
    {
      industry: 'SaaS & B2B',
      applications: ['User onboarding', 'Feature adoption', 'Renewal management', 'Expansion revenue'],
      icon: Cpu
    },
    {
      industry: 'E-commerce',
      applications: ['Customer retention', 'Loyalty programs', 'Personalized recommendations', 'Support automation'],
      icon: ShoppingCart
    },
    {
      industry: 'Financial Services',
      applications: ['Account monitoring', 'Risk assessment', 'Product recommendations', 'Compliance support'],
      icon: DollarSign
    },
    {
      industry: 'Healthcare',
      applications: ['Patient engagement', 'Treatment adherence', 'Appointment scheduling', 'Health monitoring'],
      icon: Heart
    }
  ];

  const technologies = [
    'Machine Learning Algorithms',
    'Natural Language Processing',
    'Predictive Analytics',
    'Customer Data Platforms',
    'Automation Workflows',
    'Real-time Analytics'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$399',
      period: '/month',
      description: 'Perfect for small businesses with up to 1,000 customers',
      features: [
        'Up to 1,000 customer profiles',
        'Basic AI insights and analytics',
        'Customer journey tracking',
        'Email automation workflows',
        'Basic support integration',
        'Standard reporting',
        'Email support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      plan: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with up to 10,000 customers',
      features: [
        'Up to 10,000 customer profiles',
        'Advanced AI insights and predictions',
        'Multi-channel engagement',
        'Advanced automation workflows',
        'Custom integrations',
        'Advanced analytics',
        'Priority support',
        'Success manager consultation'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$1,599',
      period: '/month',
      description: 'For large organizations with unlimited customers',
      features: [
        'Unlimited customer profiles',
        'Custom AI model training',
        'White-label solutions',
        'Advanced API access',
        'Custom reporting',
        'Dedicated success manager',
        'On-premise deployment options',
        'Custom training and onboarding'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="AI-Powered Customer Success Platform - Zion Tech Group"
        description="Transform customer success with AI-powered insights, automation, and predictive analytics. Reduce churn and increase customer lifetime value."
        keywords="AI customer success, customer success platform, churn prediction, customer engagement, predictive analytics, customer lifecycle"
        canonical="https://ziontechgroup.com/services/ai-customer-success-platform"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Customer Success
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your customer success operations with intelligent automation, predictive insights, 
              and personalized engagement that drives retention and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300">
                <MessageSquare className="mr-2 w-5 h-5" />
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Intelligent Customer Success Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to deliver exceptional customer experiences and drive business growth
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Proven results and measurable impact on your customer success metrics
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-lg text-slate-300">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how different industries leverage our platform for customer success excellence
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-slate-300">• {app}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-slate-800/50 p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-green-400 ring-2 ring-green-400/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.plan === 'Enterprise' ? '/contact' : '/contact'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Success?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Join leading companies using our AI-powered platform to deliver exceptional customer experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-slate-300 hover:text-green-400 transition-colors">
                +1 (302) 464-0950
              </a>
            </div>
            <div>
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-green-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div>
              <Globe className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-slate-300 hover:text-green-400 transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}