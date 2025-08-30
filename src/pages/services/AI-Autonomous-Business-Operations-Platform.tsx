import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Rocket,
  Target,
  BarChart3,
  Users,
  Globe,
  Chip,
  Sparkles,
  Eye,
  Workflow,
  Activity,
  Monitor,
  Server,
  Cloud,
  Code,
  FileText,
  GraduationCap,
  Building,
  Briefcase,
  Lightbulb,
  Heart,
  DollarSign,
  Clock,
  Award,
  ShieldCheck,
  Wifi,
  Smartphone,
  Tablet,
  Laptop,
  Bot,
  Settings,
  BarChart,
  Users2,
  Settings as SettingsIcon,
  Palette,
  MessageCircle,
  Bell,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github
} from 'lucide-react';

export default function AIAutonomousBusinessOperationsPlatform() {
  const features = [
    {
      title: "Autonomous Decision Making",
      description: "AI agents that make intelligent business decisions without human intervention",
      icon: Brain,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Process Automation",
      description: "End-to-end automation of complex business workflows and processes",
      icon: Workflow,
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Predictive Analytics",
      description: "Advanced forecasting and trend analysis for proactive business planning",
      icon: TrendingUp,
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Intelligent Monitoring",
      description: "24/7 automated monitoring and alerting for business operations",
      icon: Monitor,
      color: "from-red-600 to-orange-600"
    }
  ];

  const capabilities = [
    {
      title: "Financial Operations",
      description: "Automated accounting, budgeting, and financial reporting",
      icon: DollarSign,
      benefits: ["Real-time financial insights", "Automated expense tracking", "Predictive cash flow analysis", "Compliance automation"]
    },
    {
      title: "Human Resources",
      description: "AI-powered recruitment, performance management, and employee engagement",
      icon: Users,
      benefits: ["Smart candidate matching", "Performance analytics", "Employee satisfaction monitoring", "Automated onboarding"]
    },
    {
      title: "Supply Chain Management",
      description: "Intelligent inventory management and logistics optimization",
      icon: Network,
      benefits: ["Demand forecasting", "Inventory optimization", "Route optimization", "Supplier performance tracking"]
    },
    {
      title: "Customer Service",
      description: "Automated customer support and relationship management",
      icon: MessageCircle,
      benefits: ["24/7 support availability", "Intelligent ticket routing", "Customer sentiment analysis", "Proactive issue resolution"]
    },
    {
      title: "Marketing Operations",
      description: "AI-driven marketing automation and campaign optimization",
      icon: Target,
      benefits: ["Personalized campaigns", "ROI optimization", "Customer segmentation", "Automated A/B testing"]
    },
    {
      title: "IT Operations",
      description: "Intelligent infrastructure management and cybersecurity",
      icon: Server,
      benefits: ["Proactive monitoring", "Automated security", "Performance optimization", "Incident response"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small businesses starting their automation journey",
      features: [
        "Basic process automation",
        "Up to 10 automated workflows",
        "Standard AI models",
        "Email support",
        "Basic analytics dashboard",
        "5 user licenses"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month",
      description: "Ideal for growing businesses requiring advanced automation",
      features: [
        "Advanced process automation",
        "Up to 50 automated workflows",
        "Custom AI model training",
        "Priority support",
        "Advanced analytics & reporting",
        "API access",
        "25 user licenses",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large enterprises requiring maximum automation",
      features: [
        "Full autonomous operations",
        "Unlimited automated workflows",
        "Enterprise AI models",
        "24/7 dedicated support",
        "Custom development",
        "On-premise deployment",
        "White-label solutions",
        "Training & certification",
        "Unlimited user licenses"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      metric: "85%",
      description: "Reduction in manual tasks",
      icon: TrendingUp
    },
    {
      metric: "300%",
      description: "Increase in operational efficiency",
      icon: Zap
    },
    {
      metric: "60%",
      description: "Cost savings on operations",
      icon: DollarSign
    },
    {
      metric: "24/7",
      description: "Business operations availability",
      icon: Clock
    }
  ];

  const industries = [
    {
      name: "Manufacturing",
      description: "Automated production planning, quality control, and supply chain optimization",
      icon: Building,
      useCases: ["Predictive maintenance", "Quality assurance", "Inventory management"]
    },
    {
      name: "Healthcare",
      description: "Patient care automation, resource optimization, and compliance management",
      icon: Heart,
      useCases: ["Patient scheduling", "Resource allocation", "Compliance tracking"]
    },
    {
      name: "Finance",
      description: "Risk assessment, fraud detection, and automated trading operations",
      icon: DollarSign,
      useCases: ["Risk analysis", "Fraud prevention", "Portfolio management"]
    },
    {
      name: "Retail",
      description: "Customer experience automation, inventory management, and sales optimization",
      icon: ShoppingCart,
      useCases: ["Customer segmentation", "Inventory optimization", "Sales forecasting"]
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-zion-purple/20 text-zion-cyan border border-zion-purple/30">
                <Bot className="w-4 h-4 mr-2" />
                Next-Generation Business Automation
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              AI Autonomous
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Business Operations
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
            >
              Transform your business with fully autonomous AI operations that work 24/7, 
              making intelligent decisions and optimizing every aspect of your business automatically.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/ai-enterprise-orchestrator"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Experience unprecedented efficiency and growth with autonomous AI operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.metric}</div>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Advanced AI-powered features that revolutionize business operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Function Automation
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive automation across all major business functions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-purple/30 rounded-xl p-8 hover:border-zion-purple/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                    <p className="text-zion-slate-light mb-4">{capability.description}</p>
                    <ul className="space-y-2">
                      {capability.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-zion-slate-light">
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

      {/* Industries Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Tailored autonomous operations for specific industry needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark border border-zion-purple/30 rounded-xl p-8 hover:border-zion-purple/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                    <p className="text-zion-slate-light mb-4">{industry.description}</p>
                    <div className="space-y-2">
                      {industry.useCases.map((useCase, useCaseIndex) => (
                        <div key={useCaseIndex} className="text-zion-slate-light text-sm">
                          • {useCase}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the plan that fits your automation needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-zion-blue border border-zion-purple/30 rounded-xl p-8 ${
                  plan.popular ? 'border-zion-cyan ring-2 ring-zion-cyan/20' : ''
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
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:from-zion-cyan-dark hover:to-zion-purple-dark'
                      : 'bg-zion-purple/20 text-zion-cyan hover:bg-zion-purple/30'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join the autonomous business revolution and experience unprecedented efficiency, 
              cost savings, and growth. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services/ai-enterprise-orchestrator"
                className="inline-flex items-center px-8 py-4 border border-zion-purple/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-purple/20 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}