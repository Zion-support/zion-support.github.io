import React from 'react';
import { SEO } from '../../components/SEO';
import { Shield, Eye, Lock, AlertTriangle, Zap, Users, BarChart3, CheckCircle, ArrowRight, Star, DollarSign, Globe, Smartphone, Cloud, Brain, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AICybersecuritySuite() {
  const securityFeatures = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and respond to threats in real-time, including zero-day attacks",
      icon: Brain,
      benefits: ["Real-time monitoring", "Behavioral analysis", "Anomaly detection", "Predictive threat modeling"]
    },
    {
      title: "Intelligent Incident Response",
      description: "Automated incident response with AI-driven decision making and human oversight for critical decisions",
      icon: AlertTriangle,
      benefits: ["Automated triage", "Smart escalation", "Response playbooks", "Forensic analysis"]
    },
    {
      title: "Advanced Access Control",
      description: "Multi-factor authentication, biometric verification, and adaptive access policies based on risk assessment",
      icon: Lock,
      benefits: ["MFA integration", "Biometric support", "Risk-based access", "Session monitoring"]
    },
    {
      title: "Compliance Automation",
      description: "Automated compliance monitoring for SOC2, ISO 27001, GDPR, HIPAA, and other regulatory frameworks",
      icon: Shield,
      benefits: ["Regulatory monitoring", "Automated reporting", "Audit trails", "Compliance scoring"]
    },
    {
      title: "Threat Intelligence Platform",
      description: "Real-time threat intelligence feeds, dark web monitoring, and predictive threat analysis",
      icon: Eye,
      benefits: ["Threat feeds", "Dark web monitoring", "Predictive analysis", "Intelligence sharing"]
    },
    {
      title: "Security Analytics Dashboard",
      description: "Comprehensive security metrics, risk scoring, and executive reporting with actionable insights",
      icon: BarChart3,
      benefits: ["Risk scoring", "Executive dashboards", "Trend analysis", "Actionable insights"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "AI threat detection",
        "Basic incident response",
        "MFA and access control",
        "Compliance monitoring",
        "Security dashboard",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing businesses and mid-market companies",
      features: [
        "Everything in Essential",
        "Advanced threat intelligence",
        "Automated incident response",
        "Advanced compliance automation",
        "24/7 monitoring",
        "Priority support",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations with complex security needs",
      features: [
        "Everything in Professional",
        "Custom AI training",
        "Dedicated security team",
        "Advanced threat hunting",
        "Custom compliance frameworks",
        "SLA guarantees",
        "On-site support"
      ],
      popular: false
    }
  ];

  const securitySolutions = [
    {
      category: "Network Security",
      solutions: [
        "Next-generation firewalls",
        "Intrusion detection/prevention",
        "Network segmentation",
        "VPN and remote access"
      ]
    },
    {
      category: "Endpoint Security",
      solutions: [
        "Advanced endpoint protection",
        "Device control and encryption",
        "Application whitelisting",
        "Mobile device management"
      ]
    },
    {
      category: "Cloud Security",
      solutions: [
        "Cloud access security broker",
        "Container security",
        "API security monitoring",
        "Cloud compliance automation"
      ]
    },
    {
      category: "Data Protection",
      solutions: [
        "Data loss prevention",
        "Encryption at rest and in transit",
        "Backup and disaster recovery",
        "Privacy compliance automation"
      ]
    }
  ];

  const industryCompliance = [
    {
      industry: "Healthcare",
      frameworks: ["HIPAA", "HITECH", "SOC2", "ISO 27001"],
      description: "Patient data protection and healthcare compliance automation"
    },
    {
      industry: "Finance",
      frameworks: ["PCI DSS", "SOX", "GLBA", "SOC2"],
      description: "Financial data security and regulatory compliance"
    },
    {
      industry: "Education",
      frameworks: ["FERPA", "COPPA", "SOC2", "ISO 27001"],
      description: "Student data protection and educational compliance"
    },
    {
      industry: "Government",
      frameworks: ["FISMA", "FedRAMP", "SOC2", "ISO 27001"],
      description: "Government security standards and compliance"
    }
  ];

  const testimonials = [
    {
      name: "David Chen",
      role: "CISO",
      company: "FinTech Solutions Inc.",
      content: "The AI Cybersecurity Suite has revolutionized our security posture. We've reduced incident response time by 80% and achieved SOC2 compliance in record time.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Security Director",
      company: "HealthTech Systems",
      content: "HIPAA compliance has never been easier. The automated monitoring and reporting features save us countless hours while ensuring we meet all regulatory requirements.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "EduTech Platform",
      content: "Our security team can now focus on strategic initiatives instead of routine monitoring. The AI threat detection has prevented several potential breaches.",
      rating: 5
    }
  ];

  const securityMetrics = [
    { metric: "99.9%", label: "Threat Detection Rate" },
    { metric: "80%", label: "Faster Incident Response" },
    { metric: "95%", label: "Compliance Automation" },
    { metric: "24/7", label: "Security Monitoring" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Cybersecurity Suite - Zion Tech Group"
        description="Advanced AI-powered cybersecurity solutions with automated threat detection, incident response, and compliance automation. Protect your business with cutting-edge security technology."
        keywords="AI cybersecurity, threat detection, incident response, compliance automation, security monitoring, threat intelligence"
        canonical="https://ziontechgroup.com/services/ai-cybersecurity-suite"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-orange-900/80"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Cybersecurity Suite
            <span className="block text-3xl md:text-4xl text-orange-400 mt-2">
              Next-Generation Security Protection
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Protect your business with AI-powered cybersecurity that detects threats in real-time, 
            automates incident response, and ensures compliance across all regulatory frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Security Assessment
            </Link>
            <Link 
              to="/request-quote"
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {securityMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{item.metric}</div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity protection powered by artificial intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={feature.title} className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-orange-500 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Comprehensive Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end cybersecurity protection across all attack vectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securitySolutions.map((category, index) => (
              <div key={category.category} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.solutions.map((solution, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Industry Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automated compliance monitoring for major regulatory frameworks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryCompliance.map((industry, index) => (
              <div key={industry.industry} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">{industry.industry}</h3>
                <p className="text-gray-300 mb-4 text-sm">{industry.description}</p>
                <div className="space-y-2">
                  {industry.frameworks.map((framework, idx) => (
                    <div key={idx} className="flex items-center text-xs text-orange-400">
                      <Shield className="w-3 h-3 mr-2 flex-shrink-0" />
                      {framework}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Security Investment Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security level that matches your business needs and budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={plan.name} className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border-2 ${
                plan.popular ? 'border-orange-500' : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-orange-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                      : 'border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white'
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
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what security professionals say about our AI Cybersecurity Suite
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Don't wait for a breach to happen. Proactive cybersecurity protection is your best defense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Security Assessment
            </Link>
            <Link 
              to="/request-quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Get Custom Quote
            </Link>
          </div>
          <div className="mt-8 text-orange-100">
            <p>Contact us: +1 302 464 0950 | kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}