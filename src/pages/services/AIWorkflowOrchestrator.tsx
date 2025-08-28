import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Workflow, 
  Zap, 
  Target, 
  Users, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Cog,
  Database,
  Shield,
  Globe,
  Cpu,
  Network,
  Activity,
  Play,
  Pause,
  Settings,
  Monitor,
  AlertTriangle,
  Info,
  Star,
  Award,
  Rocket,
  Sparkles,
  GitFork,
  Server,
  Building,
  Leaf,
  Satellite,
  Gamepad2,
  Coins,
  GraduationCap,
  Briefcase,
  Newspaper,
  BookOpen,
  ExternalLink,
  ShoppingCart
} from 'lucide-react';

export default function AIWorkflowOrchestrator() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Decision Making',
      description: 'Intelligent algorithms that make real-time decisions based on data patterns and business rules',
      benefits: ['Automated decision routing', 'Predictive analytics', 'Risk assessment', 'Optimization suggestions']
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'End-to-end workflow automation that eliminates manual tasks and reduces human error',
      benefits: ['Task automation', 'Process mapping', 'Workflow templates', 'Custom automation rules']
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Continuous monitoring and optimization of workflows for maximum efficiency',
      benefits: ['Performance monitoring', 'Bottleneck detection', 'Resource optimization', 'Efficiency metrics']
    },
    {
      icon: Target,
      title: 'Goal Alignment',
      description: 'Ensure all workflows align with business objectives and KPIs',
      benefits: ['KPI tracking', 'Goal setting', 'Progress monitoring', 'Success metrics']
    }
  ];

  const useCases = [
    {
      industry: 'Manufacturing',
      icon: Building,
      description: 'Streamline production workflows, quality control, and supply chain management',
      benefits: ['30% faster production', '25% cost reduction', 'Improved quality control', 'Real-time monitoring']
    },
    {
      industry: 'Healthcare',
      icon: Users,
      description: 'Optimize patient care workflows, appointment scheduling, and medical record management',
      benefits: ['40% faster patient processing', 'Reduced wait times', 'Better resource allocation', 'Improved outcomes']
    },
    {
      industry: 'Finance',
      icon: Coins,
      description: 'Automate loan processing, risk assessment, and compliance workflows',
      benefits: ['50% faster processing', 'Reduced errors', 'Better compliance', 'Improved customer experience']
    },
    {
      industry: 'Retail',
      icon: ShoppingCart,
      description: 'Optimize inventory management, customer service, and sales workflows',
      benefits: ['35% inventory optimization', 'Faster customer service', 'Better sales tracking', 'Improved efficiency']
    }
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$299/month',
      description: 'Perfect for small teams and basic workflows',
      features: [
        'Up to 10 workflows',
        'Basic AI decision making',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ]
    },
    {
      plan: 'Professional',
      price: '$799/month',
      description: 'Ideal for growing businesses with complex workflows',
      features: [
        'Up to 50 workflows',
        'Advanced AI algorithms',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      plan: 'Enterprise',
      price: '$2,499/month',
      description: 'For large organizations with enterprise-scale workflows',
      features: [
        'Unlimited workflows',
        'Custom AI models',
        'White-label solutions',
        '24/7 dedicated support',
        'Custom development',
        'On-premise options',
        'SLA guarantees'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Service
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                AI Workflow
              </span>
              <br />
              <span className="text-white">Orchestrator</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business processes with intelligent workflow automation powered by advanced AI. 
              Orchestrate complex workflows, make data-driven decisions, and achieve unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Workflow Orchestrator combines cutting-edge artificial intelligence with powerful automation capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Workflow Orchestrator is transforming workflows across multiple industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300 text-sm mb-4">{useCase.description}</p>
                
                <div className="space-y-2 text-left">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Workflow Orchestrator follows a simple yet powerful process to transform your workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Analyze',
                description: 'AI analyzes your current workflows and identifies optimization opportunities',
                icon: BarChart3
              },
              {
                step: '2',
                title: 'Design',
                description: 'Design optimized workflows using our intuitive drag-and-drop interface',
                icon: Cog
              },
              {
                step: '3',
                title: 'Automate',
                description: 'Deploy automated workflows with AI-powered decision making',
                icon: Zap
              },
              {
                step: '4',
                title: 'Optimize',
                description: 'Continuously monitor and optimize workflows for maximum efficiency',
                icon: TrendingUp
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.plan}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-blue-500 scale-105' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/30'
                }`}>
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of workflow automation with AI-powered orchestration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}