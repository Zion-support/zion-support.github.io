import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Clock,
  Shield,
  Globe,
  Database,
  PieChart,
  LineChart,
  Activity,
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
    title: 'AI-Powered Analytics',
    description: 'Advanced machine learning algorithms that automatically identify patterns and trends in your data.',
    benefits: ['Predictive insights', 'Automated anomaly detection', 'Intelligent recommendations']
  },
  {
    icon: BarChart3,
    title: 'Real-time Dashboards',
    description: 'Live monitoring dashboards that update in real-time with customizable widgets and KPIs.',
    benefits: ['Live data streaming', 'Customizable layouts', 'Mobile responsive design']
  },
  {
    icon: TrendingUp,
    title: 'Predictive Modeling',
    description: 'Forecast future trends and outcomes using historical data and advanced statistical models.',
    benefits: ['Trend forecasting', 'Risk assessment', 'Scenario planning']
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set, monitor, and track progress towards business objectives with automated alerts.',
    benefits: ['KPI monitoring', 'Progress tracking', 'Automated notifications']
  }
];

const useCases = [
  {
    title: 'Sales Performance',
    description: 'Track sales metrics, forecast revenue, and identify growth opportunities.',
    icon: TrendingUp,
    metrics: ['Conversion rates', 'Sales velocity', 'Pipeline analysis']
  },
  {
    title: 'Customer Analytics',
    description: 'Understand customer behavior, preferences, and lifetime value.',
    icon: Users,
    metrics: ['Customer segmentation', 'Churn prediction', 'LTV analysis']
  },
  {
    title: 'Financial Intelligence',
    description: 'Monitor financial health, cash flow, and profitability metrics.',
    icon: BarChart3,
    metrics: ['Cash flow analysis', 'Profit margins', 'Budget tracking']
  },
  {
    title: 'Operational Efficiency',
    description: 'Optimize processes, reduce costs, and improve productivity.',
    icon: Zap,
    metrics: ['Process optimization', 'Resource utilization', 'Performance metrics']
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small businesses getting started with AI analytics.',
    features: [
      'Up to 5 users',
      'Basic dashboards',
      'Standard reports',
      'Email support',
      'Data integration (3 sources)',
      'Basic AI insights'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$599',
    period: '/month',
    description: 'Ideal for growing businesses with advanced analytics needs.',
    features: [
      'Up to 25 users',
      'Advanced dashboards',
      'Custom reports',
      'Priority support',
      'Data integration (10 sources)',
      'Advanced AI insights',
      'Predictive analytics',
      'API access'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$1,299',
    period: '/month',
    description: 'For large organizations requiring enterprise-grade solutions.',
    features: [
      'Unlimited users',
      'Custom dashboards',
      'Advanced reporting',
      '24/7 support',
      'Unlimited data sources',
      'Full AI suite',
      'Custom ML models',
      'White-label options',
      'Advanced security',
      'Dedicated account manager'
    ],
    popular: false
  }
];

export default function AIBusinessIntelligence() {
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
              AI Business Intelligence
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Transform your business data into actionable insights with our AI-powered analytics platform. 
              Make data-driven decisions with confidence using advanced machine learning and predictive analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Start Free Trial
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
              Powerful Features for Modern Business
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with intuitive design 
              to deliver insights that drive business growth.
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
              Real-World Applications
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover how businesses across industries are leveraging AI-powered analytics 
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
              Start with our free trial and upgrade as you grow.
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
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI-powered analytics to make 
              smarter decisions and drive growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="btn-futuristic px-8 py-4 text-lg"
              >
                Start Free Trial
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