import { motion } from "framer-motion";
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { 
  Workflow, 
  Bot, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Database,
  Cpu,
  Brain,
  Target,
  Rocket,
  DollarSign,
  ExternalLink
} from 'lucide-react';

export default function AIWorkflowOrchestrator() {
  const features = [
    {
      icon: Workflow,
      title: 'Intelligent Process Mapping',
      description: 'AI-powered workflow discovery and optimization using process mining algorithms',
      benefits: ['Automated process discovery', 'Bottleneck identification', 'Performance optimization', 'Real-time monitoring']
    },
    {
      icon: Bot,
      title: 'Multi-Agent Coordination',
      description: 'Orchestrate multiple AI agents for complex business processes with conflict resolution',
      benefits: ['Agent communication protocols', 'Task delegation', 'Conflict resolution', 'Load balancing']
    },
    {
      icon: Zap,
      title: 'Dynamic Workflow Adaptation',
      description: 'Self-optimizing workflows that adapt to changing business conditions and requirements',
      benefits: ['Real-time adaptation', 'Predictive scaling', 'Automatic optimization', 'Performance learning']
    },
    {
      icon: Shield,
      title: 'Enterprise Security & Compliance',
      description: 'SOC 2 Type II compliant workflow orchestration with audit trails and access controls',
      benefits: ['Role-based access control', 'Audit logging', 'Data encryption', 'Compliance reporting']
    }
  ];

  const useCases = [
    {
      title: 'Customer Service Automation',
      description: 'Orchestrate multi-channel customer interactions with intelligent routing and escalation',
      metrics: ['40% faster resolution', '24/7 availability', 'Multi-language support', 'Sentiment analysis']
    },
    {
      title: 'Supply Chain Optimization',
      description: 'AI-driven supply chain orchestration with demand forecasting and inventory management',
      metrics: ['30% cost reduction', 'Real-time tracking', 'Predictive analytics', 'Risk mitigation']
    },
    {
      title: 'Financial Operations',
      description: 'Automated financial workflows with fraud detection and regulatory compliance',
      metrics: ['99.9% accuracy', 'Real-time monitoring', 'Compliance automation', 'Risk assessment']
    },
    {
      title: 'Healthcare Process Management',
      description: 'Patient care workflow orchestration with HIPAA compliance and clinical decision support',
      metrics: ['Improved patient outcomes', 'Reduced wait times', 'Clinical efficiency', 'Compliance adherence']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small teams and basic workflow automation',
      features: [
        'Up to 10 workflows',
        'Basic AI orchestration',
        'Standard integrations',
        'Email support',
        'Basic analytics'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Advanced features for growing organizations',
      features: [
        'Up to 50 workflows',
        'Advanced AI orchestration',
        'Custom integrations',
        'Priority support',
        'Advanced analytics',
        'Multi-tenant support'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$15,000',
      period: '/month',
      description: 'Full-featured solution for large enterprises',
      features: [
        'Unlimited workflows',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom analytics',
        'On-premise option',
        'SLA guarantees'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const integrations = [
    'Salesforce', 'HubSpot', 'Slack', 'Microsoft Teams', 'Zapier', 'Webhook APIs',
    'Jira', 'Asana', 'Trello', 'Notion', 'Airtable', 'Google Workspace',
    'AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform'
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="AI Workflow Orchestrator - Zion Tech Group"
        description="Transform your business processes with AI-powered workflow orchestration. Automate complex workflows, coordinate multiple AI agents, and optimize operations in real-time."
        keywords="AI workflow orchestration, process automation, multi-agent systems, business process optimization, workflow management"
        canonical="https://ziontechgroup.com/services/ai-workflow-orchestrator"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-900/50 px-4 py-2 text-cyan-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Workflow className="h-4 w-4" />
            <span className="text-sm font-semibold">AI WORKFLOW ORCHESTRATION</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Workflow Orchestrator
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Orchestrate complex business processes with intelligent AI agents. Automate workflows, coordinate multi-agent systems, and optimize operations in real-time with enterprise-grade security.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/request-quote" 
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Request Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Intelligent Workflow Orchestration
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Leverage the power of AI to orchestrate complex business processes with unprecedented efficiency and intelligence
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 mb-6">{feature.description}</p>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Real-World Applications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how AI Workflow Orchestrator transforms operations across industries
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-300 mb-6">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-300">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your organization's needs and scale as you grow
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={plan.cta === 'Contact Sales' ? '/contact' : '/contact'}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with your existing tools and platforms through our extensive integration ecosystem
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-3 md:grid-cols-6 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {integrations.map((integration, index) => (
              <div
                key={integration}
                className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-center hover:border-cyan-500 transition-all duration-300"
              >
                <span className="text-sm text-slate-300 font-medium">{integration}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to Orchestrate Your Workflows?
          </motion.h2>
          <motion.p 
            className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join hundreds of organizations already transforming their operations with AI-powered workflow orchestration
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/request-quote" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-8 text-sm text-cyan-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>Contact us: <a href="tel:+13024640950" className="underline">+1 302 464 0950</a> | <a href="mailto:kleber@ziontechgroup.com" className="underline">kleber@ziontechgroup.com</a></p>
            <p className="mt-2">364 E Main St STE 1008, Middletown DE 19709</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}