import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  TrendingUp, 
  MessageCircle, 
  BarChart3, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Lightbulb,
  Target,
  Activity,
  Eye,
  Search,
  Download,
  Share2,
  Settings,
  Bell,
  Clock,
  DollarSign,
  Brain,
  Globe,
  Lock,
  Network,
  Server,
  Code,
  Rocket,
  Sparkles,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheck2,
  UserPlus2,
  UserMinus2,
  UserX2,
  UserCog2,
  UserEdit2,
  UserSearch2,
  UserVoice2,
  UserHeart2,
  UserStar2
} from 'lucide-react';

const AICustomerSuccessPlatform: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Customer Insights',
      description: 'Advanced analytics and machine learning to predict customer behavior and churn risk',
      icon: Brain,
      benefits: ['Predictive analytics', 'Churn prediction', 'Customer segmentation', 'Behavioral analysis']
    },
    {
      title: 'Automated Engagement Workflows',
      description: 'Intelligent automation for customer onboarding, success milestones, and retention campaigns',
      icon: Zap,
      benefits: ['Smart onboarding', 'Milestone tracking', 'Automated check-ins', 'Personalized touchpoints']
    },
    {
      title: 'Real-time Health Scoring',
      description: 'Dynamic customer health scores based on usage patterns, engagement, and satisfaction metrics',
      icon: Activity,
      benefits: ['Real-time monitoring', 'Risk assessment', 'Success indicators', 'Proactive alerts']
    },
    {
      title: 'Intelligent Success Playbooks',
      description: 'AI-driven recommendations for customer success strategies and best practices',
      icon: BookOpen,
      benefits: ['Best practice guides', 'Strategy recommendations', 'Success templates', 'Performance optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 100 customers',
        'Basic AI insights',
        'Standard health scoring',
        'Email support',
        'Basic automation',
        'Monthly reports'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 1,000 customers',
        'Advanced AI insights',
        'Custom health scoring',
        'Priority support',
        'Advanced automation',
        'Real-time reporting',
        'API access',
        'Custom integrations'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited customers',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Custom workflows',
        'Advanced compliance',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      industry: 'SaaS & Technology',
      applications: ['User onboarding', 'Feature adoption', 'Subscription retention', 'Customer expansion'],
      icon: Code
    },
    {
      industry: 'E-commerce & Retail',
      applications: ['Customer loyalty', 'Purchase patterns', 'Support optimization', 'Retention campaigns'],
      icon: ShoppingCart
    },
    {
      industry: 'Financial Services',
      applications: ['Account management', 'Service optimization', 'Risk assessment', 'Customer satisfaction'],
      icon: DollarSign
    },
    {
      industry: 'Healthcare',
      applications: ['Patient engagement', 'Care coordination', 'Outcome tracking', 'Satisfaction monitoring'],
      icon: Heart
    }
  ];

  const successMetrics = [
    {
      metric: 'Customer Retention Rate',
      description: 'Improve customer retention by up to 40% with proactive engagement',
      icon: TrendingUp,
      improvement: '+40%'
    },
    {
      metric: 'Customer Lifetime Value',
      description: 'Increase CLV by up to 60% through better success strategies',
      icon: DollarSign,
      improvement: '+60%'
    },
    {
      metric: 'Time to Value',
      description: 'Reduce time to value by up to 50% with optimized onboarding',
      icon: Clock,
      improvement: '-50%'
    },
    {
      metric: 'Customer Satisfaction',
      description: 'Boost NPS scores by up to 35% with personalized experiences',
      icon: Star,
      improvement: '+35%'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              AI-Powered Customer Success
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Customer Success with
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {' '}AI Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage artificial intelligence to predict customer needs, automate success workflows, 
              and drive unprecedented customer retention and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
              >
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
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
              Intelligent Customer Success Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with proven customer success 
              methodologies to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
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

      {/* Success Metrics Section */}
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
              Proven Results & Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how our AI-powered customer success platform delivers measurable improvements 
              across key business metrics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-green-400">{metric.improvement}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{metric.metric}</h3>
                <p className="text-gray-300">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Success Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Flexible pricing options designed to scale with your customer success needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-lg border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-500 bg-green-500/10' 
                    : 'border-white/10 hover:border-white/20'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}>
                  {plan.cta}
                </button>
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
              Discover how leading organizations across industries leverage our platform 
              to drive customer success and business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="text-sm text-gray-300 flex items-center">
                      <ArrowRight className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
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
              Ready to Transform Your Customer Success?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have already revolutionized their customer success 
              with our AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Success Team
              </a>
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
              >
                <Video className="w-5 h-5 mr-2" />
                Schedule Success Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 302 464 0950</p>
            </div>
            <div>
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerSuccessPlatform;