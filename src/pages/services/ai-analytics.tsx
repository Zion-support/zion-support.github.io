import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Clock,
  Shield,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Eye,
  Search,
  Filter,
  Download,
  Share2,
  Settings,
  Play,
  Pause,
  RefreshCw
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Machine Learning Models',
    description: 'Custom ML models trained on your data for predictive analytics and insights.',
    benefits: ['Predictive modeling', 'Pattern recognition', 'Anomaly detection', 'Recommendation engines']
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Live dashboards and real-time data processing for instant decision-making.',
    benefits: ['Live data streaming', 'Real-time alerts', 'Instant insights', 'Performance monitoring']
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable business insights and strategic recommendations.',
    benefits: ['Data visualization', 'KPI tracking', 'Trend analysis', 'Strategic planning']
  },
  {
    icon: Target,
    title: 'Predictive Analytics',
    description: 'Forecast future trends and outcomes using advanced statistical models.',
    benefits: ['Demand forecasting', 'Risk assessment', 'Customer behavior', 'Market trends']
  }
];

const useCases = [
  {
    title: 'Financial Services',
    description: 'Risk assessment, fraud detection, and portfolio optimization.',
    icon: Shield,
    metrics: ['Risk modeling', 'Fraud detection', 'Portfolio optimization', 'Market analysis']
  },
  {
    title: 'Healthcare',
    description: 'Patient diagnosis, treatment optimization, and resource planning.',
    icon: Users,
    metrics: ['Diagnostic support', 'Treatment planning', 'Resource optimization', 'Patient outcomes']
  },
  {
    title: 'Retail & E-commerce',
    description: 'Customer segmentation, demand forecasting, and inventory optimization.',
    icon: Globe,
    metrics: ['Customer insights', 'Demand forecasting', 'Inventory optimization', 'Personalization']
  },
  {
    title: 'Manufacturing',
    description: 'Predictive maintenance, quality control, and supply chain optimization.',
    icon: Cpu,
    metrics: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Efficiency gains']
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,999',
    period: '/month',
    description: 'Perfect for small businesses starting their AI analytics journey.',
    features: [
      'Basic ML models',
      'Standard dashboards',
      'Data integration',
      'Email support',
      'Monthly reports',
      'Basic training'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$7,999',
    period: '/month',
    description: 'Ideal for growing businesses with advanced analytics needs.',
    features: [
      'Advanced ML models',
      'Custom dashboards',
      'Real-time analytics',
      'Priority support',
      'Advanced training',
      'API access',
      'Custom integrations',
      'Performance optimization'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$19,999',
    period: '/month',
    description: 'For large organizations requiring enterprise-grade AI solutions.',
    features: [
      'Custom ML models',
      'Advanced analytics',
      '24/7 support',
      'Custom development',
      'Advanced security',
      'White-label options',
      'Dedicated team',
      'Custom training'
    ],
    popular: false
  }
];

export default function AIAnalytics() {
  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mx-auto mb-6">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              AI Analytics
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business with AI-powered analytics and machine learning. 
              Unlock insights from your data and make data-driven decisions with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="btn-neon px-8 py-4 text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Analytics Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our comprehensive AI analytics platform combines cutting-edge machine learning 
              with powerful visualization tools to deliver actionable insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how businesses across industries are leveraging AI analytics 
              to drive growth and operational excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">{useCase.title}</h3>
                <p className="text-zion-slate-light mb-4 text-center text-sm">{useCase.description}</p>
                
                <div className="space-y-2">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="text-xs text-zion-cyan text-center">
                      • {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs. 
              Start your AI analytics journey today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-slate-dark/50 border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-zion-cyan/50 bg-zion-cyan/5' 
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
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light text-sm">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                      : 'bg-zion-cyan/10 text-zion-cyan border border-zion-cyan/30 hover:bg-zion-cyan/20'
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
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock AI Analytics?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI analytics platform to 
              make data-driven decisions and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Get Started
              </Link>
              <Link
                to="/demo"
                className="btn-neon px-8 py-4 text-lg"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}