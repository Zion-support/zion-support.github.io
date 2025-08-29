import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Heart, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Star,
  BarChart3,
  Activity,
  Cpu,
  Database,
  Network,
  Cloud,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Server,
  BarChart,
  PieChart,
  LineChart,
  Target,
  Award,
  Rocket,
  Lightbulb,
  Cog,
  Settings,
  Eye,
  EyeOff,
  Download,
  Upload,
  RefreshCw,
  AlertCircle,
  Info,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Zap,
  Brain,
  MessageSquare,
  UserCheck,
  UserX,
  UserPlus,
  Activity,
  Bell,
  Calendar,
  CheckSquare,
  AlertTriangle,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh
} from 'lucide-react';

export default function AICustomerSuccessPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Churn Prevention',
      description: 'AI-powered algorithms that identify at-risk customers before they churn',
      benefits: ['Reduces churn by 40%', 'Early warning system', 'Proactive intervention', 'Customer health scoring']
    },
    {
      icon: Heart,
      title: 'Intelligent Customer Engagement',
      description: 'Automated, personalized engagement strategies that increase customer satisfaction',
      benefits: ['Improves NPS by 35%', 'Personalized touchpoints', 'Automated follow-ups', 'Multi-channel engagement']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics & Insights',
      description: 'Comprehensive customer success metrics and actionable insights',
      benefits: ['Real-time dashboards', 'Predictive analytics', 'ROI tracking', 'Performance benchmarking']
    },
    {
      icon: Users,
      title: 'Automated Success Management',
      description: 'Streamlined customer onboarding, training, and success planning',
      benefits: ['Faster time-to-value', 'Reduced manual work', 'Consistent processes', 'Scalable operations']
    }
  ];

  const useCases = [
    {
      industry: 'SaaS & Technology',
      description: 'Manage customer success for software products with automated onboarding and support',
      benefits: ['50% faster onboarding', '30% higher adoption', 'Reduced support tickets', 'Increased renewals']
    },
    {
      industry: 'Financial Services',
      description: 'Enhance customer relationships with AI-powered financial advisory and support',
      benefits: ['Improved customer retention', 'Higher satisfaction scores', 'Proactive service', 'Better compliance']
    },
    {
      industry: 'Healthcare',
      description: 'Optimize patient care coordination and healthcare provider success',
      benefits: ['Better patient outcomes', 'Improved care coordination', 'Reduced wait times', 'Enhanced satisfaction']
    },
    {
      industry: 'Retail & E-commerce',
      description: 'Boost customer loyalty and repeat purchases with intelligent engagement',
      benefits: ['Higher customer lifetime value', 'Increased repeat purchases', 'Better brand loyalty', 'Improved reviews']
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams and basic customer success needs',
      features: [
        'Up to 500 customers',
        'Basic churn prediction',
        'Standard analytics',
        'Email support',
        '5 team members',
        'Core integrations'
      ],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses with advanced customer success requirements',
      features: [
        'Up to 2,000 customers',
        'Advanced AI predictions',
        'Real-time analytics',
        'Priority support',
        'Unlimited team members',
        'Custom integrations',
        'Advanced reporting'
      ],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations requiring enterprise-grade customer success management',
      features: [
        'Unlimited customers',
        'Custom AI models',
        'Advanced analytics & ML',
        '24/7 dedicated support',
        'Custom deployment',
        'SLA guarantees',
        'On-premise option',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const technicalSpecs = [
    {
      category: 'AI & Machine Learning',
      specs: [
        'GPT-4 integration for natural language processing',
        'Custom ML models for churn prediction',
        'Real-time customer health scoring',
        'Behavioral pattern recognition'
      ]
    },
    {
      category: 'Integration & APIs',
      specs: [
        'RESTful APIs with comprehensive documentation',
        'Webhook support for real-time updates',
        'Pre-built connectors for 50+ CRM systems',
        'Custom integration development'
      ]
    },
    {
      category: 'Security & Compliance',
      specs: [
        'SOC 2 Type II compliance',
        'End-to-end encryption',
        'Role-based access control (RBAC)',
        'GDPR and HIPAA compliance'
      ]
    },
    {
      category: 'Performance & Scalability',
      specs: [
        '99.9% uptime SLA',
        'Auto-scaling infrastructure',
        'Global CDN for fast access',
        'Real-time processing capabilities'
      ]
    }
  ];

  const keyMetrics = [
    {
      metric: 'Customer Health Score',
      description: 'AI-powered scoring system that predicts customer success probability',
      icon: Heart,
      color: 'from-green-500 to-emerald-600'
    },
    {
      metric: 'Churn Risk Prediction',
      description: 'Advanced algorithms that identify at-risk customers before they leave',
      icon: AlertTriangle,
      color: 'from-red-500 to-orange-600'
    },
    {
      metric: 'Engagement Score',
      description: 'Comprehensive measurement of customer engagement and satisfaction',
      icon: Users,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      metric: 'Success Metrics',
      description: 'Track key performance indicators and customer success outcomes',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="AI Customer Success Platform - Zion Tech Group"
        description="Transform customer success with AI-powered engagement, churn prevention, and automated success management. Boost retention and satisfaction."
        keywords="AI customer success, churn prevention, customer engagement, success management, customer retention, AI platform"
        canonical="https://ziontechgroup.com/services/ai-customer-success-platform"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-800 via-slate-900 to-rose-900"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-rose-500 to-red-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI Customer Success Platform
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Revolutionize customer success with AI-powered engagement, predictive churn prevention, and automated success management
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#pricing" 
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
            >
              View Pricing
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-pink-500 text-pink-400 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              Get Started
            </a>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
              Key Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Powerful capabilities that transform how you manage customer success and engagement
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 mb-6">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              Key Metrics & Insights
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Track and optimize the most important customer success metrics with AI-powered insights
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 h-full text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-pink-400 transition-colors duration-300">
                    {metric.metric}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              Industry Use Cases
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how different industries leverage our AI Customer Success Platform to achieve remarkable results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>
                  <p className="text-slate-300 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-300">
                        <TrendingUp className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
              Pricing Plans
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the perfect plan for your customer success needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-pink-400">{plan.price}</span>
                      <span className="text-slate-400">{plan.period}</span>
                    </div>
                    <p className="text-slate-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="/contact" 
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
              Technical Specifications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Enterprise-grade technology stack designed for reliability, security, and performance
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={spec.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-pink-500 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-pink-400 transition-colors duration-300">
                    {spec.category}
                  </h3>
                  <div className="space-y-3">
                    {spec.specs.map((item, idx) => (
                      <div key={idx} className="flex items-start text-sm text-slate-300">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-rose-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Transform Customer Success?
          </motion.h2>
          <motion.p 
            className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Boost customer retention, satisfaction, and success with AI-powered engagement and insights
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-pink-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
            </a>
            <a 
              href="#pricing" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300"
            >
              View Pricing
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Need Help Getting Started?</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-pink-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-pink-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-pink-400" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}