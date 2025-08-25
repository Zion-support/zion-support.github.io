import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  BarChart3,
  Clock,
  Users,
  ArrowRight,
  Zap,
  Brain,
  Cpu,
  Building,
  Globe,
  TrendingUp
} from 'lucide-react';

export default function AISecurityCompliance() {
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and respond to security threats in real-time",
      icon: Brain,
      benefits: ["Real-time monitoring", "Behavioral analysis", "Threat prediction", "Automated response"]
    },
    {
      title: "Compliance Automation",
      description: "Automate compliance checks and reporting for GDPR, HIPAA, SOC2, and other standards",
      icon: CheckCircle,
      benefits: ["Auto-compliance", "Real-time reporting", "Audit trails", "Policy management"]
    },
    {
      title: "Intelligent Risk Assessment",
      description: "AI-driven risk analysis that continuously evaluates your security posture",
      icon: AlertTriangle,
      benefits: ["Risk scoring", "Vulnerability assessment", "Threat modeling", "Mitigation planning"]
    },
    {
      title: "Zero-Trust Architecture",
      description: "Implement modern zero-trust security with AI-powered access control",
      icon: Lock,
      benefits: ["Identity verification", "Access control", "Network segmentation", "Continuous monitoring"]
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$399/month",
      description: "Perfect for small businesses starting their security journey",
      features: [
        "Basic threat detection",
        "GDPR compliance",
        "Email support",
        "Standard integrations",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      plan: "Professional",
      price: "$999/month",
      description: "Ideal for growing businesses with advanced security needs",
      features: [
        "Advanced AI detection",
        "Full compliance suite",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "24/7 monitoring"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$2,499/month",
      description: "For large organizations requiring enterprise-grade security",
      features: [
        "Custom AI models",
        "All compliance standards",
        "24/7 dedicated support",
        "White-label options",
        "Custom development",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const complianceStandards = [
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for EU data handling",
      icon: Shield,
      features: ["Data mapping", "Consent management", "Right to be forgotten", "Breach notification"]
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance",
      icon: Shield,
      features: ["PHI protection", "Access controls", "Audit logging", "Risk assessment"]
    },
    {
      name: "SOC2",
      description: "Service Organization Control 2 compliance for cloud services",
      icon: Shield,
      features: ["Security controls", "Availability monitoring", "Processing integrity", "Confidentiality"]
    },
    {
      name: "ISO 27001",
      description: "Information security management system certification",
      icon: Shield,
      features: ["Risk management", "Security controls", "Continuous improvement", "Documentation"]
    }
  ];

  const benefits = [
    {
      title: "Reduced Risk",
      description: "Decrease security incidents by 80-90% with AI-powered protection",
      icon: Shield
    },
    {
      title: "Cost Savings",
      description: "Save 40-60% on compliance costs through automation",
      icon: BarChart3
    },
    {
      title: "24/7 Protection",
      description: "Continuous monitoring and threat detection around the clock",
      icon: Clock
    },
    {
      title: "Peace of Mind",
      description: "Focus on your business while we handle security and compliance",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900">
      <SEO 
        title="AI Security & Compliance - Zion Tech Group" 
        description="Protect your business with AI-powered security and automated compliance. Stay ahead of threats and maintain regulatory standards."
        keywords="AI security, compliance automation, threat detection, GDPR, HIPAA, SOC2, cybersecurity, zero-trust security"
        canonical="https://ziontechgroup.com/services/ai-security-compliance"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-600/20 to-yellow-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8">
            <Shield className="w-20 h-20 mx-auto mb-6 text-red-400" />
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Security & Compliance
              <span className="block text-3xl md:text-4xl text-red-400 mt-2">
                Protect. Comply. Thrive.
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Stay ahead of evolving threats with AI-powered security and automated compliance solutions. 
              Protect your business while maintaining regulatory standards with zero effort.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Security Assessment
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
              Advanced AI-Powered Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI security platform combines cutting-edge machine learning with proven security practices 
              to deliver comprehensive protection and compliance automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
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
                      <CheckCircle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Compliance Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay compliant with all major regulatory standards through our automated compliance platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 border border-gray-600 hover:border-red-500/40">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <standard.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {standard.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {standard.description}
                </p>
                <ul className="space-y-1 text-left">
                  {standard.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-red-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Security & Compliance?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered solutions deliver measurable results that protect your business and reduce compliance overhead.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
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
              Choose the plan that best fits your security and compliance needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-red-500 shadow-lg shadow-red-500/20' 
                  : 'border-gray-600 hover:border-red-500/40'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                  <div className="text-4xl font-bold text-red-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white'
                    : 'border-2 border-red-500 text-red-400 hover:bg-red-500 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/50 to-orange-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that trust our AI-powered security and compliance solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Schedule Security Assessment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}