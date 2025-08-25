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
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function AIWorkflowAutomation() {
  const features = [
    {
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
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
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
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$1,999/month",
      description: "For large organizations requiring enterprise-grade automation",
      features: [
        "Unlimited workflows",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group" 
        description="Transform your business processes with AI-powered workflow automation. Reduce manual work, increase efficiency, and drive growth."
        keywords="AI workflow automation, business process automation, intelligent automation, workflow optimization, AI business solutions"
        canonical="https://ziontechgroup.com/services/ai-workflow-automation"
      />

      {/* Hero Section */}
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
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white'
                    : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI workflow automation adapts to your industry's unique requirements and compliance needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
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
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/50 to-blue-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Workflows?
          </h2>
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
          </div>
        </div>
      </section>
    </div>
  );
}