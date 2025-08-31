import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Zap, 
  Shield, 
  Cloud, 
  Users,
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
  Factory
} from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AIBusinessIntelligence() {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Machine Learning',
      description: 'State-of-the-art ML algorithms that continuously learn and improve from your data'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Instant insights and dashboards updated in real-time for immediate decision-making'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast trends, identify opportunities, and predict potential risks before they occur'
    },
    {
      icon: Target,
      title: 'Intelligent Automation',
      description: 'Automate routine analysis tasks and focus on strategic decision-making'
    }
  ];

  const benefits = [
    'Faster decision-making with real-time insights',
    'Improved accuracy through machine learning',
    'Cost reduction through process automation',
    'Competitive advantage with predictive capabilities',
    'Enhanced customer understanding and personalization',
    'Streamlined operations and resource optimization'
  ];

  const useCases = [
    {
      industry: 'Retail & E-commerce',
      applications: ['Customer segmentation', 'Demand forecasting', 'Inventory optimization', 'Personalized marketing'],
      icon: ShoppingCart
    },
    {
      industry: 'Financial Services',
      applications: ['Risk assessment', 'Fraud detection', 'Portfolio optimization', 'Customer churn prediction'],
      icon: DollarSign
    },
    {
      industry: 'Healthcare',
      applications: ['Patient outcome prediction', 'Resource allocation', 'Treatment optimization', 'Disease prevention'],
      icon: Heart
    },
    {
      industry: 'Manufacturing',
      applications: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production planning'],
      icon: Factory
    }
  ];

  const technologies = [
    'TensorFlow & PyTorch',
    'Apache Spark',
    'AWS SageMaker',
    'Google Cloud AI',
    'Azure Machine Learning',
    'Tableau & Power BI',
    'Python & R',
    'Kubernetes & Docker'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
        'Basic ML model training',
        'Standard analytics dashboard',
        'Email support',
        'Monthly model updates'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,999',
      period: '/month',
      description: 'Ideal for growing companies with advanced analytics needs',
      features: [
        'Advanced ML algorithms',
        'Custom dashboard development',
        'Priority support',
        'Weekly model updates',
        'API access',
        'Custom integrations'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom ML model development',
        'Dedicated support team',
        'On-premise deployment',
        'Custom integrations',
        'SLA guarantees',
        'Training & consultation'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Business Intelligence - Zion Tech Group"
        description="Transform your business with AI-powered business intelligence, predictive analytics, and real-time insights. Get started with our comprehensive AI BI platform."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Business Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your data into actionable insights with our advanced AI and machine learning platform. 
              Make faster, smarter decisions with predictive analytics and real-time intelligence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Powerful AI Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Business Intelligence platform combines cutting-edge machine learning with intuitive 
              analytics to deliver unprecedented insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose AI Business Intelligence?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of AI-driven insights that drive real business results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 p-4"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Business Intelligence platform delivers value across diverse industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{useCase.industry}</h3>
                </div>
                <ul className="space-y-2">
                  {useCase.applications.map((application, appIndex) => (
                    <li key={appIndex} className="flex items-center space-x-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span>{application}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Built with Modern Technologies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages the latest AI and machine learning technologies for optimal performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 rounded-lg bg-slate-700/30 border border-slate-600/30"
              >
                <span className="text-cyan-400 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs. All plans include our core AI features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-500/50 shadow-lg shadow-cyan-500/25' 
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
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
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join hundreds of companies already leveraging AI-powered business intelligence 
              to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Today
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}