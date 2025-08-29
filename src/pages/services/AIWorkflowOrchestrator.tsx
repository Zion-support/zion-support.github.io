import { motion } from "framer-motion";
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Brain, 
  Zap, 
  Workflow, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Settings,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Target,
  Gauge,
  Database,
  Cloud,
  Lock,
  RefreshCw,
  Eye,
  Code,
  GitBranch,
  Calendar,
  DollarSign
} from 'lucide-react';

const AIWorkflowOrchestrator: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Process Discovery",
      description: "AI automatically identifies and maps your business processes for optimization",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Workflow,
      title: "Visual Workflow Designer",
      description: "Drag-and-drop interface to create complex workflows without coding",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Smart Automation Rules",
      description: "AI-powered decision trees that adapt to changing business conditions",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time insights into workflow efficiency and bottleneck identification",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Built-in audit trails and role-based access control for enterprise security",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Clock,
      title: "Real-time Monitoring",
      description: "Live dashboard showing workflow status and performance metrics",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams getting started with workflow automation",
      features: [
        "Up to 10 workflows",
        "Basic AI process discovery",
        "Standard templates",
        "Email support",
        "Basic analytics",
        "5 team members"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with complex workflow needs",
      features: [
        "Up to 50 workflows",
        "Advanced AI orchestration",
        "Custom integrations",
        "Priority support",
        "Advanced analytics",
        "Unlimited team members",
        "Custom branding",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "/month",
      description: "For large organizations requiring enterprise-grade workflow management",
      features: [
        "Unlimited workflows",
        "AI-powered optimization",
        "Custom AI models",
        "Dedicated support",
        "Advanced security",
        "Multi-tenant support",
        "Custom development",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "10x Faster Process Execution",
      description: "Automate repetitive tasks and reduce manual work by up to 90%",
      metric: "90%"
    },
    {
      icon: TrendingUp,
      title: "25% Cost Reduction",
      description: "Eliminate inefficiencies and reduce operational costs significantly",
      metric: "25%"
    },
    {
      icon: Clock,
      title: "50% Time Savings",
      description: "Streamline workflows and accelerate business processes",
      metric: "50%"
    },
    {
      icon: Users,
      title: "Improved Team Productivity",
      description: "Focus on high-value tasks while AI handles routine operations",
      metric: "3x"
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      title: "Patient Care Workflows",
      description: "Automate patient intake, appointment scheduling, and follow-up processes",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      industry: "Finance",
      title: "Loan Processing Automation",
      description: "Streamline loan applications, document verification, and approval workflows",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500"
    },
    {
      industry: "Manufacturing",
      title: "Quality Control Processes",
      description: "Automate quality checks, defect detection, and compliance reporting",
      icon: Settings,
      color: "from-orange-500 to-red-500"
    },
    {
      industry: "Retail",
      title: "Order Fulfillment",
      description: "Optimize order processing, inventory management, and delivery tracking",
      icon: ShoppingCart,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Workflow Orchestrator - Zion Tech Group"
        description="Transform your business processes with AI-powered workflow orchestration. Automate, optimize, and scale your operations with intelligent process management."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                AI-Powered Workflow Management
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI Workflow
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Orchestrator</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Transform your business processes with intelligent workflow automation. 
                Let AI discover, optimize, and orchestrate your operations for maximum efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Powerful Features for Modern Workflows
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, manage, and optimize intelligent business processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-300">
              See how AI Workflow Orchestrator transforms business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Tailored workflows for your industry's unique challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`p-6 rounded-xl bg-gradient-to-br ${useCase.color} bg-opacity-10 border border-opacity-20 hover:bg-opacity-20 transition-all duration-300 h-full`}>
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color}`}>
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-purple-300 mb-2">{useCase.industry}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your workflow automation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50' 
                    : 'bg-slate-800/50 border border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using AI Workflow Orchestrator to streamline their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIWorkflowOrchestrator;