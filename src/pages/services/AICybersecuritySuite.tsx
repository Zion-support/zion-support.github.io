import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, Zap, Lock, BarChart3, Users, Clock, CheckCircle, ArrowRight, ExternalLink, Brain, Cpu, Database, Globe, Target, Network, Server, Cloud, AlertTriangle, Activity, Key } from 'lucide-react';
import { SEO } from '@/components/SEO';

const AICybersecuritySuite = () => {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that detect and respond to cyber threats in real-time with 99.9% accuracy.',
      benefits: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Anomaly identification',
        'Automated response'
      ],
      price: 'From $399/month'
    },
    {
      icon: Eye,
      title: 'Continuous Security Monitoring',
      description: '24/7 security monitoring across all endpoints, networks, and cloud environments with intelligent alerting.',
      benefits: [
        '24/7 monitoring',
        'Multi-environment coverage',
        'Intelligent alerting',
        'Incident tracking'
      ],
      price: 'From $299/month'
    },
    {
      icon: Zap,
      title: 'Automated Incident Response',
      description: 'AI-driven incident response that automatically contains threats and initiates recovery procedures.',
      benefits: [
        'Automated containment',
        'Recovery procedures',
        'Playbook execution',
        'Response analytics'
      ],
      price: 'From $499/month'
    },
    {
      icon: Lock,
      title: 'Zero Trust Security Framework',
      description: 'Implement and manage zero trust security policies with continuous verification and access control.',
      benefits: [
        'Identity verification',
        'Access control',
        'Policy management',
        'Compliance reporting'
      ],
      price: 'From $599/month'
    }
  ];

  const securityModules = [
    {
      title: 'Endpoint Protection',
      description: 'Advanced endpoint detection and response with AI-powered threat hunting.',
      icon: Target,
      features: ['Malware detection', 'Behavioral analysis', 'Threat hunting', 'Automated remediation']
    },
    {
      title: 'Network Security',
      description: 'Intelligent network monitoring and intrusion detection with traffic analysis.',
      icon: Network,
      features: ['Traffic analysis', 'Intrusion detection', 'DDoS protection', 'Network segmentation']
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive cloud security with configuration management and compliance monitoring.',
      icon: Cloud,
      features: ['Configuration management', 'Compliance monitoring', 'Access control', 'Data protection']
    },
    {
      title: 'Identity & Access Management',
      description: 'Advanced identity management with multi-factor authentication and privileged access control.',
      icon: Key,
      features: ['Multi-factor auth', 'Privileged access', 'Identity governance', 'Single sign-on']
    }
  ];

  const complianceFrameworks = [
    { name: 'SOC 2 Type II', description: 'Service Organization Control 2 compliance certification' },
    { name: 'ISO 27001', description: 'Information security management system certification' },
    { name: 'GDPR', description: 'General Data Protection Regulation compliance' },
    { name: 'HIPAA', description: 'Health Insurance Portability and Accountability Act' },
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard' },
    { name: 'NIST', description: 'National Institute of Standards and Technology framework' }
  ];

  const threatIntelligence = [
    {
      title: 'Real-time Threat Feeds',
      description: 'Live threat intelligence from global security research and dark web monitoring.',
      coverage: 'Global threat coverage'
    },
    {
      title: 'Vulnerability Management',
      description: 'Automated vulnerability scanning and patch management with risk assessment.',
      coverage: 'Continuous scanning'
    },
    {
      title: 'Security Analytics',
      description: 'Advanced security analytics with machine learning and predictive insights.',
      coverage: 'Predictive analysis'
    },
    {
      title: 'Incident Forensics',
      description: 'Digital forensics and incident investigation with evidence preservation.',
      coverage: 'Full investigation support'
    }
  ];

  const pricingTiers = [
    {
      name: 'Essential',
      price: '$399/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic threat detection',
        'Endpoint protection',
        'Email security',
        'Basic reporting',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$999/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced threat detection',
        'Network security monitoring',
        'Cloud security',
        'Advanced analytics',
        'Priority support',
        'Compliance reporting'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex security needs',
      features: [
        'Full security suite',
        'Custom integrations',
        'Dedicated security team',
        'SLA guarantees',
        'On-premise deployment',
        'Custom compliance'
      ]
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO
        title="AI Cybersecurity Suite — Zion Tech Group | AI-Powered Security Platform"
        description="Comprehensive AI-powered cybersecurity platform for threat detection, prevention, and incident response. Detect threats 10x faster with 60% fewer false positives."
        keywords="AI cybersecurity, threat detection, incident response, security automation, compliance, SOC2, ISO27001"
        canonical="https://ziontechgroup.com/services/ai-cybersecurity-suite"
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-orange-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-slate-900/50 px-4 py-1 text-red-300">
            <Shield className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wider">AI CYBERSECURITY SUITE</span>
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
            Protect Your Business with
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent"> AI-Powered Security</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Advanced cybersecurity powered by artificial intelligence. Detect, prevent, and respond to threats in real-time with unmatched accuracy.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="rounded-lg bg-gradient-to-r from-red-500 to-orange-600 px-6 py-3 font-semibold hover:from-red-400 hover:to-orange-500 transition-all">
              Start Free Trial
            </Link>
            <Link to="/request-quote" className="rounded-lg border border-red-400/40 px-6 py-3 font-semibold text-red-300 hover:bg-white/5 transition-all">
              Request Demo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-red-400/30 hover:bg-white/10">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/20 to-orange-600/20 text-red-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-300 mb-6">{feature.description}</p>
              <ul className="space-y-3 mb-6">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-red-300">{feature.price}</div>
            </div>
          ))}
        </div>

        {/* Security Modules */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Comprehensive Security Modules</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {securityModules.map((module, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-500/20 to-orange-600/20 text-red-300">
                  <module.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{module.description}</p>
                <ul className="text-xs text-slate-400 space-y-1">
                  {module.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Frameworks */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Compliance & Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <h3 className="text-lg font-semibold mb-2">{framework.name}</h3>
                <p className="text-sm text-slate-300">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Threat Intelligence */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Threat Intelligence</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {threatIntelligence.map((intel, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <h3 className="text-lg font-semibold mb-2">{intel.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{intel.description}</p>
                <div className="text-sm font-semibold text-green-400">{intel.coverage}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Flexible Pricing Plans</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`rounded-xl border p-8 backdrop-blur-md ${
                tier.name === 'Professional' 
                  ? 'border-2 border-red-400 bg-gradient-to-br from-red-500/10 to-orange-600/10 relative' 
                  : 'border-white/10 bg-white/5'
              }`}>
                {tier.name === 'Professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="text-4xl font-bold text-red-300 mb-6">{tier.price}</div>
                <p className="text-slate-300 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                      <span className="text-slate-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={tier.name === 'Enterprise' ? '/contact' : '/contact'} 
                  className={`w-full rounded-lg py-3 text-center font-semibold transition-all ${
                    tier.name === 'Enterprise'
                      ? 'border border-red-400 text-red-300 hover:bg-red-400 hover:text-white'
                      : 'bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-400 hover:to-orange-500'
                  }`}
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Security Metrics */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Security Performance Metrics</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <div className="text-3xl font-bold text-red-300 mb-2">99.9%</div>
              <div className="text-sm text-slate-300">Threat Detection Rate</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <div className="text-3xl font-bold text-red-300 mb-2">&lt;1s</div>
              <div className="text-sm text-slate-300">Response Time</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <div className="text-3xl font-bold text-red-300 mb-2">24/7</div>
              <div className="text-sm text-slate-300">Monitoring Coverage</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <div className="text-3xl font-bold text-red-300 mb-2">100%</div>
              <div className="text-sm text-slate-300">Compliance Coverage</div>
            </div>
          </div>
        </div>

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
        <div className="text-center">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-red-500/10 to-orange-600/10 p-12 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Business?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already protected by AI-powered cybersecurity that never sleeps.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="rounded-lg bg-gradient-to-r from-red-500 to-orange-600 px-8 py-4 font-semibold hover:from-red-400 hover:to-orange-500 transition-all">
                Start Your Free Trial
              </Link>
              <a href="mailto:kleber@ziontechgroup.com" className="rounded-lg border border-red-400 px-8 py-4 font-semibold text-red-300 hover:bg-red-400 hover:text-white transition-all">
                Schedule a Demo
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              Contact: +1 302 464 0950 · kleber@ziontechgroup.com · 364 E Main St STE 1008 Middletown DE 19709
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICybersecuritySuite;