import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Workflow, 
  Zap, 
  Brain, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Clock,
  Target,
  Award,
  Globe,
  Cpu
} from 'lucide-react';

export default function AIWorkflowAutomation() {
  const features = [
    {
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
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      examples: [
        "Patient appointment scheduling",
        "Medical record processing",
        "Insurance claim workflows",
        "Pharmacy order management"
      ]
    },
    {
      industry: "Finance",
      examples: [
        "Loan approval processes",
        "KYC verification workflows",
        "Fraud detection automation",
        "Compliance reporting"
      ]
    },
    {
      industry: "Manufacturing",
      examples: [
        "Quality control workflows",
        "Supply chain management",
        "Maintenance scheduling",
        "Inventory optimization"
      ]
    },
    {
      industry: "Retail",
      examples: [
        "Order fulfillment",
        "Customer service routing",
        "Inventory management",
        "Returns processing"
      ]
    }
  ];

  const benefits = [
    {
      metric: "80%",
      description: "Reduction in manual tasks",
      icon: Zap
    },
    {
      metric: "60%",
      description: "Faster process completion",
      icon: Clock
    },
    {
      metric: "45%",
      description: "Cost savings",
      icon: TrendingUp
    },
    {
      metric: "95%",
      description: "Error reduction",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group" 
        description="Transform your business processes with AI-powered workflow automation. Reduce manual tasks by 80%, increase efficiency by 60%, and achieve 45% cost savings."
        keywords="AI workflow automation, business process automation, workflow management, process optimization, AI automation platform"
        canonical="https://ziontechgroup.com/services/ai-workflow-automation"
      />

      {/* Hero Section */}
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
              Our AI-powered workflow automation platform delivers measurable results that impact your bottom line
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
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Powerful AI-Powered Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Everything you need to automate and optimize your business workflows
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
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                      {feature}
                    </li>
                  ))}
                </ul>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Use Cases
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              See how AI workflow automation transforms different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-4 text-center">
                  {useCase.industry}
                </h3>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Workflows?
          </h2>
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
          </div>
        </div>
      </section>
    </div>
  );
}