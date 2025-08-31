import React from 'react';
import { motion } from 'framer-motion';
import { 
  Workflow, 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  DollarSign,
  BarChart3,
  Bot,
  Cpu,
  Database,
  Lock,
  Rocket,
  Target,
  TrendingUp,
  FileText,
  MessageSquare,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Settings,
  GitBranch,
  Eye,
  Activity
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AIBusinessProcessAutomation: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Process Discovery",
      description: "AI automatically identifies and maps your business processes for optimization opportunities"
    },
    {
      icon: Workflow,
      title: "Visual Workflow Designer",
      description: "Drag-and-drop interface to create complex business workflows with AI-powered suggestions"
    },
    {
      icon: Bot,
      title: "RPA Integration",
      description: "Seamlessly integrate with existing RPA tools and create intelligent automation bots"
    },
    {
      icon: Database,
      title: "Multi-System Integration",
      description: "Connect with 100+ business applications including ERP, CRM, HR, and financial systems"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with role-based access control, audit trails, and compliance features"
    },
    {
      icon: Activity,
      title: "Real-time Monitoring",
      description: "Live dashboards and alerts to monitor process performance and identify bottlenecks"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses starting their automation journey",
      features: [
        "Up to 10 automated processes",
        "5 user licenses",
        "Basic integrations",
        "Email support",
        "Standard templates",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing companies with complex automation needs",
      features: [
        "Up to 50 automated processes",
        "25 user licenses",
        "Advanced integrations",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "API access",
        "Multi-tenant support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$3,999",
      period: "/month",
      description: "For large organizations requiring enterprise-grade automation",
      features: [
        "Unlimited processes",
        "Unlimited users",
        "Custom integrations",
        "Dedicated support team",
        "Custom AI model training",
        "On-premise deployment",
        "SLA guarantees",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "90% Time Savings",
      description: "Automate repetitive tasks and free up your team for strategic work"
    },
    {
      icon: DollarSign,
      title: "60% Cost Reduction",
      description: "Lower operational costs through automation and process optimization"
    },
    {
      icon: Star,
      title: "Error Elimination",
      description: "Remove human errors and ensure consistent process execution"
    },
    {
      icon: TrendingUp,
      title: "Scalable Operations",
      description: "Scale your business operations without proportional headcount increases"
    }
  ];

  const useCases = [
    {
      title: "Finance & Accounting",
      description: "Automate invoice processing, expense approvals, financial reporting, and reconciliation",
      examples: ["AP/AR automation", "Expense management", "Financial close", "Compliance reporting"]
    },
    {
      title: "Human Resources",
      description: "Streamline recruitment, onboarding, performance management, and payroll processes",
      examples: ["Candidate screening", "Employee onboarding", "Performance reviews", "Benefits administration"]
    },
    {
      title: "Customer Service",
      description: "Automate customer inquiries, ticket routing, follow-ups, and satisfaction surveys",
      examples: ["Ticket classification", "Auto-responses", "Escalation routing", "Customer feedback"]
    },
    {
      title: "Sales & Marketing",
      description: "Automate lead qualification, follow-up sequences, proposal generation, and reporting",
      examples: ["Lead scoring", "Email campaigns", "Proposal creation", "Sales analytics"]
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "Patient scheduling, claims processing, medical records management",
      icon: "🏥"
    },
    {
      name: "Manufacturing",
      description: "Supply chain management, quality control, production scheduling",
      icon: "🏭"
    },
    {
      name: "Retail",
      description: "Inventory management, order processing, customer loyalty programs",
      icon: "🛍️"
    },
    {
      name: "Financial Services",
      description: "Loan processing, compliance reporting, risk assessment",
      icon: "💳"
    },
    {
      name: "Education",
      description: "Student enrollment, course scheduling, grade management",
      icon: "🎓"
    },
    {
      name: "Real Estate",
      description: "Property management, tenant screening, maintenance requests",
      icon: "🏠"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Business Process Automation - Zion Tech Group"
        description="Transform your business operations with AI-powered process automation. Automate workflows, reduce costs, and scale efficiently with intelligent automation."
        keywords="business process automation, AI automation, workflow automation, RPA, process optimization"
        canonical="https://ziontechgroup.com/services/ai-business-process-automation"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
              <Workflow className="w-4 h-4 mr-2" />
              Intelligent Automation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Business Process Automation
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation that learns, adapts, and scales. 
              Automate complex workflows and unlock unprecedented efficiency gains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold text-white hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Automation Features
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to automate and optimize your business processes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your automation needs and scale as you grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 border rounded-xl p-8 ${
                  plan.popular 
                    ? 'border-green-500 shadow-lg shadow-green-500/20' 
                    : 'border-slate-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose AI Business Process Automation?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your operations and achieve unprecedented efficiency gains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
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
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Business Functions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Automate critical business processes across all departments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-slate-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-slate-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Tailored automation solutions for your industry's unique challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center hover:border-green-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                <p className="text-slate-300">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8"
            >
              Ready to Automate Your Business Processes?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
            >
              Join thousands of businesses that have transformed their operations with AI automation
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold text-white hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto"
            >
              Ready to transform your business processes? Our automation experts are here to help.
            </motion.p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-green-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-green-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-green-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg font-semibold text-white hover:from-green-600 hover:to-blue-700 transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIBusinessProcessAutomation;