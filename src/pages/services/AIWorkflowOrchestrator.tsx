import React from 'react';
import { SEO } from '../../components/SEO';
import { motion } from 'framer-motion';
import { Workflow, Brain, Zap, Target, CheckCircle, Clock, TrendingUp, Sparkles, Palette, Users, BarChart3, Shield, Globe, ArrowRight } from 'lucide-react';

const AIWorkflowOrchestrator: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Process Mapping',
      description: 'AI automatically discovers and maps your business processes'
    },
    {
      icon: Workflow,
      title: 'Smart Workflow Automation',
      description: 'Create complex workflows with natural language instructions'
    },
    {
      icon: Zap,
      title: 'Predictive Optimization',
      description: 'AI predicts bottlenecks and optimizes workflow performance'
    },
    {
      icon: Target,
      title: 'Adaptive Learning',
      description: 'Continuously improves workflows based on performance data'
    }
  ];

  const useCases = [
    {
      title: 'Customer Onboarding',
      description: 'Automate customer verification and account setup',
      icon: '👥'
    },
    {
      title: 'Invoice Processing',
      description: 'Automated invoice approval and payment workflows',
      icon: '📄'
    },
    {
      title: 'HR Operations',
      description: 'Streamline hiring, onboarding, and performance reviews',
      icon: '🏢'
    },
    {
      title: 'Sales Pipeline',
      description: 'Intelligent lead scoring and follow-up automation',
      icon: '📈'
    }
  ];

  const benefits = [
    'Reduce manual work by up to 80%',
    'Improve process efficiency by 60%',
    'Eliminate human errors in repetitive tasks',
    'Scale operations without additional staff',
    'Real-time process monitoring and analytics',
    'Compliance automation and audit trails'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: 299,
      period: 'month',
      features: [
        'Up to 10 workflows',
        'Basic AI optimization',
        'Standard integrations',
        'Email support',
        'Basic analytics'
      ]
    },
    {
      plan: 'Professional',
      price: 599,
      period: 'month',
      features: [
        'Up to 50 workflows',
        'Advanced AI optimization',
        'Premium integrations',
        'Priority support',
        'Advanced analytics',
        'Custom templates'
      ]
    },
    {
      plan: 'Enterprise',
      price: 1299,
      period: 'month',
      features: [
        'Unlimited workflows',
        'Custom AI models',
        'White-label options',
        'Dedicated support',
        'Custom integrations',
        'Advanced security'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Workflow Orchestrator - Zion Tech Group"
        description="Transform business processes with AI-powered workflow orchestration. Automate, optimize, and scale your operations with intelligent workflow management."
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-400/30 mb-6">
              <Workflow className="w-5 h-5 text-indigo-400 mr-2" />
              <span className="text-indigo-300 font-medium">AI Workflow Orchestrator</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Workflow
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600">
                Orchestrator
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform business processes with AI-powered workflow orchestration. Automate, 
              optimize, and scale your operations with intelligent workflow management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/20">
                Start Orchestrating
              </button>
              <button className="px-8 py-4 border border-indigo-400/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-400/10 transition-all duration-200">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Orchestration Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powered by advanced AI to transform workflow management
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-400/30 transition-all duration-200 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform any business process with intelligent automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-indigo-400/30 transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Workflow Orchestrator?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform workflow management with intelligent automation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to transform workflow management? Our AI orchestration experts can help you 
                set up intelligent process automation and optimization.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/20">
                Start Workflow Orchestration
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your orchestration needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800/50 border rounded-xl p-8 ${
                  plan.plan === 'Professional' 
                    ? 'border-indigo-400/50 bg-gradient-to-br from-indigo-500/10 to-purple-500/10' 
                    : 'border-slate-700/50'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${plan.price}
                    <span className="text-lg text-gray-400">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 ${
                  plan.plan === 'Professional'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 shadow-lg shadow-indigo-500/20'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Orchestrate Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform workflow management with AI-powered orchestration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-400 hover:to-purple-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-indigo-500/20">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-indigo-400/30 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-400/10 transition-all duration-200">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p>+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p>kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
                <a href="https://ziontechgroup.com" className="text-indigo-400 hover:text-indigo-300">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIWorkflowOrchestrator;
