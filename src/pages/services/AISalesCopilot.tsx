import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import { 
  MessageSquare, 
  TrendingUp, 
  Target, 
  Zap, 
  Shield, 
  Users, 
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  BarChart3,
  Lightbulb,
  Rocket,
  Award,
  Clock,
  DollarSign,
  Headphones,
  Bot,
  Brain
} from 'lucide-react';

export default function AISalesCopilot() {
  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Lead Qualification',
      description: 'Automatically qualify leads using advanced AI algorithms that analyze behavior patterns and engagement signals.',
      benefits: ['Real-time scoring', 'Behavioral analysis', 'Intent detection', 'Automated prioritization']
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Conversation Management',
      description: 'AI-driven conversation flows that adapt to customer responses and guide sales representatives to optimal outcomes.',
      benefits: ['Dynamic scripting', 'Response suggestions', 'Objection handling', 'Conversation analytics']
    },
    {
      icon: Target,
      title: 'Predictive Sales Analytics',
      description: 'Forecast sales outcomes and identify opportunities using machine learning and historical data analysis.',
      benefits: ['Pipeline forecasting', 'Opportunity scoring', 'Risk assessment', 'Performance prediction']
    },
    {
      icon: Zap,
      title: 'Automated Follow-up Sequences',
      description: 'Intelligent follow-up campaigns that automatically engage prospects at optimal times with personalized content.',
      benefits: ['Smart timing', 'Personalized content', 'Multi-channel delivery', 'Engagement tracking']
    },
    {
      icon: Shield,
      title: 'Compliance & Risk Management',
      description: 'Built-in compliance features that ensure all sales activities meet regulatory requirements and company policies.',
      benefits: ['Regulatory compliance', 'Audit trails', 'Risk monitoring', 'Policy enforcement']
    },
    {
      icon: Users,
      title: 'Team Collaboration & Coaching',
      description: 'AI-powered insights and coaching recommendations to help sales teams improve performance and close more deals.',
      benefits: ['Performance analytics', 'Coaching recommendations', 'Best practice sharing', 'Team insights']
    }
  ];

  const useCases = [
    {
      industry: 'B2B Software',
      title: 'Enterprise Sales Automation',
      description: 'Streamline complex B2B sales processes with AI-powered lead scoring, qualification, and follow-up automation.',
      metrics: ['35% increase in conversion rates', '40% reduction in sales cycle time', '25% improvement in lead quality']
    },
    {
      industry: 'Financial Services',
      title: 'Compliant Sales Operations',
      description: 'Ensure regulatory compliance while automating sales processes and maintaining audit trails for all activities.',
      metrics: ['100% compliance adherence', '30% faster deal closure', '45% reduction in manual errors']
    },
    {
      industry: 'Healthcare',
      title: 'Patient Engagement & Retention',
      description: 'Improve patient engagement and retention through personalized communication and automated follow-up sequences.',
      metrics: ['28% increase in patient retention', '35% improvement in appointment adherence', '22% faster response times']
    },
    {
      industry: 'Real Estate',
      title: 'Property Sales Optimization',
      description: 'Optimize property sales through intelligent lead qualification, automated follow-ups, and market trend analysis.',
      metrics: ['32% increase in sales velocity', '38% improvement in lead conversion', '25% reduction in time to close']
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Revenue Growth',
      description: 'Increase sales revenue through better lead qualification and conversion optimization.',
      value: '25-40%'
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Automate routine tasks and focus on high-value sales activities.',
      value: '60-80%'
    },
    {
      icon: Target,
      title: 'Conversion Improvement',
      description: 'Improve lead-to-customer conversion rates with AI-powered insights and automation.',
      value: '30-50%'
    },
    {
      icon: TrendingUp,
      title: 'Sales Velocity',
      description: 'Accelerate sales cycles and close deals faster with intelligent automation.',
      value: '2-3x faster'
    }
  ];

  const capabilities = [
    'Lead Scoring & Qualification',
    'Conversation Intelligence',
    'Predictive Analytics',
    'Automated Follow-ups',
    'Multi-channel Communication',
    'Performance Analytics',
    'Compliance Monitoring',
    'Integration APIs',
    'Real-time Reporting',
    'Mobile Optimization',
    'Custom Workflows',
    'Advanced Analytics'
  ];

  const integrations = [
    'Salesforce',
    'HubSpot',
    'Pipedrive',
    'Microsoft Dynamics',
    'Zoho CRM',
    'Slack',
    'Microsoft Teams',
    'Gmail',
    'Outlook',
    'LinkedIn',
    'Twitter',
    'Facebook'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Sales Copilot - Zion Tech Group"
        description="Transform your sales operations with AI-powered automation, lead qualification, and intelligent conversation management. Boost conversion rates and accelerate sales cycles."
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
              <MessageSquare className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Sales
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Copilot
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Revolutionize your sales operations with AI-powered automation, intelligent lead qualification, 
              and conversation management. Close more deals faster with your AI sales assistant.
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
                <span>View Success Stories</span>
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
              <div className="text-slate-400">Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">60-80%</div>
              <div className="text-slate-400">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">30-50%</div>
              <div className="text-slate-400">Conversion Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2-3x</div>
              <div className="text-slate-400">Faster Sales</div>
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
              Intelligent Features for
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Modern Sales
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our AI Sales Copilot combines cutting-edge artificial intelligence with proven sales methodologies 
              to deliver unprecedented results for your sales team.
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
              Industry-Specific
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              See how our AI Sales Copilot is transforming sales operations across different industries 
              and delivering measurable results.
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
              Our AI Sales Copilot delivers quantifiable results that directly impact your sales performance and bottom line.
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

      {/* Capabilities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Capabilities
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Built with enterprise-grade technology to handle complex sales operations and deliver superior performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="text-white font-semibold">{capability}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Seamless
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Integrations
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Connect with your existing tools and workflows through our comprehensive integration ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="text-white font-semibold">{integration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}Sales Operations?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of sales teams that have already revolutionized their operations 
              with our AI Sales Copilot solution.
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

