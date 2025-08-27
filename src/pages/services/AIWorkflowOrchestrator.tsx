import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitFork, 
  Brain, 
  Zap, 
  Target, 
  BarChart3, 
  Users, 
  Shield, 
  Cloud,
  CheckCircle,
  ArrowRight,
  Play,
  Clock,
  TrendingUp,
  Cpu,
  Database,
  Network,
  Bot,
  Sparkles,
  Globe,
  Lock,
  Eye,
  Activity,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Globe2,
  MessageCircle,
  Search,
  FileText,
  Settings,
  Palette,
  Zap as ZapIcon2,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Star,
  Award,
  Rocket,
  Lightbulb,
  Handshake,
  Target as TargetIcon,
  Users2,
  Briefcase,
  Building,
  Truck,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Atom,
  Leaf as LeafIcon,
  Gamepad2 as Gamepad2Icon,
  Coins as CoinsIcon,
  Satellite as SatelliteIcon
} from 'lucide-react';

export default function AIWorkflowOrchestrator() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Workflow Intelligence",
      description: "Advanced machine learning algorithms that analyze and optimize business processes in real-time",
      benefits: ["30% faster workflow execution", "Intelligent task prioritization", "Predictive process optimization"]
    },
    {
      icon: GitFork,
      title: "Visual Workflow Designer",
      description: "Drag-and-drop interface for creating complex business workflows with AI assistance",
      benefits: ["No-code workflow creation", "AI-suggested optimizations", "Real-time collaboration"]
    },
    {
      icon: Zap,
      title: "Automated Process Execution",
      description: "Seamless automation of repetitive tasks with intelligent decision-making capabilities",
      benefits: ["90% reduction in manual work", "24/7 process execution", "Error-free automation"]
    },
    {
      icon: Target,
      title: "Performance Analytics",
      description: "Comprehensive insights into workflow performance, bottlenecks, and optimization opportunities",
      benefits: ["Real-time performance monitoring", "Predictive analytics", "ROI tracking"]
    }
  ];

  const useCases = [
    {
      title: "Enterprise Process Automation",
      description: "Streamline complex business processes across departments with AI-driven optimization",
      icon: Building,
      examples: ["HR onboarding workflows", "Financial approval processes", "Customer service escalations"]
    },
    {
      title: "Supply Chain Optimization",
      description: "Intelligent orchestration of supply chain operations with predictive analytics",
      icon: Truck,
      examples: ["Inventory management", "Order fulfillment", "Supplier coordination"]
    },
    {
      title: "Customer Journey Orchestration",
      description: "Seamless customer experience management across all touchpoints",
      icon: Users,
      examples: ["Lead nurturing", "Support ticket routing", "Upselling automation"]
    },
    {
      title: "IT Operations Management",
      description: "Automated IT workflows with intelligent incident response and resource allocation",
      icon: Server,
      examples: ["Incident management", "Change management", "Resource provisioning"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams getting started with workflow automation",
      features: [
        "Up to 10 workflows",
        "Basic AI optimization",
        "Standard integrations",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with complex workflow needs",
      features: [
        "Up to 50 workflows",
        "Advanced AI optimization",
        "Premium integrations",
        "Priority support",
        "Advanced analytics",
        "Custom templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade workflow orchestration",
      features: [
        "Unlimited workflows",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-900 via-zion-slate-800 to-zion-slate-900">
      {/* Futuristic Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Workflow Orchestration
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                AI Workflow Orchestrator
              </h1>
              
              <p className="text-xl md:text-2xl text-zion-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business processes with intelligent workflow automation powered by advanced AI. 
                Orchestrate complex workflows, automate decision-making, and optimize performance in real-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 flex items-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Schedule Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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
              <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
                Our AI Workflow Orchestrator combines cutting-edge technology with intuitive design to deliver 
                unprecedented workflow automation capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-zion-slate-800/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-zion-slate-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-zion-slate-300">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Business Processes
              </h2>
              <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
                Discover how AI Workflow Orchestrator can revolutionize operations across various industries 
                and business functions.
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
                  className="bg-zion-slate-800/50 backdrop-blur-sm border border-zion-purple/20 rounded-xl p-8 hover:border-zion-purple/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mr-4">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{useCase.title}</h3>
                  </div>
                  <p className="text-zion-slate-300 mb-6">{useCase.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-zion-cyan">Examples:</h4>
                    <ul className="space-y-2">
                      {useCase.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-zion-slate-300">
                          <ArrowRight className="w-4 h-4 text-zion-purple mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
                Choose the perfect plan for your organization's workflow automation needs. 
                All plans include our core AI capabilities and 24/7 support.
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
                  className={`relative bg-zion-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-zion-cyan/50 bg-zion-cyan/5' 
                      : 'border-zion-slate-600/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-zion-slate-400">{plan.period}</span>
                    </div>
                    <p className="text-zion-slate-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-zion-slate-300">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                        : 'bg-zion-slate-700 text-white hover:bg-zion-slate-600'
                    }`}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-cyan/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Workflows?
              </h2>
              <p className="text-xl text-zion-slate-300 mb-8">
                Join thousands of organizations that have already revolutionized their business processes 
                with AI Workflow Orchestrator.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-4" />
                <p className="text-zion-slate-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-4" />
                <p className="text-zion-slate-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-zion-cyan mb-4" />
                <p className="text-zion-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}