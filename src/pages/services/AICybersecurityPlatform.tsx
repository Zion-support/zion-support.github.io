import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Users, 
  Target, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  DollarSign,
  Activity,
  Database,
  Cpu,
  Network,
  Fingerprint,
  Key,
  Bug,
  Virus,
  Fire,
  Globe,
  Server,
  Smartphone,
  Monitor,
  CreditCard
} from 'lucide-react';

export default function AICybersecurityPlatform() {
  const features = [
    {
      icon: Shield,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that detect and respond to threats in real-time with 99.9% accuracy.',
      benefits: ['Zero-day threat detection', 'Behavioral analysis', 'Anomaly identification', 'Automated response']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 surveillance across all endpoints, networks, and cloud environments with instant alerting.',
      benefits: ['Real-time monitoring', 'Instant notifications', 'Comprehensive coverage', 'Historical analysis']
    },
    {
      icon: Lock,
      title: 'Zero-Trust Architecture',
      description: 'Implement comprehensive zero-trust security model with identity verification at every access point.',
      benefits: ['Identity verification', 'Access control', 'Network segmentation', 'Privilege management']
    },
    {
      icon: Zap,
      title: 'Automated Incident Response',
      description: 'AI-driven incident response that automatically contains and remediates threats within seconds.',
      benefits: ['Instant containment', 'Automated remediation', 'Playbook execution', 'Recovery automation']
    }
  ];

  const securityLayers = [
    {
      icon: Network,
      title: 'Network Security',
      description: 'Advanced firewall, intrusion detection, and network segmentation',
      features: ['Next-gen firewalls', 'IDS/IPS systems', 'Network monitoring', 'Traffic analysis']
    },
    {
      icon: Server,
      title: 'Endpoint Protection',
      description: 'Comprehensive endpoint security for all devices and operating systems',
      features: ['Antivirus protection', 'Device control', 'Application whitelisting', 'Data encryption']
    },
    {
      icon: Globe,
      title: 'Cloud Security',
      description: 'Multi-cloud security with compliance and governance controls',
      features: ['Cloud access security', 'Compliance monitoring', 'Data protection', 'Identity management']
    },
    {
      icon: Smartphone,
      title: 'Mobile Security',
      description: 'Mobile device management and application security',
      features: ['Mobile device management', 'App security', 'Data protection', 'Remote wipe']
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$3,500',
      period: '/month',
      description: 'Perfect for small businesses with basic security needs',
      features: [
        'AI threat detection',
        'Basic monitoring',
        'Email security',
        'Standard support',
        'Up to 100 endpoints',
        'Basic reporting',
        'Compliance templates'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing companies with advanced security requirements',
      features: [
        'Advanced AI detection',
        '24/7 monitoring',
        'Full endpoint protection',
        'Priority support',
        'Up to 500 endpoints',
        'Advanced reporting',
        'Custom playbooks',
        'API access',
        'Threat intelligence'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$18,000',
      period: '/month',
      description: 'For large organizations requiring enterprise-grade security',
      features: [
        'Enterprise AI platform',
        'Unlimited endpoints',
        'Custom development',
        '24/7 dedicated support',
        'Advanced analytics',
        'Custom integrations',
        'White-label solutions',
        'On-premise deployment',
        'Dedicated security team',
        'Compliance certification'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2 compliance for data security',
      icon: Award
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      icon: Shield
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      icon: Lock
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      icon: Users
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      icon: CreditCard
    },
    {
      name: 'NIST',
      description: 'National Institute of Standards and Technology framework',
      icon: Star
    }
  ];

  const threatIntelligence = [
    {
      title: 'Real-time Threat Feeds',
      description: 'Live intelligence from global security networks and research teams',
      metrics: ['1M+ threat indicators', 'Global coverage', 'Instant updates', 'Automated integration']
    },
    {
      title: 'Behavioral Analysis',
      description: 'AI-powered analysis of user and system behavior patterns',
      metrics: ['99.9% detection rate', 'False positive reduction', 'Pattern recognition', 'Predictive alerts']
    },
    {
      title: 'Vulnerability Management',
      description: 'Continuous scanning and assessment of security vulnerabilities',
      metrics: ['Automated scanning', 'Risk prioritization', 'Patch management', 'Compliance tracking']
    },
    {
      title: 'Incident Response',
      description: 'Automated response and recovery from security incidents',
      metrics: ['<30 second response', 'Automated containment', 'Recovery automation', 'Forensic analysis']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-orange-50">
      <Helmet>
        <title>AI-Powered Cybersecurity Platform - Zion Tech Group</title>
        <meta name="description" content="Protect your business with our advanced AI-powered cybersecurity platform. Real-time threat detection, zero-trust architecture, and automated incident response." />
        <meta name="keywords" content="AI cybersecurity, threat detection, zero-trust security, incident response, security platform, cyber defense" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-cybersecurity-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-900 via-gray-900 to-black text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-gray-600/20 to-black/20"></div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm mb-8">
            <Shield className="w-4 h-4 text-red-300" />
            <span>AI-Powered Cybersecurity</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Advanced Cybersecurity
            <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto mb-10 leading-relaxed">
            Protect your business with the most advanced AI-powered cybersecurity platform. 
            Real-time threat detection, zero-trust architecture, and automated incident response.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Watch Demo
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>99.9% Threat Detection</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>1000+ Protected Organizations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered cybersecurity platform combines cutting-edge technology with intelligent automation 
              to provide comprehensive protection against all types of cyber threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Multi-Layer Security Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our defense-in-depth approach provides comprehensive protection across all attack vectors 
              and ensures no single point of failure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityLayers.map((layer, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <layer.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{layer.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{layer.description}</p>
                
                <ul className="space-y-3">
                  {layer.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <Shield className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Intelligence Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced Threat Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead of emerging threats with our comprehensive threat intelligence platform 
              that provides real-time insights and automated response capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threatIntelligence.map((intel, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{intel.title}</h3>
                <p className="text-gray-600 mb-6">{intel.description}</p>
                
                <div className="space-y-3">
                  {intel.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                      <Activity className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="font-semibold">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Industry Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform meets the highest security standards and compliance requirements 
              across industries and regulatory frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <framework.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{framework.name}</h3>
                <p className="text-sm text-gray-600">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Security Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the security plan that best fits your organization's needs. All plans include 
              our core AI-powered protection and dedicated support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                plan.popular ? 'border-red-500 ring-4 ring-red-500/20' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Need a custom security solution?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold"
            >
              Contact our security team
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-red-900 via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-10">
            Join thousands of organizations already protected by our AI-powered cybersecurity platform. 
            Don't wait until it's too late - secure your future today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-red-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Security Audit
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-red-400" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              <span>24/7 security support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}