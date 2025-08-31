import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  TrendingUp,
  Shield,
  Users,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  BarChart3,
  Database,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  Cpu,
  Cloud,
  Lock,
  Globe,
  Target,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  FileText,
  Code,
  Settings,
  Monitor,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Sparkles,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  RefreshCw,
  Zap as ZapIcon,
  Globe2,
  Smartphone,
  Tablet,
  Laptop
} from 'lucide-react';

const AIDataAnalyticsPlatform: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms that automatically discover patterns and generate actionable insights',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend forecasting', 'Smart recommendations']
    },
    {
      icon: Database,
      title: 'Real-Time Data Processing',
      description: 'Process and analyze data in real-time with sub-second latency for instant decision making',
      benefits: ['Live dashboards', 'Streaming analytics', 'Instant alerts', 'Real-time KPIs']
    },
    {
      icon: ChartBar,
      title: 'Advanced Visualization',
      description: 'Interactive charts, graphs, and dashboards that make complex data easy to understand',
      benefits: ['Custom dashboards', 'Interactive charts', 'Mobile responsive', 'Export capabilities']
    },
    {
      icon: Search,
      title: 'Natural Language Query',
      description: 'Ask questions in plain English and get instant answers from your data',
      benefits: ['Voice queries', 'Smart suggestions', 'Context awareness', 'Multi-language support']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access control and data encryption',
      benefits: ['SOC2 compliance', 'GDPR ready', 'Data encryption', 'Audit trails']
    },
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Cloud-native architecture that scales automatically with your data growth',
      benefits: ['Auto-scaling', '99.9% uptime', 'Global CDN', 'Backup & recovery']
    }
  ];

  const analyticsTypes = [
    {
      name: 'Descriptive Analytics',
      description: 'Understand what happened in the past with comprehensive reporting',
      features: ['Historical data analysis', 'Performance metrics', 'Trend identification', 'Comparative analysis'],
      icon: BarChart3
    },
    {
      name: 'Diagnostic Analytics',
      description: 'Discover why things happened with root cause analysis',
      features: ['Drill-down capabilities', 'Correlation analysis', 'Impact assessment', 'Problem identification'],
      icon: Search
    },
    {
      name: 'Predictive Analytics',
      description: 'Forecast future outcomes using AI and machine learning',
      features: ['Forecasting models', 'Risk assessment', 'Opportunity identification', 'Scenario planning'],
      icon: TrendingUp
    },
    {
      name: 'Prescriptive Analytics',
      description: 'Get recommendations on what actions to take for optimal results',
      features: ['Action recommendations', 'Optimization suggestions', 'Resource allocation', 'Strategy planning'],
      icon: Lightbulb
    }
  ];

  const industrySolutions = [
    {
      industry: 'E-commerce & Retail',
      useCases: ['Customer behavior analysis', 'Inventory optimization', 'Price optimization', 'Marketing ROI'],
      metrics: ['Conversion rates', 'Customer lifetime value', 'Cart abandonment', 'Seasonal trends']
    },
    {
      industry: 'Healthcare',
      useCases: ['Patient outcome prediction', 'Resource optimization', 'Clinical decision support', 'Population health'],
      metrics: ['Patient satisfaction', 'Treatment effectiveness', 'Resource utilization', 'Health outcomes']
    },
    {
      industry: 'Finance & Banking',
      useCases: ['Risk assessment', 'Fraud detection', 'Customer segmentation', 'Portfolio optimization'],
      metrics: ['Risk scores', 'Fraud rates', 'Customer profitability', 'Portfolio performance']
    },
    {
      industry: 'Manufacturing',
      useCases: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production efficiency'],
      metrics: ['Equipment uptime', 'Quality scores', 'Supply chain costs', 'Production output']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses starting their analytics journey',
      features: [
        'Up to 100GB data storage',
        'Basic AI insights',
        'Standard dashboards',
        'Email support',
        '5 user licenses',
        'Basic integrations',
        'Monthly reports'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,500',
      period: '/month',
      description: 'Ideal for growing companies with advanced analytics needs',
      features: [
        'Up to 1TB data storage',
        'Advanced AI insights',
        'Custom dashboards',
        'Priority support',
        '25 user licenses',
        'Premium integrations',
        'Real-time analytics',
        'API access',
        'Advanced security'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large enterprises with unlimited analytics',
      features: [
        'Unlimited data storage',
        'Custom AI models',
        'White-label solutions',
        'Dedicated support team',
        'Unlimited user licenses',
        'Custom integrations',
        'On-premise option',
        'Advanced compliance'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'Head of Analytics',
      company: 'RetailTech Solutions',
      content: 'Zion Tech Group\'s AI analytics platform revolutionized our data strategy. We now have real-time insights that drive our business decisions.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Lisa Thompson',
      role: 'Data Scientist',
      company: 'HealthTech Innovations',
      content: 'The predictive analytics capabilities have transformed our patient care approach, improving outcomes by 35%.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Robert Martinez',
      role: 'CTO',
      company: 'FinTech Dynamics',
      content: 'Real-time fraud detection and risk assessment have saved us millions while improving customer trust.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Analytics</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI Data Analytics
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Platform</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your data into actionable insights with our AI-powered analytics platform. 
              Discover patterns, predict trends, and make data-driven decisions in real-time.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Insights</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Real-time</div>
              <div className="text-gray-300">Data Processing</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold text-cyan-400 mb-2">Unlimited</div>
              <div className="text-gray-300">Scalability</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Start Free Trial</span>
            </button>
            <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Schedule Demo</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with intuitive design to deliver 
              the most advanced data analytics solution available.
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Four Types of Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From understanding the past to predicting the future, our platform covers all aspects of data analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {analyticsTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center">
                    <type.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{type.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{type.description}</p>
                
                <div className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored analytics solutions designed for your industry's unique challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">{solution.industry}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-cyan-400 mb-3">Key Use Cases:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.useCases.map((useCase, useCaseIndex) => (
                      <div key={useCaseIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-cyan-400 mb-3">Key Metrics:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <BarChart3 className="w-4 h-4 text-cyan-400" />
                        <span>{metric}</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your analytics needs. All plans include our core AI analytics features.
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
                className={`relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-blue-600/10'
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-1 mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of satisfied customers who have transformed their business with AI analytics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your AI analytics journey today and unlock the power of your data in just 30 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Start Free Trial</span>
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Talk to Expert</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDataAnalyticsPlatform;