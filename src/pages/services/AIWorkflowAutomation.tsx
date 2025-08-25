import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Zap, 
  Workflow, 
  BarChart3, 
  Shield, 
  Users, 
  Clock, 
  Target,
  TrendingUp,
  Cpu,
  Database,
  Cloud,
  Lock,
  Globe,
  Award,
  ShoppingCart
} from 'lucide-react';

export default function AIWorkflowAutomation() {
  const features = [
    {
      title: "Intelligent Process Mapping",
      description: "AI-powered workflow discovery and mapping that automatically identifies and documents business processes",
      icon: Workflow,
      benefits: ["Automated process discovery", "Visual workflow mapping", "Process optimization suggestions", "Real-time process monitoring"]
    },
    {
      title: "Smart Decision Automation",
      description: "AI-driven decision engines that automate complex business decisions based on data and rules",
      icon: Brain,
      benefits: ["Rule-based automation", "Machine learning decisions", "Risk assessment", "Compliance checking"]
    },
    {
      title: "Predictive Analytics",
      description: "Advanced analytics that predict workflow bottlenecks and optimize resource allocation",
      icon: BarChart3,
      benefits: ["Bottleneck prediction", "Resource optimization", "Performance forecasting", "Trend analysis"]
    },
    {
      title: "Integration Hub",
      description: "Seamless integration with existing systems and third-party applications",
      icon: Cpu,
      benefits: ["API-first architecture", "Pre-built connectors", "Custom integrations", "Real-time sync"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: 299,
      period: "month",
      description: "Perfect for small teams and basic workflow automation",
      features: [
        "Up to 10 workflows",
        "Basic AI automation",
        "Standard integrations",
        "Email support",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: 799,
      period: "month",
      description: "Advanced features for growing businesses",
      features: [
        "Up to 50 workflows",
        "Advanced AI automation",
        "Premium integrations",
        "Priority support",
        "Advanced analytics",
        "Custom dashboards"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: 1999,
      period: "month",
      description: "Full-scale automation for large organizations",
      features: [
        "Unlimited workflows",
        "Enterprise AI features",
        "Custom integrations",
        "24/7 dedicated support",
        "Enterprise analytics",
        "Custom development",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "Healthcare",
      description: "Automate patient intake, appointment scheduling, and medical record processing",
      icon: Users,
      benefits: ["Reduce wait times", "Improve accuracy", "Enhance patient experience"]
    },
    {
      industry: "Finance",
      description: "Automate loan processing, compliance checking, and risk assessment",
      icon: Shield,
      benefits: ["Faster processing", "Reduced errors", "Better compliance"]
    },
    {
      industry: "Manufacturing",
      description: "Optimize production workflows, quality control, and supply chain management",
      icon: Cpu,
      benefits: ["Increased efficiency", "Quality improvement", "Cost reduction"]
    },
    {
      industry: "Retail",
      description: "Automate inventory management, customer service, and order processing",
      icon: ShoppingCart,
      benefits: ["Better inventory control", "Improved customer service", "Faster order fulfillment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="AI Workflow Automation - Zion Tech Group" 
        description="Transform your business operations with AI-powered workflow automation that increases efficiency, reduces costs, and improves decision-making."
        keywords="AI workflow automation, business process automation, intelligent automation, workflow optimization, AI decision making"
        canonical="https://ziontechgroup.com/services/ai-workflow-automation"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Workflow Automation
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Intelligent Process Optimization
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business operations with AI-powered workflow automation that learns, adapts, 
            and continuously optimizes your processes for maximum efficiency and productivity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose AI Workflow Automation?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience unprecedented efficiency gains and cost savings with intelligent automation that adapts to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Increase Efficiency
              </h3>
              <p className="text-zion-slate">
                Automate repetitive tasks and optimize workflows to achieve 300-500% efficiency gains
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Reduce Costs
              </h3>
              <p className="text-zion-slate">
                Cut operational costs by 40-70% through intelligent automation and resource optimization
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-green to-zion-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Smart Decisions
              </h3>
              <p className="text-zion-slate">
                AI-powered decision making that improves accuracy and reduces human error by 90%
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-orange to-zion-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                24/7 Operation
              </h3>
              <p className="text-zion-slate">
                Continuous operation without breaks, holidays, or human limitations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Comprehensive AI workflow automation features designed to transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              Choose the plan that best fits your business needs and scale as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 ${
                tier.popular ? 'border-zion-cyan scale-105' : 'border-zion-blue-light'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">{tier.name}</h3>
                  <p className="text-zion-slate mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-zion-cyan">
                    ${tier.price}
                    <span className="text-lg text-zion-slate font-normal">/{tier.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate">
                      <div className="w-5 h-5 bg-zion-cyan rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  tier.popular 
                    ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white' 
                    : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                }`}>
                  {tier.cta}
                </button>
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
              Industry Use Cases
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              See how AI workflow automation transforms operations across different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {useCase.industry}
                </h3>
                <p className="text-sm text-zion-slate mb-4">
                  {useCase.description}
                </p>
                <ul className="text-left space-y-1">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-zion-slate flex items-center">
                      <Target className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Proven Return on Investment
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-12">
            Our clients consistently achieve remarkable results with AI workflow automation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-zion-cyan mb-2">300-500%</div>
              <div className="text-white font-semibold mb-2">Efficiency Increase</div>
              <p className="text-zion-slate-light text-sm">
                Average improvement in workflow efficiency across all implementations
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-zion-cyan mb-2">40-70%</div>
              <div className="text-white font-semibold mb-2">Cost Reduction</div>
              <p className="text-zion-slate-light text-sm">
                Significant reduction in operational costs and manual processing
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-zion-cyan mb-2">90%</div>
              <div className="text-white font-semibold mb-2">Error Reduction</div>
              <p className="text-zion-slate-light text-sm">
                Dramatic reduction in human errors and process inconsistencies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-zion-blue-dark mb-6">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-xl text-zion-slate max-w-3xl mx-auto mb-8">
            Start your AI workflow automation journey today and transform your business operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
            <button className="border-2 border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Sales
            </button>
          </div>
          
          <div className="mt-12 bg-zion-blue-light rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-zion-blue-dark mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-zion-blue-dark">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-zion-blue-dark">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-zion-blue-dark">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-zion-blue-dark">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}