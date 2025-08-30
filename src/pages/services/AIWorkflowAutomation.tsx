import React from 'react.ts';
import { SEO  } from '../../components/SEO';
import { motion  } from 'framer-motion.ts';
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
 } from 'lucide-react.ts';

export default function AIWorkflowAutomation(...args[]):  {
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

  const services = [
    {
      title: 'Workflow Assessment & Design',
      description: 'Comprehensive analysis of existing processes and custom workflow design',
      price: 'From $3,500',
      features['Process mapping', 'Bottleneck identification', 'Automation strategy', 'ROI analysis']
    },
    {
      title: 'AI Workflow Implementation',
      description: 'Full implementation of AI-powered workflow automation',
      price: 'From $8,000',
      features['Custom workflow design', 'AI model training', 'Integration setup', 'User training']
    },
    {
      title: 'Workflow Optimization',
      description: 'Continuous improvement and optimization of existing workflows',
      price: 'From $2,500/month',
      features['Performance monitoring', 'AI model updates', 'Process refinement', 'Analytics reports']
    },
    {
      title: 'Enterprise Workflow Suite',
      description: 'Complete enterprise workflow management with advanced AI capabilities',
      price: 'From $15,000',
      features['Multi-department workflows', 'Advanced AI models', 'Custom integrations', '24/7 support']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Automate ticket routing, response generation, and escalation processes',
      benefits['Reduce response time by 70%', 'Improve customer satisfaction', 'Handle 5x more tickets']
    },
    {
      title: 'Sales Process Automation',
      description: 'Automate lead qualification, follow-up scheduling, and proposal generation',
      benefits['Increase conversion rates by 40%', 'Reduce manual tasks by 80%', 'Improve sales efficiency']
    },
    {
      title: 'HR Process Automation',
      description: 'Streamline recruitment, onboarding, and employee management workflows',
      benefits['Reduce hiring time by 50%', 'Improve compliance', 'Enhance employee experience']
    },
    {
      title: 'Financial Process Automation',
      description: 'Automate invoice processing, expense approval, and financial reporting',
      benefits['Reduce processing time by 60%', 'Improve accuracy', 'Enhance compliance']
    }
  ];

  const technologies = [
    { name: 'Machine Learning', description: 'Advanced ML algorithms for process optimization' },
    { name: 'Natural Language Processing', description: 'Intelligent document and text processing' },
    { name: 'Computer Vision', description: 'Automated image and document analysis' },
    { name: 'Predictive Analytics', description: 'Forecast process bottlenecks and optimization opportunities' },
    { name: 'API Integration', description: 'Seamless integration with existing business systems' },
    { name: 'Cloud Infrastructure', description: 'Scalable and secure cloud-based automation' }
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
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {tiers.map((t) => (
                <div key={t.name} className="rounded-lg p-4 border border-gray-200 hover:border-blue-300 transition-colors">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
                View Full Pricing <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-gray-300 rounded-lg hover:border-blue-400 transition-colors inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {['AI-powered optimization', 'Real-time analytics', 'Multi-platform support'].map((t) => (
            <div key={t} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Brain className="w-6 h-6 text-blue-600 mb-3" />
              <div className="text-gray-900 font-semibold">{t}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Use Cases</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center p-4 bg-white rounded-lg border border-gray-200">
                <Zap className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">{useCase}</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Workflow Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business processes with intelligent automation that learns, adapts, and optimizes workflows in real-time
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI workflow automation platform combines cutting-edge technology with intuitive design to deliver unprecedented efficiency gains
            </p>
          </motion.div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index)  => (
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

          <div className="grid md: grid-cols-2 gap-8">
            {services.map((service, index)  => (
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

          <div className="grid md: grid-cols-2 gap-8">
            {useCases.map((useCase, index)  => (
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
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on the latest AI and automation technologies for maximum performance and reliability
            </p>
          </motion.div>

          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index)  => (
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
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that have transformed their operations with AI-powered workflow automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://ziontechgroup.com/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                ziontechgroup.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )}