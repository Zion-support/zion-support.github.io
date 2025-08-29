import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Workflow, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Pause,
  RotateCcw,
  BarChart3,
  Activity,
  Cpu,
  Database,
  Network,
  Cloud,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Server,
  BarChart,
  PieChart,
  LineChart,
  Target,
  Award,
  Rocket,
  Lightbulb,
  Cog,
  Settings,
  Eye,
  EyeOff,
  Download,
  Upload,
  RefreshCw,
  AlertCircle,
  Info,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AIWorkflowOrchestrator() {
  const features = [
    {
      icon: Workflow,
      title: 'Intelligent Process Orchestration',
      description: 'AI-powered workflow automation that adapts to your business processes in real-time',
      benefits: ['Reduces manual work by 80%', 'Improves process efficiency by 60%', 'Eliminates human errors']
    },
    {
      icon: Brain,
      title: 'Multi-Agent Coordination',
      description: 'Advanced AI agents that work together to optimize complex workflows across departments',
      benefits: ['Cross-functional collaboration', 'Intelligent task routing', 'Dynamic resource allocation']
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Continuous learning and adaptation to changing business conditions and requirements',
      benefits: ['Adaptive workflows', 'Performance optimization', 'Predictive adjustments']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive insights into workflow performance, bottlenecks, and optimization opportunities',
      benefits: ['Performance metrics', 'Bottleneck identification', 'ROI tracking']
    }
  ];

  const useCases = [
    {
      industry: 'Manufacturing',
      description: 'Streamline production workflows, quality control, and supply chain management',
      benefits: ['30% faster production', '25% cost reduction', '99.9% quality compliance']
    },
    {
      industry: 'Healthcare',
      description: 'Optimize patient care workflows, appointment scheduling, and medical record management',
      benefits: ['40% faster patient processing', 'Improved care coordination', 'Reduced wait times']
    },
    {
      industry: 'Financial Services',
      description: 'Automate compliance workflows, risk assessment, and transaction processing',
      benefits: ['50% faster compliance', 'Real-time risk monitoring', 'Automated reporting']
    },
    {
      industry: 'Retail & E-commerce',
      description: 'Streamline inventory management, order processing, and customer service workflows',
      benefits: ['35% faster order fulfillment', 'Improved inventory accuracy', 'Enhanced customer experience']
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small teams and basic workflow automation',
      features: [
        'Up to 10 workflows',
        'Basic AI optimization',
        'Standard analytics',
        'Email support',
        '5 team members'
      ],
      popular: false
    },
    {
      plan: 'Professional',
      price: '$5,000',
      period: '/month',
      description: 'Ideal for growing businesses with complex workflow needs',
      features: [
        'Up to 50 workflows',
        'Advanced AI optimization',
        'Real-time analytics',
        'Priority support',
        'Unlimited team members',
        'Custom integrations'
      ],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$12,000',
      period: '/month',
      description: 'For large organizations requiring enterprise-grade workflow orchestration',
      features: [
        'Unlimited workflows',
        'Custom AI models',
        'Advanced analytics & ML',
        '24/7 dedicated support',
        'Custom deployment',
        'SLA guarantees',
        'On-premise option'
      ],
      popular: false
    }
  ];

  const technicalSpecs = [
    {
      category: 'AI & Machine Learning',
      specs: [
        'GPT-4 integration for natural language processing',
        'Custom ML models for workflow optimization',
        'Real-time learning and adaptation',
        'Multi-agent coordination algorithms'
      ]
    },
    {
      category: 'Integration & APIs',
      specs: [
        'RESTful APIs with comprehensive documentation',
        'Webhook support for real-time updates',
        'Pre-built connectors for 100+ applications',
        'Custom integration development'
      ]
    },
    {
      category: 'Security & Compliance',
      specs: [
        'SOC 2 Type II compliance',
        'End-to-end encryption',
        'Role-based access control (RBAC)',
        'Audit logging and compliance reporting'
      ]
    },
    {
      category: 'Performance & Scalability',
      specs: [
        '99.9% uptime SLA',
        'Auto-scaling infrastructure',
        'Global CDN for fast access',
        'Real-time processing capabilities'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <SEO 
        title="AI Workflow Orchestrator - Zion Tech Group"
        description="Transform your business with AI-powered workflow orchestration. Automate processes, coordinate multi-agent systems, and optimize operations in real-time."
        keywords="AI workflow orchestration, process automation, multi-agent systems, workflow optimization, business process automation"
        canonical="https://ziontechgroup.com/services/ai-workflow-orchestrator"
      />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-slate-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Workflow className="w-12 h-12 text-white" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-indigo-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI Workflow Orchestrator
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Revolutionize your business operations with intelligent workflow automation, multi-agent coordination, and real-time optimization powered by cutting-edge AI
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#pricing" 
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              View Pricing
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              Get Started
            </a>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Key Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Powerful capabilities that transform how you manage and optimize business workflows
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 mb-6">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Industry Use Cases
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how different industries leverage our AI Workflow Orchestrator to achieve remarkable results
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">
                    {useCase.industry}
                  </h3>
                  <p className="text-slate-300 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-300">
                        <TrendingUp className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                        {benefit}
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
      <section id="pricing" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Pricing Plans
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the perfect plan for your workflow automation needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.plan}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-slate-400">{plan.period}</span>
                    </div>
                    <p className="text-slate-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="/contact" 
                    className="w-full block text-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Technical Specifications
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Enterprise-grade technology stack designed for reliability, security, and performance
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={spec.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-indigo-500 transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors duration-300">
                    {spec.category}
                  </h3>
                  <div className="space-y-3">
                    {spec.specs.map((item, idx) => (
                      <div key={idx} className="flex items-start text-sm text-slate-300">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700">
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
            className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your business operations with AI-powered workflow orchestration and achieve unprecedented efficiency
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
            </a>
            <a 
              href="#pricing" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              View Pricing
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Need Help Getting Started?</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}