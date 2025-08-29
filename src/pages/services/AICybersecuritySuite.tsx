import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  Zap, 
  Brain, 
  AlertTriangle, 
  Lock, 
  BarChart3, 
  Users, 
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  ArrowRight,
  Server,
  Network,
  Database,
  Cloud
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AICybersecuritySuite = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms detect sophisticated threats in real-time, including zero-day attacks and advanced persistent threats.",
      benefits: ["Detect threats 10x faster", "Identify unknown attack patterns", "Reduce false positives by 60%"]
    },
    {
      icon: Eye,
      title: "Behavioral Analysis",
      description: "Continuous monitoring of user and system behavior to identify anomalies and potential security breaches before they cause damage.",
      benefits: ["Proactive threat prevention", "User behavior profiling", "Anomaly detection"]
    },
    {
      icon: Zap,
      title: "Automated Incident Response",
      description: "Intelligent automation that responds to security incidents in milliseconds, containing threats and minimizing damage automatically.",
      benefits: ["Instant threat containment", "Reduced response time", "Automated remediation"]
    },
    {
      icon: BarChart3,
      title: "Security Analytics",
      description: "Comprehensive security intelligence with real-time dashboards, threat hunting tools, and predictive security analytics.",
      benefits: ["Real-time visibility", "Threat intelligence", "Predictive security"]
    }
  ];

  const securityModules = [
    {
      name: "Network Security",
      description: "Advanced firewall, intrusion detection, and network monitoring with AI-powered threat analysis",
      icon: Network
    },
    {
      name: "Endpoint Protection",
      description: "AI-driven endpoint security with behavioral analysis and automated threat response",
      icon: Server
    },
    {
      name: "Cloud Security",
      description: "Multi-cloud security monitoring and compliance across AWS, Azure, and GCP",
      icon: Cloud
    },
    {
      name: "Data Protection",
      description: "Encryption, access control, and data loss prevention with AI-powered monitoring",
      icon: Database
    },
    {
      name: "Identity & Access",
      description: "Zero-trust identity management with AI-powered authentication and access control",
      icon: Lock
    },
    {
      name: "Compliance & Audit",
      description: "Automated compliance monitoring and reporting for SOC2, ISO27001, and industry standards",
      icon: Shield
    }
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: 399,
      period: "month",
      description: "Perfect for small to medium businesses",
      features: [
        "Up to 100 endpoints",
        "AI threat detection",
        "Basic behavioral analysis",
        "Email security",
        "Web filtering",
        "24/7 monitoring",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 799,
      period: "month",
      description: "Ideal for growing organizations",
      features: [
        "Up to 500 endpoints",
        "Advanced AI features",
        "Automated incident response",
        "Cloud security",
        "Compliance reporting",
        "Priority support",
        "Custom rules",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 1499,
      period: "month",
      description: "For large organizations with complex security needs",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "Advanced analytics",
        "White-label options",
        "Dedicated SOC team",
        "Custom integrations",
        "SLA guarantees",
        "On-site deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      role: "CISO",
      company: "Global Financial Corp",
      content: "AI Cybersecurity Suite has transformed our security posture. We've reduced incident response time from hours to minutes and eliminated 90% of false positives.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Security Director",
      company: "HealthTech Solutions",
      content: "The AI-powered threat detection caught sophisticated attacks our previous tools missed. Our compliance team loves the automated reporting.",
      rating: 5
    },
    {
      name: "Robert Martinez",
      role: "IT Security Manager",
      company: "Manufacturing Plus",
      content: "Automated incident response has been a game-changer. Threats are contained before they can spread, saving us millions in potential damages.",
      rating: 5
    }
  ];

  const complianceStandards = [
    "SOC 2 Type II",
    "ISO 27001",
    "PCI DSS",
    "HIPAA",
    "GDPR",
    "NIST Cybersecurity Framework",
    "CIS Controls",
    "MITRE ATT&CK"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="AI Cybersecurity Suite — Zion Tech Group | AI-Powered Security Platform"
        description="Comprehensive AI-powered cybersecurity platform for threat detection, prevention, and incident response. Detect threats 10x faster with 60% fewer false positives."
        keywords="AI cybersecurity, threat detection, incident response, security automation, compliance, SOC2, ISO27001"
        canonical="https://ziontechgroup.com/services/ai-cybersecurity-suite"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 text-red-400 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2"/>
              AI-Powered Security
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Suite
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent"> Protection</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Next-generation cybersecurity powered by artificial intelligence. Detect threats 10x faster, 
              reduce false positives by 60%, and automate incident response for comprehensive protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                📞 Call +1 (302) 464-0950
              </a>
              <a 
                href="/request-quote" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
              >
                Get Security Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose AI Cybersecurity Suite?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">10x Faster Detection</h3>
              <p className="text-gray-300">AI identifies threats in milliseconds</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">60% Fewer False Positives</h3>
              <p className="text-gray-300">AI reduces alert fatigue</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Automated Response</h3>
              <p className="text-gray-300">Threats contained instantly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white"/>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 SOC Support</h3>
              <p className="text-gray-300">Expert security monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced AI Security Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-8 hover:border-red-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Comprehensive Security Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityModules.map((module, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-red-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <module.icon className="w-6 h-6 text-white"/>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{module.name}</h3>
                <p className="text-gray-300 text-sm">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industry Compliance & Standards</h2>
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-8 h-8 text-white"/>
                  </div>
                  <p className="text-white font-semibold">{standard}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300">
                Our platform helps organizations achieve and maintain compliance with major industry standards 
                through automated monitoring, reporting, and audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Transparent Security Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 border rounded-xl p-8 relative ${
                tier.popular 
                  ? 'border-red-500/50 bg-slate-800/70' 
                  : 'border-white/10'
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${tier.price}</span>
                    <span className="text-gray-400 ml-2">/{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"/>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="tel:+13024640950" 
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:scale-105'
                      : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Security Leaders Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current"/>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Secure Your Organization?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of organizations already protected by AI Cybersecurity Suite. 
            Get a free security assessment and discover how AI can transform your security posture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              📞 Call +1 (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              ✉️ Email Us
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008 Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="text-red-400 hover:text-red-300">ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecuritySuite;