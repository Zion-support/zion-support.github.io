import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Workflow, 
  Zap, 
  Brain, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Clock,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Settings,
  Monitor,
  AlertTriangle
} from 'lucide-react';

export default function AIWorkflowAutomation() {
  const features = [
    {
      title: "Intelligent Process Discovery",
      description: "AI-powered analysis of existing workflows to identify automation opportunities and bottlenecks.",
      icon: Brain,
      benefits: ["Process mapping", "Efficiency analysis", "Automation recommendations", "ROI calculations"]
    },
    {
      title: "Dynamic Workflow Engine",
      description: "Adaptive workflow system that learns from user behavior and optimizes processes in real-time.",
      icon: Workflow,
      benefits: ["Self-optimizing workflows", "Machine learning adaptation", "Predictive analytics", "Performance monitoring"]
    },
    {
      title: "Multi-Platform Integration",
      description: "Seamless integration with 100+ business applications and custom API connections.",
      icon: Globe,
      benefits: ["Universal connectors", "Custom API development", "Real-time sync", "Data transformation"]
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive insights into workflow performance, efficiency metrics, and optimization opportunities.",
      icon: BarChart3,
      benefits: ["Real-time metrics", "Custom reports", "Predictive insights", "Performance alerts"]
    },
    {
      title: "Intelligent Decision Engine",
      description: "AI-powered decision making with automated approvals, escalations, and exception handling.",
      icon: Cpu,
      benefits: ["Smart routing", "Risk assessment", "Compliance checking", "Automated approvals"]
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      workflows: ["Patient onboarding", "Insurance verification", "Appointment scheduling", "Medical record management"],
      roi: "40-60% efficiency improvement",
      icon: Building
    },
    {
      industry: "Finance",
      workflows: ["Loan processing", "KYC verification", "Risk assessment", "Compliance reporting"],
      roi: "50-70% faster processing",
      icon: Building
    },
    {
      industry: "Manufacturing",
      workflows: ["Quality control", "Inventory management", "Supply chain optimization", "Maintenance scheduling"],
      roi: "30-50% cost reduction",
      icon: Building
    },
    {
      industry: "Retail",
      workflows: ["Order fulfillment", "Customer service", "Inventory forecasting", "Marketing automation"],
      roi: "45-65% operational efficiency",
      icon: Building
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$299/month",
      description: "Perfect for small teams getting started with automation",
      features: [
        "Up to 10 workflows",
        "Basic integrations",
        "Standard analytics",
        "Email support",
        "5 team members"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      plan: "Professional",
      price: "$799/month",
      description: "Ideal for growing businesses with complex automation needs",
      features: [
        "Up to 50 workflows",
        "Advanced integrations",
        "AI-powered insights",
        "Priority support",
        "Unlimited team members",
        "Custom reporting"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations with specific requirements",
      features: [
        "Unlimited workflows",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees",
        "On-premise options",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group" 
        description="Transform your business operations with AI-powered workflow automation. Streamline processes, reduce costs, and boost productivity with intelligent automation solutions."
        keywords="AI workflow automation, business process automation, workflow optimization, intelligent automation, process efficiency"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Workflow className="w-4 h-4 mr-2" />
            AI-Powered Automation
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Workflow
            </span>
            <br />
            <span className="text-white">Automation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business operations with intelligent automation that learns, adapts, and optimizes your workflows in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Intelligent Features That Drive Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered workflow automation platform combines cutting-edge technology with intuitive design to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI workflow automation is transforming businesses across different sectors with measurable ROI improvements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-600/30 border border-slate-500/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                <ul className="space-y-2 mb-4">
                  {useCase.workflows.map((workflow, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <ArrowRight className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                      {workflow}
                    </li>
                  ))}
                </ul>
                <div className="text-blue-400 font-semibold text-sm">{useCase.roi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Automation Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs and automation requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500/50' 
                    : 'bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/30'
                } transition-all duration-300 hover:transform hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                    : 'border border-blue-500/30 text-blue-400 hover:bg-blue-500/10'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses that have transformed their operations with AI-powered workflow automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}