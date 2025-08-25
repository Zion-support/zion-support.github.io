import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Workflow, 
  Bot, 
  TrendingUp, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Settings,
  BarChart3,
  Clock,
  DollarSign,
  Star,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const AIWorkflowAutomation: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isDemoRunning, setIsDemoRunning] = useState(false);

  const features = [
    {
      title: "Intelligent Process Discovery",
      description: "AI automatically identifies and maps your business processes",
      icon: Brain,
      benefits: ["90% faster process mapping", "Real-time optimization", "Continuous improvement"]
    },
    {
      title: "Smart Workflow Orchestration",
      description: "Automatically route tasks and decisions based on AI insights",
      icon: Workflow,
      benefits: ["Intelligent task routing", "Predictive decision making", "Dynamic workflow adaptation"]
    },
    {
      title: "Automated Quality Assurance",
      description: "AI-powered validation and error prevention in real-time",
      icon: Shield,
      benefits: ["99.9% error reduction", "Proactive issue detection", "Compliance automation"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 10 workflows",
        "Basic AI automation",
        "Email support",
        "Standard integrations"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 workflows",
        "Advanced AI automation",
        "Priority support",
        "Custom integrations",
        "Analytics dashboard"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
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
      roi: "40% efficiency improvement",
      icon: "🏥"
    },
    {
      industry: "Finance",
      description: "Streamline loan processing, compliance checks, and risk assessment",
      roi: "60% faster processing",
      icon: "💳"
    },
    {
      industry: "Manufacturing",
      description: "Optimize production workflows, quality control, and supply chain management",
      roi: "35% cost reduction",
      icon: "🏭"
    },
    {
      industry: "Retail",
      description: "Automate inventory management, customer service, and order fulfillment",
      roi: "50% operational improvement",
      icon: "🛍️"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Automation
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Workflow
              </span>
              <br />
              <span className="text-white">Automation</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business processes with intelligent automation that learns, adapts, and optimizes continuously
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button 
                onClick={() => setIsDemoRunning(!isDemoRunning)}
                className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                {isDemoRunning ? <Pause className="w-5 h-5 inline mr-2" /> : <Play className="w-5 h-5 inline mr-2" />}
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400">Companies Automated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-gray-400">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">$2M+</div>
              <div className="text-gray-400">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-400">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Features That <span className="text-cyan-400">Transform</span> Workflows
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI doesn't just automate - it learns, adapts, and continuously improves your business processes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl border transition-all duration-500 ${
                  index === currentFeature 
                    ? 'border-cyan-500/50 bg-cyan-500/10 shadow-2xl shadow-cyan-500/20' 
                    : 'border-gray-700/50 bg-gray-800/20 hover:border-cyan-500/30'
                }`}
              >
                <div className="text-cyan-400 mb-4">
                  <feature.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Proven Results Across <span className="text-purple-400">Industries</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See how AI workflow automation is transforming businesses in every sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-400 text-sm mb-4">{useCase.description}</p>
                <div className="text-purple-400 font-semibold text-sm">{useCase.roi}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, <span className="text-green-400">Transparent</span> Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-green-500/50 bg-green-500/10 scale-105' 
                    : 'border-gray-700/50 bg-gray-800/20 hover:border-cyan-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-cyan-500 hover:bg-cyan-600 text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to <span className="text-cyan-400">Automate</span> Your Workflows?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join hundreds of companies that have transformed their business processes with AI workflow automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <Link 
              to="/contact"
              className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIWorkflowAutomation;