import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  CogIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  BoltIcon,
  EyeIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const AIWorkflowAutomation: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "Intelligent Process Mapping",
      description: "AI automatically analyzes and maps your existing business processes, identifying optimization opportunities and bottlenecks.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: CogIcon,
      title: "Automated Workflow Generation",
      description: "Generate optimized workflows automatically based on AI analysis of your business requirements and best practices.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: ChartBarIcon,
      title: "Real-time Optimization",
      description: "Continuously monitor and optimize workflows in real-time using machine learning algorithms and performance analytics.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: CloudIcon,
      title: "Cross-Platform Integration",
      description: "Seamlessly integrate with existing systems including CRM, ERP, project management tools, and custom applications.",
      color: "from-orange-500 to-red-600"
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
import { SEO } from '../../components/SEO';
import { 
  Workflow, 
  Zap, 
  Brain, 
  TrendingUp, 
  Shield, 
<<<<<<< HEAD
  Users, 
  BarChart3, 
  Clock,
  Target,
  Award,
  Globe,
  Cpu
=======
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Clock,
  Users,
  CheckCircle,
  ArrowRight
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Zap, 
  Workflow, 
  BarChart3, 
  Users, 
  Shield, 
  Globe, 
  TrendingUp, 
  Cpu, 
  Target,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Settings,
  Monitor,
  AlertTriangle,
  FileText,
  Building
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
} from 'lucide-react';

export default function AIWorkflowAutomation() {
  const features = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: "Intelligent Process Discovery",
      description: "AI automatically identifies and maps your existing business processes",
      icon: Brain,
      benefits: ["Process optimization", "Bottleneck identification", "Efficiency insights"]
    },
    {
      title: "Automated Workflow Creation",
      description: "Create complex workflows using natural language and AI assistance",
      icon: Workflow,
      benefits: ["Drag & drop interface", "AI suggestions", "Template library"]
    },
    {
      title: "Smart Decision Making",
      description: "AI-powered decision trees and conditional logic for complex workflows",
      icon: Target,
      benefits: ["Intelligent routing", "Risk assessment", "Predictive analytics"]
    },
    {
      title: "Real-time Monitoring",
      description: "Live tracking of workflow performance and bottlenecks",
      icon: BarChart3,
      benefits: ["Performance metrics", "Alert system", "KPI dashboards"]
    },
    {
      title: "Integration Hub",
      description: "Connect with 500+ business applications and services",
      icon: Cpu,
      benefits: ["API integration", "Webhook support", "Custom connectors"]
    },
    {
      title: "Compliance Automation",
      description: "Built-in compliance checks and audit trails for regulated industries",
      icon: Shield,
      benefits: ["SOC 2 compliance", "GDPR support", "Audit logging"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      features: [
        "Up to 10 workflows",
        "Basic AI automation",
        "Standard integrations",
        "Email support",
        "Basic analytics"
      ],
      bestFor: "Small teams and startups"
    },
    {
      name: "Professional",
      price: "$799",
      period: "per month",
      features: [
        "Up to 100 workflows",
        "Advanced AI features",
        "Premium integrations",
        "Priority support",
        "Advanced analytics",
        "Custom branding"
      ],
      bestFor: "Growing businesses"
    },
    {
      name: "Enterprise",
      price: "$2,499",
      period: "per month",
      features: [
        "Unlimited workflows",
        "Full AI capabilities",
        "Custom integrations",
        "24/7 dedicated support",
        "Enterprise analytics",
        "White-label solution",
        "Custom development"
      ],
      bestFor: "Large organizations"
=======
      title: "Intelligent Process Mapping",
      description: "AI-powered workflow analysis and optimization that identifies bottlenecks and suggests improvements",
      icon: Workflow,
      benefits: ["Automated process discovery", "Bottleneck identification", "Optimization recommendations", "Real-time monitoring"]
    },
    {
      title: "Smart Task Automation",
      description: "Automate repetitive tasks with AI that learns and improves over time",
      icon: Zap,
      benefits: ["Intelligent task routing", "Priority optimization", "Deadline management", "Resource allocation"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast workflow performance and identify potential issues before they occur",
      icon: Brain,
      benefits: ["Performance forecasting", "Risk assessment", "Capacity planning", "Trend analysis"]
    },
    {
      title: "Integration Hub",
      description: "Seamlessly connect with existing tools and systems through our API-first approach",
      icon: Cpu,
      benefits: ["RESTful APIs", "Webhook support", "Custom connectors", "Real-time sync"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$299/month",
      description: "Perfect for small teams getting started with workflow automation",
      features: [
        "Up to 10 workflows",
        "Basic AI insights",
        "Email support",
        "Standard integrations",
        "5 team members"
=======
      title: "Intelligent Process Discovery",
      description: "AI automatically identifies and maps your existing workflows for optimization",
      icon: Brain,
      benefits: ["Process visibility", "Bottleneck identification", "Automation opportunities"]
    },
    {
      title: "Smart Workflow Design",
      description: "AI-powered workflow builder with drag-and-drop interface and intelligent suggestions",
      icon: Workflow,
      benefits: ["Visual workflow builder", "AI suggestions", "Best practice templates"]
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning algorithms predict workflow performance and suggest improvements",
      icon: BarChart3,
      benefits: ["Performance forecasting", "Optimization insights", "Risk prediction"]
    },
    {
      title: "Automated Decision Making",
      description: "AI makes intelligent decisions based on business rules and historical data",
      icon: Cpu,
      benefits: ["Rule-based automation", "Data-driven decisions", "Consistent outcomes"]
    },
    {
      title: "Real-time Monitoring",
      description: "Live dashboard with real-time workflow status and performance metrics",
      icon: Monitor,
      benefits: ["Live status updates", "Performance tracking", "Instant alerts"]
    },
    {
      title: "Integration Hub",
      description: "Seamlessly connect with 500+ business applications and systems",
      icon: Globe,
      benefits: ["Wide compatibility", "Easy setup", "Unified workflow"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 299,
      period: "month",
      description: "Perfect for small teams getting started with workflow automation",
      features: [
        "Up to 10 workflows",
        "Basic AI suggestions",
        "5 integrations",
        "Email support",
        "Standard templates",
        "Basic analytics"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
<<<<<<< HEAD
      plan: "Professional",
      price: "$799/month",
      description: "Ideal for growing businesses with complex workflow needs",
      features: [
        "Up to 50 workflows",
        "Advanced AI analytics",
        "Priority support",
        "Custom integrations",
        "Unlimited team members",
        "Advanced reporting"
=======
      name: "Professional",
      price: 799,
      period: "month",
      description: "Ideal for growing businesses with complex workflow needs",
      features: [
        "Up to 50 workflows",
        "Advanced AI insights",
        "25 integrations",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "Team collaboration",
        "API access"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
<<<<<<< HEAD
      plan: "Enterprise",
      price: "$1,999/month",
=======
      name: "Enterprise",
      price: 1999,
      period: "month",
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
      description: "For large organizations requiring enterprise-grade automation",
      features: [
        "Unlimited workflows",
        "Custom AI models",
<<<<<<< HEAD
        "24/7 dedicated support",
        "White-label options",
        "Advanced security",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
        "Unlimited integrations",
        "24/7 dedicated support",
        "Custom development",
        "Advanced security",
        "Multi-tenant support",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
<<<<<<< HEAD
<<<<<<< HEAD
      examples: [
        "Patient appointment scheduling",
        "Medical record processing",
        "Insurance claim workflows",
        "Pharmacy order management"
      ]
=======
      examples: [
        "Patient appointment scheduling",
        "Medical record processing",
        "Insurance claim automation",
        "Prescription management"
      ],
      roi: "40-60% efficiency improvement"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
    },
    {
      industry: "Finance",
      examples: [
<<<<<<< HEAD
        "Loan approval processes",
        "KYC verification workflows",
        "Fraud detection automation",
        "Compliance reporting"
      ]
=======
        "Loan application processing",
        "KYC verification workflows",
        "Fraud detection automation",
        "Compliance reporting"
      ],
      roi: "50-70% cost reduction"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
    },
    {
      industry: "Manufacturing",
      examples: [
<<<<<<< HEAD
        "Quality control workflows",
        "Supply chain management",
        "Maintenance scheduling",
        "Inventory optimization"
      ]
=======
        "Quality control processes",
        "Supply chain management",
        "Maintenance scheduling",
        "Inventory optimization"
      ],
      roi: "30-50% productivity increase"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
    },
    {
      industry: "Retail",
      examples: [
        "Order fulfillment",
        "Customer service routing",
        "Inventory management",
<<<<<<< HEAD
        "Returns processing"
      ]
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fbd9
=======
        "Marketing campaign automation"
      ],
      roi: "35-55% operational efficiency"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
    }
  ];

  const benefits = [
    {
      metric: "80%",
<<<<<<< HEAD
<<<<<<< HEAD
      description: "Reduction in process time",
      icon: BoltIcon
    },
    {
      metric: "95%",
      description: "Elimination of manual errors",
      icon: CheckCircleIcon
    },
    {
      metric: "3x",
      description: "Faster decision making",
      icon: RocketLaunchIcon
    },
    {
      metric: "40%",
      description: "Cost savings",
      icon: ChartBarIcon
    }
  ];

  const useCases = [
    {
      industry: "Manufacturing",
      description: "Automate production line workflows, quality control processes, and supply chain management.",
      icon: CogIcon
    },
    {
      industry: "Healthcare",
      description: "Streamline patient care workflows, appointment scheduling, and medical record management.",
      icon: ShieldCheckIcon
    },
    {
      industry: "Finance",
      description: "Automate compliance workflows, loan processing, and risk assessment procedures.",
      icon: ChartBarIcon
    },
    {
      industry: "Retail",
      description: "Optimize inventory management, customer service workflows, and order fulfillment processes.",
      icon: CloudIcon
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Process Analysis",
      description: "AI analyzes your current workflows to identify automation opportunities and inefficiencies.",
      icon: EyeIcon
    },
    {
      step: "02",
      title: "Workflow Design",
      description: "Design optimized workflows using our intuitive drag-and-drop interface and AI recommendations.",
      icon: CpuChipIcon
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy workflows with automated testing and seamless integration to your existing systems.",
      icon: RocketLaunchIcon
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuously monitor and optimize workflows using real-time analytics and machine learning.",
      icon: ChartBarIcon
=======
      description: "Reduction in manual tasks",
      icon: Zap
    },
    {
      metric: "60%",
      description: "Faster process completion",
      icon: Clock
=======
      description: "Faster process completion",
      icon: Zap
    },
    {
      metric: "65%",
      description: "Reduced manual errors",
      icon: CheckCircle
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
    },
    {
      metric: "45%",
      description: "Cost savings",
<<<<<<< HEAD
      icon: TrendingUp
    },
    {
      metric: "95%",
      description: "Error reduction",
      icon: Shield
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fbd9
=======
      description: "Automate patient intake, appointment scheduling, and follow-up processes",
      icon: Building,
      benefits: ["Reduced wait times", "Improved patient satisfaction", "Compliance automation", "Resource optimization"]
    },
    {
      industry: "Finance",
      description: "Streamline loan processing, compliance checks, and risk assessment workflows",
      icon: Building,
      benefits: ["Faster processing", "Reduced errors", "Compliance automation", "Cost savings"]
    },
    {
      industry: "Manufacturing",
      description: "Optimize production planning, quality control, and supply chain management",
      icon: Building,
      benefits: ["Increased efficiency", "Quality improvement", "Cost reduction", "Better planning"]
    },
    {
      industry: "Retail",
      description: "Automate inventory management, customer service, and order processing",
      icon: Building,
      benefits: ["Better inventory control", "Improved customer service", "Faster order fulfillment", "Cost optimization"]
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
      icon: DollarSign
    },
    {
      metric: "90%",
      description: "Improved accuracy",
      icon: Target
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
    }
  ];

  return (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              AI Workflow Automation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Transform your business processes with intelligent automation powered by artificial intelligence. 
              Streamline operations, eliminate bottlenecks, and boost productivity across your organization.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Automation
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
                Watch Demo
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powerful AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered workflow automation platform delivers intelligent process optimization 
              and seamless integration across your entire business ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Measurable Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See immediate improvements in efficiency, accuracy, and cost savings across your organization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                <p className="text-gray-300 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Use Cases Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI workflow automation solutions are designed to work across diverse industries, 
              delivering tailored optimization for your specific business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{useCase.industry}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started with AI workflow automation in four simple steps, from analysis to optimization.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-y-1/2 z-0"></div>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Ready to Transform Your Workflows?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of organizations that have already revolutionized their business processes 
            with AI-powered workflow automation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Get Started Today
              <ArrowRightIcon className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-blue-400 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-black transition-all duration-300">
              Schedule Demo
            </button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AIWorkflowAutomation;
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group" 
        description="Transform your business processes with AI-powered workflow automation. Reduce manual tasks by 80%, increase efficiency by 60%, and achieve 45% cost savings."
        keywords="AI workflow automation, business process automation, workflow management, process optimization, AI automation platform"
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group" 
        description="Transform your business processes with AI-powered workflow automation. Reduce manual work, increase efficiency, and drive growth."
        keywords="AI workflow automation, business process automation, intelligent automation, workflow optimization, AI business solutions"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group" 
        description="Transform your business processes with AI-powered workflow automation. Reduce costs, improve efficiency, and eliminate manual errors with intelligent process management."
        keywords="AI workflow automation, business process automation, workflow optimization, intelligent automation, process management"
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
        canonical="https://ziontechgroup.com/services/ai-workflow-automation"
      />

      {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Workflow Automation
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Transform Your Business Processes with AI
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Automate complex business workflows using artificial intelligence. Reduce manual tasks by 80%, 
            increase efficiency by 60%, and achieve 45% cost savings with our intelligent automation platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=AI Workflow Automation Demo Request"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Demo
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
=======
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-zion-cyan/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-cyan mr-4">
              <span className="text-zion-cyan font-semibold">AI-Powered</span>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-purple">
              <span className="text-zion-purple font-semibold">Workflow Automation</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Workflow Automation
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Transform Your Business Processes
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Leverage artificial intelligence to automate complex workflows, eliminate manual processes, 
            and achieve unprecedented efficiency gains across your organization.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Transform Your Business with AI Automation
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
<<<<<<< HEAD
              Our AI-powered workflow automation platform delivers measurable results that impact your bottom line
=======
              Experience dramatic improvements in efficiency, accuracy, and cost savings with our 
              AI-powered workflow automation platform.
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {benefit.metric}
                </div>
                <p className="text-zion-slate font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
<<<<<<< HEAD
=======
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8">
            <Workflow className="w-20 h-20 mx-auto mb-6 text-cyan-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Workflow Automation
              <span className="block text-3xl md:text-4xl text-cyan-400 mt-2">
                Intelligent Process Optimization
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business operations with AI-powered workflow automation that learns, adapts, 
              and continuously improves your processes for maximum efficiency and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
          </div>
        </div>
      </section>

      {/* Features Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
<<<<<<< HEAD
              Everything you need to automate and optimize your business workflows
=======
              Our platform combines cutting-edge AI technology with intuitive design to deliver 
              the most advanced workflow automation solution available.
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate mb-4">
<<<<<<< HEAD
=======
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI workflow automation platform combines cutting-edge technology with intuitive design 
              to deliver exceptional results across all industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
<<<<<<< HEAD
<<<<<<< HEAD
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
=======
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Pricing Section */}
<<<<<<< HEAD
=======
      {/* Pricing Plans */}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
<<<<<<< HEAD
              Choose the plan that fits your business needs and scale as you grow
=======
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs. All plans include a 14-day free trial.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
              Choose the plan that best fits your business needs. All plans include a 14-day free trial.
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
<<<<<<< HEAD
<<<<<<< HEAD
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 border-2 ${
                tier.name === 'Professional' 
                  ? 'border-zion-cyan scale-105' 
                  : 'border-zion-blue-light'
              }`}>
                {tier.name === 'Professional' && (
                  <div className="bg-zion-cyan text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>
                  <span className="text-zion-slate">{tier.period}</span>
                </div>
                <p className="text-zion-slate mb-6">{tier.bestFor}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
=======
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                  : 'border-gray-600 hover:border-cyan-500/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
=======
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 ${
                plan.popular 
                  ? 'border-zion-cyan scale-105' 
                  : 'border-zion-blue-light'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-zion-cyan text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-zion-slate mb-4">
                    {plan.description}
                  </p>
                  <div className="text-4xl font-bold text-zion-cyan">
                    ${plan.price}
                    <span className="text-lg text-zion-slate font-normal">/{plan.period}</span>
                  </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
<<<<<<< HEAD
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
                    <li key={idx} className="flex items-center text-zion-slate">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
                      {feature}
                    </li>
                  ))}
                </ul>
<<<<<<< HEAD
<<<<<<< HEAD
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=AI Workflow Automation - ${tier.name} Plan Inquiry`}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    tier.name === 'Professional'
                      ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white'
                      : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                  }`}
                >
                  Get Started
                </a>
=======
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                    : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white'
                    : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                }`}>
                  {plan.cta}
                </button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Use Cases */}
=======
      {/* Industry Use Cases */}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
<<<<<<< HEAD
              Industry-Specific Use Cases
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              See how AI workflow automation transforms different industries
=======
      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI workflow automation adapts to your industry's unique requirements and compliance needs.
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our AI workflow automation platform is designed to meet the unique needs of various industries, 
              delivering measurable ROI and operational improvements.
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
<<<<<<< HEAD
<<<<<<< HEAD
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-4 text-center">
                  {useCase.industry}
                </h3>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {example}
=======
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-600 hover:border-cyan-500/40">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {useCase.industry}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-1 text-left">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
                    </li>
                  ))}
                </ul>
=======
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-3 text-center">
                  {useCase.industry}
                </h3>
                <ul className="space-y-2 mb-4">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="text-sm text-zion-slate flex items-start">
                      <ArrowRight className="w-3 h-3 text-zion-cyan mr-2 mt-1 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-sm font-semibold text-zion-cyan">
                    {useCase.roi}
                  </div>
                </div>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Market Information */}
=======
      {/* Market Comparison */}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
<<<<<<< HEAD
              Market Analysis & ROI
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Understand the market opportunity and potential return on investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-6">Market Overview</h3>
              <div className="space-y-4">
                <div className="bg-zion-blue-light rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-blue-dark font-semibold">Market Size</span>
                    <span className="text-zion-cyan font-bold">$19.6B</span>
                  </div>
                  <p className="text-sm text-zion-slate">Global workflow automation market (2024)</p>
                </div>
                <div className="bg-zion-blue-light rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-blue-dark font-semibold">Growth Rate</span>
                    <span className="text-green-600 font-bold">23.4% CAGR</span>
                  </div>
                  <p className="text-sm text-zion-slate">Expected annual growth through 2030</p>
                </div>
                <div className="bg-zion-blue-light rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-blue-dark font-semibold">Average ROI</span>
                    <span className="text-purple-600 font-bold">312%</span>
                  </div>
                  <p className="text-sm text-zion-slate">Within 12 months of implementation</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-6">Competitive Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-zion-cyan rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-zion-blue-dark">AI-First Approach</h4>
                    <p className="text-zion-slate">Advanced machine learning algorithms for intelligent automation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-purple rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-zion-blue-dark">Enterprise Security</h4>
                    <p className="text-zion-slate">SOC 2 compliant with enterprise-grade security features</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-green rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-zion-blue-dark">Rapid Implementation</h4>
                    <p className="text-zion-slate">Deploy workflows in days, not months</p>
                  </div>
=======
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our AI workflow automation platform stands out from the competition with advanced features, 
              superior performance, and exceptional support.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-zion-blue-light rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    Advanced AI Technology
                  </h3>
                  <p className="text-zion-slate text-sm">
                    State-of-the-art machine learning algorithms that continuously improve and adapt to your business needs.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    Enterprise Security
                  </h3>
                  <p className="text-zion-slate text-sm">
                    Bank-level security with SOC 2 compliance, encryption, and advanced access controls.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    24/7 Expert Support
                  </h3>
                  <p className="text-zion-slate text-sm">
                    Dedicated support team with deep expertise in workflow automation and AI technology.
                  </p>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
<<<<<<< HEAD
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Workflows?
          </h2>
<<<<<<< HEAD
<<<<<<< HEAD
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have transformed their operations with AI-powered workflow automation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Workflow Automation Demo Request"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Demo
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
=======
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have transformed their operations with AI-powered workflow automation. 
            Start your free trial today and see the difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
<<<<<<< HEAD
=======
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have already transformed their operations with AI-powered workflow automation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-fbd9
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a346
=======
}
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7aa0
