import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Workflow, 
  Zap, 
  Target, 
  Users, 
  BarChart3, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Bot,
  Settings,
  Eye,
  Lock,
  Globe,
  Smartphone,
  Tablet,
  Monitor,
  FileText
} from 'lucide-react';

export default function AIWorkflowOrchestrator() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Workflow Intelligence",
      description: "Machine learning algorithms that analyze and optimize your business processes automatically"
    },
    {
      icon: Workflow,
      title: "Visual Workflow Designer",
      description: "Drag-and-drop interface to create complex workflows without coding knowledge"
    },
    {
      icon: Zap,
      title: "Automated Task Execution",
      description: "Intelligent automation that handles repetitive tasks and decision-making processes"
    },
    {
      icon: Target,
      title: "Smart Process Optimization",
      description: "AI continuously analyzes performance and suggests improvements to workflows"
    },
    {
      icon: Users,
      title: "Team Collaboration Tools",
      description: "Real-time collaboration features with role-based access and approval workflows"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights into workflow performance, bottlenecks, and efficiency metrics"
    }
  ];

  const benefits = [
    "Reduce manual work by up to 80% through intelligent automation",
    "Improve process efficiency by 60% with AI-powered optimization",
    "Real-time monitoring and alerting for workflow issues",
    "Seamless integration with existing business systems",
    "Scalable architecture that grows with your business",
    "24/7 automated workflow execution and monitoring"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams and basic workflow automation",
      features: [
        'Up to 10 workflows',
        'Basic AI decision making',
        'Standard templates',
        'Email support',
        'Basic analytics'
      ]
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Advanced features for growing businesses",
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
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "Full-featured solution for large organizations",
      features: [
        "Unlimited workflows",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Customer Onboarding",
      description: "Automate the entire customer onboarding process from signup to first use",
      icon: Users
    },
    {
      title: "Invoice Processing",
      description: "AI-powered invoice processing with automatic approval workflows",
      icon: FileText
    },
    {
      title: "HR Operations",
      description: "Streamline hiring, onboarding, and employee management processes",
      icon: Users
    },
    {
      title: "Sales Pipeline",
      description: "Automate lead qualification, follow-ups, and deal progression",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-6">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium">AI-Powered Automation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Workflow
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Orchestrator
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business processes with intelligent AI-powered workflow automation. 
              Design, optimize, and execute complex workflows with zero coding required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                <Eye className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Modern Workflows
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize intelligent workflows that drive business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose AI Workflow Orchestrator?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of workflow automation with AI-powered intelligence and seamless integration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core features and AI capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border ${
                  plan.popular 
                    ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/20' 
                    : 'border-slate-600/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600'
                      : 'border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI Workflow Orchestrator transforms business processes across different industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-6 rounded-2xl border border-slate-600/50 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses that have already automated their processes with AI Workflow Orchestrator.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}