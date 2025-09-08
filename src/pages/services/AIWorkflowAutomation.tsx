import React from 'react';
import { SEO   } from '../../components/SEO';
import { motion   } from 'framer-motion';
import { Zap, 
  Brain, 
  Workflow, 
  Bot, 
  Clock, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Target,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Globe,
  ExternalLink
  } from 'lucide-react';

export default function AIWorkflowAutomation(...args: any[]): any {
  const features = [
    'Intelligent process mapping and optimization',
    'AI-powered decision trees and conditional logic',
    'Multi-platform integration (Slack, Teams, Zapier)',
    'Real-time workflow analytics and performance metrics',
    'Automated error handling and fallback procedures',
    'Custom workflow templates for common business processes',
    'Role-based access control and approval workflows',
    'Mobile workflow management and notifications'
  ];

  const tiers = [
    { 
      name: 'Starter', 
      price: '$199/mo', 
      details: ['Up to 10 workflows', '5 team members', 'Basic integrations', 'Email support'] 
    },
    { 
      name: 'Professional', 
      price: '$499/mo', 
      details: ['Up to 50 workflows', '25 team members', 'Advanced integrations', 'Priority support'] 
    },
    { 
      name: 'Enterprise', 
      price: '$1,299/mo', 
      details: ['Unlimited workflows', 'Unlimited team members', 'Custom integrations', '24/7 support'] 
    },
  ];

  const useCases = [
    'Customer onboarding automation',
    'Invoice processing and approval',
    'Employee onboarding and offboarding',
    'Project approval workflows',
    'Quality assurance processes',
    'Compliance documentation flows'
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Workflow className="w-4 h-4 mr-2" /> AI-Powered Business Process Automation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">AI Workflow Automation Platform</h1>
          <p className="text-blue-100 text-xl">Transform your business processes with intelligent automation that learns, adapts, and scales with your organization.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Revolutionary Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-gray-600">
              Built with enterprise-grade security, SOC 2 compliance, and 99.9% uptime guarantee.
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 bg-clip-text text-transparent">
                AI Workflow Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business processes with intelligent automation that learns, adapts, and optimizes 
              workflows for maximum efficiency and productivity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300">
                Get Started
              </Link>
              <Link to="/services-showcase" className="border border-orange-400 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Key Features</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our AI Workflow Automation platform combines artificial intelligence with advanced workflow 
            management to create intelligent, adaptive business processes.
          </p>
        </motion.div>

          <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-purple-500 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Automation Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial assessment to ongoing optimization, we provide end-to-end workflow automation services
            </p>
          </motion.div>

          <div className="grid md: anygrid-cols-2 gap-8">
            {services.map((service, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-purple-400 mb-6">{service.price}</div>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI workflow automation transforms different business functions
            </p>
          </motion.div>

          <div className="grid md: anygrid-cols-2 gap-8">
            {useCases.map((useCase, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <div className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3 text-green-400">
                      <TrendingUp className="w-5 h-5 flex-shrink-0" />
                      {benefit}
                    </li>))}
                </ul>
              </div>
            </motion.div>))}
        </div>
      </div>

      {/* Solutions by Department */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Solutions by Department</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored workflow automation solutions designed to address the unique challenges 
              and processes in different business departments.
            </p>
          </motion.div>

          <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index)   => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Business Benefits</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI Workflow Automation delivers measurable results that directly impact your operational 
            efficiency, cost structure, and competitive position.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (<motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-orange-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </motion.div>))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 border-t border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Technology Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge AI and workflow technologies to ensure scalability, 
              performance, and reliability for enterprise automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (<motion.div key={tech.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-orange-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </motion.div>))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI workflow experts help you implement intelligent automation that will 
            transform your business processes and drive operational excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300">
              Schedule Consultation
            </Link>
            <Link to="/case-studies" className="border border-orange-400 text-orange-400 px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
              View Case Studies
            </Link>
          </div>
        </motion.div>
      </div>
    </div>);
};
export default AIWorkflowAutomation;
