import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Lock, 
  Users, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Smartphone,
  Monitor,
  Database,
  Server,
  Network,
  Eye,
  AlertTriangle,
  BarChart3,
  Settings,
  Key,
  Fingerprint,
  Building,
  Cloud,
  Wifi
} from 'lucide-react';

const ZeroTrustNetworkAccess: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Identity-Based Access Control",
      description: "Replace traditional VPNs with identity-centric access control that continuously verifies user and device trust.",
      benefits: ["Eliminate VPN vulnerabilities", "User-specific access policies", "Continuous verification"]
    },
    {
      icon: Lock,
      title: "Micro-Segmentation",
      description: "Granular network segmentation that isolates applications and resources based on user identity and context.",
      benefits: ["Reduce attack surface by 90%", "Application-level security", "Dynamic access control"]
    },
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring and threat detection with instant alerts and automated response capabilities.",
      benefits: ["24/7 security monitoring", "Instant threat detection", "Automated response"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Direct-to-application routing that eliminates network hops and improves user experience significantly.",
      benefits: ["Faster access speeds", "Reduced latency", "Better user experience"]
    }
  ];

  const securityBenefits = [
    {
      title: "Eliminate VPN Vulnerabilities",
      description: "Replace traditional VPNs with secure, identity-based access control",
      icon: Shield,
      metric: "90%"
    },
    {
      title: "Reduce Attack Surface",
      description: "Micro-segmentation and least-privilege access minimize potential attack vectors",
      icon: Lock,
      metric: "85%"
    },
    {
      title: "Improve Compliance",
      description: "Built-in compliance features for SOC 2, ISO 27001, and regulatory requirements",
      icon: CheckCircle,
      metric: "100%"
    },
    {
      title: "Enhanced User Experience",
      description: "Faster, more reliable access without VPN complexity and performance issues",
      icon: Zap,
      metric: "3x"
    }
  ];

  const useCases = [
    {
      title: "Remote Workforce Security",
      description: "Secure access for remote employees with identity-based controls and continuous verification.",
      icon: Users,
      industries: ["Technology", "Finance", "Healthcare", "Education"]
    },
    {
      title: "Third-Party Access",
      description: "Secure, controlled access for contractors, vendors, and partners with time-limited permissions.",
      icon: Building,
      industries: ["Manufacturing", "Consulting", "Legal", "Real Estate"]
    },
    {
      title: "Cloud Application Access",
      description: "Secure access to cloud applications and services without exposing internal networks.",
      icon: Cloud,
      industries: ["SaaS", "E-commerce", "Media", "Startups"]
    },
    {
      title: "Data Center Security",
      description: "Protect sensitive data centers with granular access controls and micro-segmentation.",
      icon: Server,
      industries: ["Banking", "Government", "Defense", "Research"]
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Perfect for growing businesses",
      features: [
        "Up to 100 users",
        "Identity-based access control",
        "Basic micro-segmentation",
        "Real-time monitoring",
        "Standard support",
        "Basic compliance reporting"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Up to 500 users",
        "Advanced micro-segmentation",
        "AI-powered threat detection",
        "Advanced compliance features",
        "Priority support",
        "Custom integrations",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: true
    },
    {
      name: "Ultra Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For Fortune 500 companies",
      features: [
        "Unlimited users",
        "Custom security policies",
        "Dedicated security team",
        "Custom compliance frameworks",
        "24/7 dedicated support",
        "On-premise deployment options",
        "Custom SLA terms"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const complianceFeatures = [
    "SOC 2 Type II Compliance",
    "ISO 27001 Certification",
    "GDPR Compliance",
    "HIPAA Compliance",
    "PCI DSS Support",
    "FedRAMP Ready",
    "Zero-Trust Architecture",
    "Continuous Monitoring"
  ];

  return (
    <>
      <Helmet>
        <title>Zero Trust Network Access (ZTNA) — Zion Tech Group | Modern Secure Access Solution</title>
        <meta name="description" content="Eliminate VPN vulnerabilities with modern Zero Trust Network Access. Identity-based access control, micro-segmentation, and continuous verification for enterprise security."/>
        <meta property="og:title" content="Zero Trust Network Access (ZTNA) — Zion Tech Group"/>
        <meta property="og:description" content="Modern secure access solution that eliminates VPN vulnerabilities with identity-based access control and continuous verification."/>
        <meta property="og:url" content="https://ziontechgroup.com/services/zero-trust-network-access"/>
        <link rel="canonical" href="https://ziontechgroup.com/services/zero-trust-network-access"/>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl mr-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <span className="text-purple-400 text-lg font-medium">Enterprise Security</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zero Trust
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {" "}Network Access
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Replace traditional VPNs with modern, secure access control. Our Zero Trust Network Access 
              solution provides identity-based security, micro-segmentation, and continuous verification 
              to protect your enterprise from modern cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Zero Trust Network Access?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Modern security for the modern enterprise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/40 transition-all duration-300">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Measurable Security Improvements
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real results from implementing Zero Trust architecture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityBenefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg mr-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-purple-400">{benefit.metric}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For Your Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored solutions for various business sectors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-lg w-fit mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.industries.map((industry, idx) => (
                      <span key={idx} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise Compliance & Security
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built-in compliance features for enterprise requirements
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center hover:border-purple-400/40 transition-all duration-300">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <span className="text-white font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Scalable solutions for organizations of all sizes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-purple-400 bg-gradient-to-br from-purple-600/20 to-blue-600/20' 
                    : 'border-white/20 hover:border-purple-400/40'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Network?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading enterprises that have already eliminated VPN vulnerabilities and implemented Zero Trust security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+13024640950" className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Call +1 302 464 0950
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZeroTrustNetworkAccess;