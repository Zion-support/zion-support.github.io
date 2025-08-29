import { motion } from "framer-motion";
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  TrendingUp, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Users, 
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Database,
  PieChart,
  LineChart,
  Activity,
  Lightbulb,
  Rocket,
  Award,
  Clock,
  DollarSign
} from 'lucide-react';

export default function AIBusinessIntelligence() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms that automatically identify patterns, trends, and insights from your data.',
      benefits: ['Predictive modeling', 'Anomaly detection', 'Pattern recognition', 'Automated insights']
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Dashboards',
      description: 'Interactive dashboards that provide real-time visibility into key business metrics and performance indicators.',
      benefits: ['Live data updates', 'Customizable views', 'Mobile responsive', 'Role-based access']
    },
    {
      icon: Target,
      title: 'Predictive Intelligence',
      description: 'Forecast future trends and outcomes using historical data and advanced statistical modeling techniques.',
      benefits: ['Demand forecasting', 'Risk assessment', 'Trend prediction', 'Scenario planning']
    },
    {
      icon: Zap,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically, saving time and ensuring consistency across your organization.',
      benefits: ['Scheduled reports', 'Custom templates', 'Multi-format export', 'Automated distribution']
    },
    {
      icon: Shield,
      title: 'Data Security & Compliance',
      description: 'Enterprise-grade security with built-in compliance features for GDPR, HIPAA, and other regulatory requirements.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance reporting']
    },
    {
      icon: Users,
      title: 'Collaborative Insights',
      description: 'Share insights and collaborate with team members through integrated communication and annotation tools.',
      benefits: ['Team collaboration', 'Comment threads', 'Shared workspaces', 'Version control']
    }
  ];

  const useCases = [
    {
      industry: 'Retail & E-commerce',
      title: 'Customer Behavior Analysis',
      description: 'Understand customer preferences, predict buying patterns, and optimize inventory management.',
      metrics: ['20% increase in conversion rates', '15% reduction in inventory costs', '30% improvement in customer retention']
    },
    {
      industry: 'Healthcare',
      title: 'Patient Outcome Prediction',
      description: 'Predict patient outcomes and optimize treatment plans using historical medical data and AI algorithms.',
      metrics: ['25% improvement in treatment success rates', '18% reduction in readmission rates', '22% faster diagnosis times']
    },
    {
      industry: 'Finance',
      title: 'Risk Assessment & Fraud Detection',
      description: 'Identify potential risks and detect fraudulent activities in real-time using advanced AI models.',
      metrics: ['40% reduction in fraud losses', '35% faster risk assessment', '28% improvement in compliance accuracy']
    },
    {
      industry: 'Manufacturing',
      title: 'Predictive Maintenance',
      description: 'Predict equipment failures and optimize maintenance schedules to minimize downtime and costs.',
      metrics: ['45% reduction in unplanned downtime', '30% decrease in maintenance costs', '25% increase in equipment efficiency']
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation and optimized resource allocation.',
      value: '25-40%'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Automate routine tasks and focus on strategic decision-making.',
      value: '60-80%'
    },
    {
      icon: Target,
      title: 'Improved Accuracy',
      description: 'Eliminate human errors and provide more reliable insights and predictions.',
      value: '90%+'
    },
    {
      icon: TrendingUp,
      title: 'Better Decisions',
      description: 'Make data-driven decisions with confidence using AI-powered insights.',
      value: '3x faster'
    }
  ];

  const technologies = [
    'Machine Learning Algorithms',
    'Natural Language Processing',
    'Computer Vision',
    'Deep Learning',
    'Predictive Analytics',
    'Data Mining',
    'Statistical Modeling',
    'Real-time Processing',
    'Cloud Computing',
    'Edge Computing',
    'Big Data Analytics',
    'Data Visualization'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Business Intelligence - Zion Tech Group"
        description="Transform your business with AI-powered business intelligence solutions. Get real-time insights, predictive analytics, and automated reporting to drive growth and efficiency."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Business Intelligence
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with our advanced AI-powered business intelligence solutions. 
              Get real-time analytics, predictive modeling, and automated reporting to drive informed decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center space-x-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">25-40%</div>
              <div className="text-slate-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">60-80%</div>
              <div className="text-slate-400">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">90%+</div>
              <div className="text-slate-400">Accuracy Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">3x</div>
              <div className="text-slate-400">Faster Decisions</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Modern Business
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI-powered business intelligence platform combines cutting-edge technology with intuitive design 
              to deliver actionable insights that drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Real-World
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Applications
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              See how our AI business intelligence solutions are transforming industries and driving measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Key Results:</h4>
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span className="text-slate-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Measurable
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Business Impact
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI business intelligence solutions deliver quantifiable results that directly impact your bottom line.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-4">{benefit.value}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Technologies
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built on the latest AI and machine learning technologies to deliver superior performance and accuracy.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="text-white font-semibold">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Business Intelligence?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that have already transformed their data into actionable insights 
              with our AI-powered business intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center space-x-2 border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <span>View Success Stories</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}