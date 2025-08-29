import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Workflow, 
  Zap, 
  Brain, 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  BarChart3,
  Settings,
  GitBranch,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIWorkflowOrchestrator() {
  const features = [
    {
      icon: Workflow,
      title: "Intelligent Workflow Design",
      description: "AI-powered workflow builder with drag-and-drop interface and smart suggestions"
    },
    {
      icon: Brain,
      title: "Machine Learning Integration",
      description: "Seamlessly integrate ML models and AI services into your workflows"
    },
    {
      icon: Zap,
      title: "Real-time Automation",
      description: "Trigger workflows based on events, schedules, or AI predictions"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Role-based access control, audit trails, and compliance monitoring"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Monitor workflow efficiency and optimize bottlenecks automatically"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Multi-user workflow management with approval chains and notifications"
    }
  ];

  const useCases = [
    {
      title: "Customer Onboarding",
      description: "Automate customer verification, account setup, and welcome processes",
      icon: Users
    },
    {
      title: "Data Processing Pipelines",
      description: "ETL workflows with AI-powered data validation and transformation",
      icon: Database
    },
    {
      title: "Marketing Campaigns",
      description: "Trigger campaigns based on customer behavior and AI insights",
      icon: TrendingUp
    },
    {
      title: "IT Operations",
      description: "Automate incident response, system monitoring, and maintenance",
      icon: Server
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
        "Basic AI integration",
        "Email notifications",
        "Standard support",
        "5 team members"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses with complex automation needs",
      features: [
        "Up to 50 workflows",
        "Advanced AI capabilities",
        "Custom integrations",
        "Priority support",
        "Unlimited team members",
        "Advanced analytics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations requiring custom solutions and dedicated support",
      features: [
        "Unlimited workflows",
        "Custom AI models",
        "On-premise deployment",
        "Dedicated support",
        "Custom integrations",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <>
      <SEO 
        title="AI Workflow Orchestrator - Zion Tech Group"
        description="Transform your business processes with AI-powered workflow automation. Streamline operations, reduce manual work, and boost productivity with intelligent orchestration."
        canonical="/services/ai-workflow-orchestrator"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6"
            >
              <Workflow className="w-4 h-4 mr-2" />
              AI-Powered Workflow Automation
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              AI Workflow
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Orchestrator
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
            >
              Automate complex business processes with AI intelligence. Design, deploy, and monitor workflows that adapt and learn from your business operations.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/request-quote"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose AI Workflow Orchestrator?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation that learns and adapts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Powerful Use Cases</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how AI Workflow Orchestrator can transform your business processes
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
                className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-slate-300 text-lg">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-800/50 p-8 rounded-xl border ${
                  plan.popular 
                    ? 'border-blue-500/50 bg-blue-500/5' 
                    : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/request-quote"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Workflows?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of companies already automating their business processes with AI intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-quote"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}