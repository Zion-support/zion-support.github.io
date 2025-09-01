import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Lock, 
  Users, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Lightbulb,
  Database,
  Activity,
  Globe,
  Lock,
  Brain,
  Network,
  Server,
  FileText,
  BarChart3,
  TrendingUp,
  AlertCircle,
  ShieldCheck,
  Fingerprint,
  Key,
  Monitor
} from 'lucide-react';

export function AICybersecurityThreatIntelligencePlatform() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that continuously learn and adapt to new cyber threats in real-time."
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 surveillance of your entire digital infrastructure with instant threat alerts and response capabilities."
    },
    {
      icon: AlertTriangle,
      title: "Predictive Threat Intelligence",
      description: "Forecast potential attacks before they happen using behavioral analysis and threat pattern recognition."
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Instant threat mitigation with automated incident response that reduces response time from hours to seconds."
    },
    {
      icon: Shield,
      title: "Zero-Day Protection",
      description: "Protection against unknown threats using advanced heuristics and behavioral analysis techniques."
    },
    {
      icon: Users,
      title: "Threat Intelligence Sharing",
      description: "Collaborate with global security community to stay ahead of emerging threats and attack vectors."
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 10 endpoints",
        "Basic threat detection",
        "Email alerts",
        "Standard support",
        "10GB log storage",
        "Basic reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing companies with security needs",
      features: [
        "Up to 100 endpoints",
        "Advanced AI detection",
        "Real-time monitoring",
        "Priority support",
        "100GB log storage",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations requiring enterprise security",
      features: [
        "Unlimited endpoints",
        "Full AI threat intelligence",
        "Custom ML models",
        "24/7 dedicated support",
        "Unlimited storage",
        "Advanced compliance",
        "Custom training",
        "SLA guarantees",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "99.9% Threat Detection Rate",
      description: "Our AI platform detects and blocks threats with industry-leading accuracy, reducing false positives by 95%."
    },
    {
      icon: CheckCircle,
      title: "Reduce Response Time by 90%",
      description: "Automated threat response reduces incident response time from hours to minutes, minimizing potential damage."
    },
    {
      icon: Target,
      title: "Prevent 99.7% of Attacks",
      description: "Proactive threat intelligence prevents attacks before they can compromise your systems and data."
    },
    {
      icon: Lightbulb,
      title: "Save $2M+ Annually",
      description: "Prevent costly data breaches and reduce security operations costs with intelligent automation."
    }
  ];

  const threatTypes = [
    {
      title: "Ransomware Protection",
      description: "Advanced detection and prevention of ransomware attacks with instant file recovery capabilities.",
      icon: Lock
    },
    {
      title: "Phishing Detection",
      description: "AI-powered email analysis that identifies sophisticated phishing attempts with 99.9% accuracy.",
      icon: AlertCircle
    },
    {
      title: "DDoS Mitigation",
      description: "Real-time DDoS attack detection and automatic traffic filtering to maintain service availability.",
      icon: Network
    },
    {
      title: "Insider Threat Detection",
      description: "Behavioral analysis to identify and prevent malicious activities from within your organization.",
      icon: Users
    }
  ];

  const complianceFeatures = [
    {
      icon: ShieldCheck,
      title: "SOC 2 Type II",
      description: "Full compliance with SOC 2 Type II requirements for data security and privacy."
    },
    {
      icon: Fingerprint,
      title: "GDPR Compliance",
      description: "Ensure data protection compliance with automated privacy controls and audit trails."
    },
    {
      icon: Key,
      title: "HIPAA Ready",
      description: "Healthcare industry compliance with patient data protection and privacy requirements."
    },
    {
      icon: FileText,
      title: "PCI DSS",
      description: "Payment card industry compliance for secure financial transactions and data handling."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate-darker to-zion-slate-darkest">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-zion-purple/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-red-900/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Cybersecurity
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Cybersecurity Threat
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-zion-purple">
                Intelligence Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stay ahead of cyber threats with AI-powered intelligence that detects, 
              analyzes, and responds to security incidents in real-time. Protect your 
              business with military-grade cybersecurity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-zion-purple text-white font-semibold rounded-lg hover:from-red-600 hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI platform combines cutting-edge cybersecurity technology with 
              intelligent automation to provide comprehensive threat protection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-zion-slate-dark/50 border border-zion-slate rounded-lg hover:border-red-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-zion-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Our Cybersecurity Platform?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience enterprise-grade security with measurable improvements in threat detection and response.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-zion-slate-dark/50 border border-zion-slate rounded-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Protect against all types of cyber threats with our advanced AI detection and prevention capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threatTypes.map((threat, index) => (
              <div
                key={index}
                className="p-6 bg-zion-slate-dark/50 border border-zion-slate rounded-lg hover:border-red-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-zion-purple rounded-lg flex items-center justify-center mb-4">
                  <threat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {threat.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {threat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Industry Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet regulatory requirements and industry standards with our comprehensive compliance features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceFeatures.map((compliance, index) => (
              <div
                key={index}
                className="text-center p-6 bg-zion-slate-dark/50 border border-zion-slate rounded-lg hover:border-red-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <compliance.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {compliance.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {compliance.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Security Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the security plan that fits your organization. All plans include 
              our core AI threat detection and 24/7 security monitoring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-red-900/20 to-zion-purple/20 border-red-500/50 scale-105'
                    : 'bg-zion-slate-dark/50 border-zion-slate hover:border-red-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.name === "Enterprise" ? "/contact" : "/signup"}
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-zion-purple text-white hover:from-red-600 hover:to-zion-purple-dark'
                      : 'bg-zion-slate border border-zion-slate-light text-white hover:bg-zion-slate-light'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Digital Assets?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of organizations that trust our AI-powered cybersecurity 
              platform to protect their critical infrastructure and data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-zion-purple text-white font-semibold rounded-lg hover:from-red-600 hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-red-500/30 text-red-400 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300"
              >
                Schedule Security Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zion-slate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Zion Tech Group. All rights reserved. | 
            <Link to="/privacy" className="text-red-400 hover:text-red-300 ml-2">
              Privacy Policy
            </Link> | 
            <Link to="/terms" className="text-red-400 hover:text-red-300 ml-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default AICybersecurityThreatIntelligencePlatform;