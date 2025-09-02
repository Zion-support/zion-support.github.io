import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  Lightbulb, 
  Database, 
  Network, 
  Globe, 
  Clock, 
  Zap,
  Target,
  Cpu,
  FileText,
  Monitor,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Gauge,
  Calendar,
  Filter,
  Search,
  Download,
  Share2,
  Eye,
  Lock,
  Shield,
  Phone,
  Mail
} from 'lucide-react';

export default function AIBusinessIntelligencePlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Predictive Analytics',
      description: 'Advanced machine learning algorithms that forecast trends, identify patterns, and predict future outcomes with 95%+ accuracy',
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Predictive trend analysis',
        'Anomaly detection',
        'Forecasting models',
        'Risk assessment'
      ]
    },
    {
      icon: BarChart3,
      title: 'Real-Time Data Visualization',
      description: 'Interactive dashboards with real-time data streaming and customizable visualizations',
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Live data updates',
        'Custom dashboards',
        'Interactive charts',
        'Mobile responsive'
      ]
    },
    {
      icon: Zap,
      title: 'Automated Insights Generation',
      description: 'AI automatically generates actionable insights and recommendations from complex data sets',
      color: 'from-yellow-500 to-orange-500',
      benefits: [
        'Auto-generated reports',
        'Smart recommendations',
        'Natural language insights',
        'Trend identification'
      ]
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level security with end-to-end encryption, role-based access control, and compliance certifications',
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'SOC 2 Type II certified',
        'GDPR compliant',
        'End-to-end encryption',
        'Multi-factor authentication'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 users',
        'Basic analytics dashboard',
        'Standard reporting',
        'Email support',
        '5GB data storage',
        'Basic AI insights'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Custom dashboards',
        'Priority support',
        '50GB data storage',
        'AI-powered insights',
        'API access',
        'Advanced reporting'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited users',
        'Custom AI models',
        'White-label solution',
        '24/7 dedicated support',
        'Unlimited data storage',
        'Advanced security',
        'Custom integrations',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Financial Services',
      description: 'Risk assessment, fraud detection, and portfolio optimization',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Healthcare',
      description: 'Patient outcome prediction, resource optimization, and clinical analytics',
      icon: Activity,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Retail & E-commerce',
      description: 'Customer behavior analysis, inventory optimization, and sales forecasting',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization',
      icon: Cpu,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="AI Business Intelligence Platform - Zion Tech Group"
        description="Transform your business with AI-powered business intelligence. Real-time analytics, predictive insights, and automated reporting for data-driven decisions."
        keywords="AI business intelligence, predictive analytics, data visualization, business analytics, AI insights"
        canonicalUrl="https://ziontechgroup.com/services/ai-business-intelligence-platform"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Business Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Data into
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Actionable Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage the power of AI to unlock insights from your data. Our platform provides real-time analytics, 
              predictive modeling, and automated reporting to drive informed business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="https://ziontechgroup.com/request-quote"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Request Demo
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
              Powerful Features for Modern Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with intuitive design to deliver 
              actionable insights that drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                {feature.benefits && (
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform is designed to meet the unique needs of various industries, 
              providing specialized analytics and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${useCase.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your business needs. 
              Start with a free trial and upgrade as you grow.
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
                className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-500/50 bg-blue-500/5' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.name === 'Enterprise' ? 'https://ziontechgroup.com/contact' : 'https://ziontechgroup.com/request-quote'}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'bg-white/10 text-white hover:bg-white/20'
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-cyan-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have already transformed their data into actionable insights. 
              Start your free trial today and see the difference AI-powered analytics can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Phone</h4>
              <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Email</h4>
              <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Website</h4>
              <a href="https://ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
