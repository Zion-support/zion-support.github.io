import React from 'react';
import { SEO } from '../../components/SEO';
import { Brain, Zap, Users, TrendingUp, Shield, Clock, Target, BarChart3, CheckCircle, ArrowRight, Star, DollarSign, Globe, Lock, Smartphone, Cloud, Database, FileText, AlertCircle, Workflow, GitBranch, Play, Pause, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIWorkflowOrchestrator() {
  const workflowFeatures = [
    {
      title: "Intelligent Process Automation",
      description: "AI-powered workflow automation that learns from your processes and optimizes them continuously",
      icon: Brain,
      benefits: ["Process learning", "Automated optimization", "Performance analytics", "Continuous improvement"]
    },
    {
      title: "Multi-Agent Coordination",
      description: "Intelligent agents that work together to execute complex workflows across multiple systems",
      icon: Users,
      benefits: ["Agent collaboration", "Task distribution", "Conflict resolution", "Load balancing"]
    },
    {
      title: "Dynamic Workflow Adaptation",
      description: "Workflows that automatically adapt to changing conditions and requirements in real-time",
      icon: GitBranch,
      benefits: ["Real-time adaptation", "Conditional routing", "Exception handling", "Dynamic scaling"]
    },
    {
      title: "Cross-Platform Integration",
      description: "Seamless integration with existing tools, APIs, and systems without disruption",
      icon: Cloud,
      benefits: ["API integration", "Webhook support", "Database connectivity", "Legacy system support"]
    },
    {
      title: "Advanced Analytics & Monitoring",
      description: "Comprehensive insights into workflow performance, bottlenecks, and optimization opportunities",
      icon: BarChart3,
      benefits: ["Performance metrics", "Bottleneck detection", "ROI tracking", "Predictive analytics"]
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with role-based access control and audit trails",
      icon: Shield,
      benefits: ["Role-based access", "Audit logging", "Data encryption", "Compliance reporting"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small teams and basic workflow automation",
      features: [
        "Up to 10 workflows",
        "Basic automation features",
        "Standard integrations",
        "Email support",
        "Basic analytics",
        "Up to 5 team members"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses with complex workflow needs",
      features: [
        "Everything in Starter",
        "Unlimited workflows",
        "Advanced AI features",
        "Multi-agent coordination",
        "Priority support",
        "Advanced analytics",
        "Up to 25 team members"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,499",
      period: "/month",
      description: "For large organizations with enterprise-scale automation needs",
      features: [
        "Everything in Professional",
        "Custom AI training",
        "Advanced integrations",
        "Dedicated support",
        "Custom reporting",
        "SLA guarantees",
        "Unlimited team members"
      ],
      popular: false
    }
  ];

  const workflowSolutions = [
    {
      category: "Business Process Automation",
      solutions: [
        "Invoice processing",
        "Customer onboarding",
        "Order fulfillment",
        "HR workflows"
      ]
    },
    {
      category: "IT Operations",
      solutions: [
        "DevOps automation",
        "Incident response",
        "System monitoring",
        "Backup processes"
      ]
    },
    {
      category: "Customer Service",
      solutions: [
        "Ticket routing",
        "Response automation",
        "Escalation management",
        "Customer feedback"
      ]
    },
    {
      category: "Data Processing",
      solutions: [
        "ETL pipelines",
        "Data validation",
        "Report generation",
        "Data quality checks"
      ]
    }
  ];

  const industryApplications = [
    {
      industry: "Manufacturing",
      description: "Production line automation, quality control, and supply chain management",
      benefits: ["Increased efficiency", "Quality improvement", "Cost reduction"]
    },
    {
      industry: "Healthcare",
      description: "Patient care workflows, administrative processes, and compliance automation",
      benefits: ["Better patient care", "Administrative efficiency", "Compliance adherence"]
    },
    {
      industry: "Finance",
      description: "Risk assessment, compliance monitoring, and transaction processing",
      benefits: ["Risk reduction", "Compliance automation", "Faster processing"]
    },
    {
      industry: "Retail",
      description: "Inventory management, customer service, and order processing",
      benefits: ["Inventory optimization", "Customer satisfaction", "Operational efficiency"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Operations Director",
      company: "TechFlow Manufacturing",
      content: "The AI Workflow Orchestrator has streamlined our production processes. We've seen a 35% increase in efficiency and significant cost savings.",
      rating: 5
    },
    {
      name: "Robert Chen",
      role: "IT Manager",
      company: "Global Financial Services",
      content: "Our IT operations are now fully automated. The platform handles complex workflows that used to require manual intervention.",
      rating: 5
    },
    {
      name: "Amanda Thompson",
      role: "Process Improvement Lead",
      company: "Healthcare Solutions Inc.",
      content: "Patient care workflows are now seamless and error-free. The AI adapts to changing conditions automatically.",
      rating: 5
    }
  ];

  const performanceMetrics = [
    { metric: "35%", label: "Efficiency Improvement" },
    { metric: "60%", label: "Process Automation" },
    { metric: "45%", label: "Cost Reduction" },
    { metric: "24/7", label: "Automated Operations" }
  ];

  const integrationOptions = [
    {
      category: "Cloud Platforms",
      options: ["AWS", "Azure", "Google Cloud", "Salesforce", "HubSpot"]
    },
    {
      category: "Databases",
      options: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "SQL Server"]
    },
    {
      category: "APIs & Webhooks",
      options: ["REST APIs", "GraphQL", "Webhooks", "SOAP", "Custom endpoints"]
    },
    {
      category: "Business Tools",
      options: ["Slack", "Teams", "Jira", "Asana", "Trello"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Workflow Orchestrator - Zion Tech Group"
        description="Transform your business operations with AI-powered workflow automation. Intelligent process orchestration, multi-agent coordination, and dynamic adaptation for maximum efficiency."
        keywords="AI workflow automation, process orchestration, business process automation, workflow optimization, intelligent automation"
        canonical="https://ziontechgroup.com/services/ai-workflow-orchestrator"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Workflow Orchestrator
            <span className="block text-3xl md:text-4xl text-purple-400 mt-2">
              Intelligent Process Automation
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Automate complex business processes with AI-powered workflow orchestration. 
            Multi-agent coordination, dynamic adaptation, and intelligent optimization for maximum efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/request-quote"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {performanceMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">{item.metric}</div>
                <div className="text-gray-300 text-sm md:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Advanced Workflow Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive workflow automation powered by artificial intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowFeatures.map((feature, index) => (
              <div key={feature.title} className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Solutions */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Workflow Automation Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automate workflows across all aspects of your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSolutions.map((category, index) => (
              <div key={category.category} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how different industries leverage workflow automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryApplications.map((application, index) => (
              <div key={application.industry} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">{application.industry}</h3>
                <p className="text-gray-300 mb-4 text-sm">{application.description}</p>
                <div className="space-y-2">
                  {application.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-xs text-purple-400">
                      <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your existing tools and systems without disruption
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationOptions.map((category, index) => (
              <div key={category.category} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.options.map((option, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Workflow Automation Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your automation needs and budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={plan.name} className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 ${
                plan.popular ? 'border-purple-500' : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-purple-500 hover:bg-purple-600 text-white' 
                      : 'border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Trusted by Business Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what operations professionals say about our Workflow Orchestrator
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Automate Your Workflows Today
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join leading businesses that have already transformed their operations with intelligent workflow automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link 
              to="/request-quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
          <div className="mt-8 text-purple-100">
            <p>Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}