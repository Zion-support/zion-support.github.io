import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Cloud, 
  Lock, 
  Zap, 
  Brain, 
  TrendingUp, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Eye,
  Target,
  CheckCircle,
  ArrowRight,
  Server,
  Database,
  Network,
  Key,
  Fingerprint,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

export default function QuantumSecureCloud() {
  const features = [
    {
      title: "Quantum-Resistant Encryption",
      description: "Next-generation encryption algorithms that are resistant to quantum computing attacks, ensuring your data remains secure for decades to come.",
      icon: Lock,
      benefits: ["Post-quantum cryptography", "Future-proof security", "Military-grade encryption", "Zero-knowledge proofs"]
    },
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that continuously monitor and detect sophisticated cyber threats in real-time.",
      icon: Brain,
      benefits: ["Behavioral analysis", "Anomaly detection", "Predictive security", "Automated response"]
    },
    {
      title: "Zero-Trust Architecture",
      description: "Comprehensive security model that assumes no user or device is trustworthy, requiring verification at every access point.",
      icon: Shield,
      benefits: ["Identity verification", "Access control", "Network segmentation", "Continuous monitoring"]
    },
    {
      title: "Quantum Key Distribution",
      description: "Quantum physics-based key exchange that provides theoretically unbreakable encryption for ultra-sensitive communications.",
      icon: Key,
      benefits: ["Quantum entanglement", "Unhackable keys", "Real-time key generation", "Perfect forward secrecy"]
    },
    {
      title: "Advanced Compliance & Auditing",
      description: "Comprehensive compliance frameworks including SOC2, ISO 27001, GDPR, and industry-specific regulations with automated auditing.",
      icon: CheckCircle2,
      benefits: ["Automated compliance", "Real-time auditing", "Regulatory updates", "Audit trails"]
    },
    {
      title: "Disaster Recovery & Business Continuity",
      description: "Multi-region backup and recovery systems with 99.99% uptime guarantees and instant failover capabilities.",
      icon: Server,
      benefits: ["Multi-region redundancy", "Instant failover", "Point-in-time recovery", "Business continuity"]
    }
  ];

  const securityLayers = [
    {
      layer: "Physical Security",
      description: "Biometric access controls, 24/7 monitoring, and redundant power systems",
      icon: Fingerprint,
      features: ["Biometric access", "24/7 monitoring", "Redundant power", "Environmental controls"]
    },
    {
      layer: "Network Security",
      description: "Advanced firewalls, DDoS protection, and network segmentation",
      icon: Network,
      features: ["Advanced firewalls", "DDoS protection", "Network segmentation", "Traffic analysis"]
    },
    {
      layer: "Application Security",
      description: "Secure coding practices, vulnerability scanning, and penetration testing",
      icon: Cpu,
      features: ["Secure coding", "Vulnerability scanning", "Penetration testing", "Code review"]
    },
    {
      layer: "Data Security",
      description: "End-to-end encryption, data masking, and secure key management",
      icon: Database,
      features: ["End-to-end encryption", "Data masking", "Key management", "Access controls"]
    }
  ];

  const pricing = [
    {
      plan: "Secure Starter",
      price: "$399/month",
      description: "Perfect for small businesses requiring enterprise-grade security",
      features: [
        "Up to 100GB storage",
        "Basic quantum encryption",
        "Standard threat detection",
        "Email support",
        "99.9% uptime SLA"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      plan: "Quantum Professional",
      price: "$1,299/month",
      description: "Ideal for growing businesses with advanced security requirements",
      features: [
        "Up to 1TB storage",
        "Advanced quantum encryption",
        "AI threat detection",
        "Priority support",
        "99.99% uptime SLA",
        "Custom compliance"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      plan: "Enterprise Quantum",
      price: "Custom",
      description: "Tailored solutions for large organizations with specific security needs",
      features: [
        "Unlimited storage",
        "Custom quantum solutions",
        "Dedicated security team",
        "SLA guarantees",
        "On-premise options",
        "Custom development"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const complianceStandards = [
    {
      standard: "SOC 2 Type II",
      description: "Service Organization Control 2 compliance for security, availability, and confidentiality",
      icon: CheckCircle,
      status: "Certified"
    },
    {
      standard: "ISO 27001",
      description: "International standard for information security management systems",
      icon: CheckCircle,
      status: "Certified"
    },
    {
      standard: "GDPR",
      description: "General Data Protection Regulation compliance for EU data protection",
      icon: CheckCircle,
      status: "Compliant"
    },
    {
      standard: "HIPAA",
      description: "Health Insurance Portability and Accountability Act for healthcare data",
      icon: CheckCircle,
      status: "Compliant"
    },
    {
      standard: "PCI DSS",
      description: "Payment Card Industry Data Security Standard for payment processing",
      icon: CheckCircle,
      status: "Compliant"
    },
    {
      standard: "FedRAMP",
      description: "Federal Risk and Authorization Management Program for government cloud",
      icon: CheckCircle,
      status: "In Progress"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
      <SEO 
        title="Quantum-Secure Cloud Infrastructure - Zion Tech Group" 
        description="Future-proof your business with quantum-secure cloud infrastructure. Military-grade security, AI threat detection, and quantum-resistant encryption for the ultimate protection."
        keywords="quantum secure cloud, quantum encryption, cloud security, quantum key distribution, zero trust architecture"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 animate-pulse"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Quantum-Secure Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Quantum-Secure
            </span>
            <br />
            <span className="text-white">Cloud Infrastructure</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Future-proof your business with the most advanced security infrastructure available. Quantum-resistant encryption, AI threat detection, and zero-trust architecture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-300">
              Security Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Multi-Layer Security Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our quantum-secure cloud infrastructure implements defense-in-depth with multiple security layers protecting your data at every level.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {securityLayers.map((layer, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/30 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <layer.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{layer.layer}</h3>
                <p className="text-gray-300 mb-6">{layer.description}</p>
                <ul className="space-y-2">
                  {layer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge security technologies that provide unparalleled protection for your critical business data and applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-700/50 to-slate-600/30 border border-slate-500/30 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Leading Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our infrastructure meets and exceeds the most stringent security and compliance standards across industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((standard, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/30 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <standard.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {standard.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{standard.standard}</h3>
                <p className="text-gray-400 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Security Level
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to provide enterprise-grade security at every business level.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-emerald-600/20 to-teal-600/20 border-2 border-emerald-500/50' 
                    : 'bg-gradient-to-br from-slate-700/50 to-slate-600/30 border border-slate-500/30'
                } transition-all duration-300 hover:transform hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-sm font-semibold rounded-full">
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
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700'
                    : 'border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10'
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
          <div className="p-12 rounded-3xl bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking businesses that are already protected by quantum-secure cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-emerald-500/30 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all duration-300">
                Security Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}