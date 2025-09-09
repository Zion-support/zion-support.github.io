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
  Award,
  Cpu,
  Eye,
  MessageSquare,
  Code,
  Network
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const aiServices = [
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Custom ML models for predictive analytics, pattern recognition, and automated decision-making.',
    features: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Model Training & Deployment']
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'AI-powered text analysis, sentiment analysis, and language understanding capabilities.',
    features: ['Text Classification', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development']
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Image and video analysis for object detection, recognition, and visual insights.',
    features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics']
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Forecast future trends and outcomes using historical data and AI algorithms.',
    features: ['Trend Forecasting', 'Risk Assessment', 'Demand Prediction', 'Performance Optimization']
  },
  {
    icon: Network,
    title: 'Neural Networks',
    description: 'Advanced neural network architectures for complex pattern recognition and learning.',
    features: ['Deep Neural Networks', 'Convolutional Networks', 'Recurrent Networks', 'Transfer Learning']
  },
  {
    icon: Code,
    title: 'AI Development',
    description: 'Custom AI solution development tailored to your specific business needs.',
    features: ['Custom Algorithms', 'API Development', 'Integration Services', 'Model Optimization']
  }
];

const analyticsFeatures = [
  {
    icon: PieChart,
    title: 'Data Visualization',
    description: 'Interactive charts, graphs, and dashboards that make complex data easy to understand.'
  },
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    description: 'Live dashboards and alerts for instant insights into your business performance.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Analytics',
    description: 'Track KPIs and business metrics with advanced analytics and reporting.'
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Monitor progress towards business objectives with automated goal tracking.'
  }
];

const benefits = [
  'Make data-driven decisions with confidence',
  'Automate repetitive tasks and processes',
  'Identify hidden opportunities and risks',
  'Improve operational efficiency',
  'Enhance customer understanding',
  'Scale operations with intelligent automation'
];

const pricing = [
  {
    name: 'Starter',
    price: '$2,999',
    period: '/month',
    description: 'Perfect for small businesses starting their AI journey',
    features: [
      'Basic ML models',
      'Standard analytics',
      'Email support',
      'Monthly reports',
      'Basic integrations'
    ]
  },
  {
    name: 'Professional',
    price: '$7,999',
    period: '/month',
    description: 'Ideal for growing businesses with advanced AI needs',
    features: [
      'Advanced ML models',
      'Custom analytics',
      'Priority support',
      'Real-time dashboards',
      'API access',
      'Custom integrations',
      'Advanced algorithms'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$19,999',
    period: '/month',
    description: 'For large organizations requiring enterprise-grade AI capabilities',
    features: [
      'Custom AI solutions',
      'Advanced analytics',
      '24/7 support',
      'Custom dashboards',
      'Full API access',
      'Custom development',
      'Dedicated team',
      'On-premise options'
    ]
  }
];

const useCases = [
  {
    industry: 'Healthcare',
    applications: ['Medical diagnosis', 'Patient monitoring', 'Drug discovery', 'Predictive health']
  },
  {
    industry: 'Finance',
    applications: ['Fraud detection', 'Risk assessment', 'Trading algorithms', 'Customer insights']
  },
  {
    industry: 'Retail',
    applications: ['Demand forecasting', 'Customer segmentation', 'Inventory optimization', 'Personalization']
  },
  {
    industry: 'Manufacturing',
    applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Process automation']
  }
];

export default function AIAnalytics() {
  return (
    <>
      <SEO 
        title="AI & Analytics Services | Zion Tech Group"
        description="Transform your business with AI-powered insights and intelligent automation. Machine learning, predictive analytics, NLP, and computer vision solutions."
        canonical="https://ziontechgroup.com/services/ai-analytics"
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
                AI & <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Analytics</span>
              </h1>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
                Transform your business with cutting-edge artificial intelligence and advanced analytics. 
                From machine learning to predictive insights, we help you unlock the full potential of your data.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn-neon px-8 py-3 text-lg"
                >
                  Get Started
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

        {/* AI Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Solutions
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Comprehensive AI services designed to solve complex business challenges and drive innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-zion-cyan mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-dark/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Analytics Capabilities
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Powerful analytics tools that turn your data into actionable insights and strategic decisions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
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

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                See how AI and analytics are transforming industries across the board.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.industry}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.applications.map((application, idx) => (
                      <li key={idx} className="flex items-start text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                        {application}
                      </li>
                    ))}
                  </ul>
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
                Why Choose AI & Analytics?
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Experience the transformative power of intelligent technology that adapts to your business needs.
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
                    <Zap className="w-5 h-5 text-white mr-3" />
                    <span>Faster decision-making</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-white mr-3" />
                    <span>Improved accuracy</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-white mr-3" />
                    <span>Global scalability</span>
                  </div>
                  <div className="flex items-center">
                    <Database className="w-5 h-5 text-white mr-3" />
                    <span>Data-driven insights</span>
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
                Investment Plans
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI and analytics features.
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
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join the AI revolution and transform your business with intelligent automation and insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="btn-white px-8 py-3 text-lg font-semibold"
                >
                  Get Started
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