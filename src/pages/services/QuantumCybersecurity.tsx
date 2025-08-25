import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Users, 
  Globe, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Clock,
  Target,
  Activity,
  Search,
  AlertTriangle,
  Database,
  Network,
  Smartphone,
  Monitor,
  Server,
  Key,
  Fingerprint,
  Globe2,
  Building,
  Car,
  Plane,
  Train,
  Cloud,
  Mail,
  Brain
} from 'lucide-react';

export default function QuantumCybersecurity() {
  const features = [
    {
      title: "Quantum-Resistant Encryption",
      description: "Next-generation cryptographic algorithms that remain secure even against quantum computers",
      icon: Lock,
      color: "text-purple-400",
      details: [
        "Post-quantum cryptography",
        "Lattice-based encryption",
        "Hash-based signatures",
        "Code-based encryption"
      ]
    },
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms that detect and respond to threats in real-time",
      icon: Eye,
      color: "text-cyan-400",
      details: [
        "Behavioral analysis",
        "Anomaly detection",
        "Threat intelligence",
        "Predictive security"
      ]
    },
    {
      title: "Zero-Trust Architecture",
      description: "Never trust, always verify security model that protects against insider and external threats",
      icon: Shield,
      color: "text-green-400",
      details: [
        "Identity verification",
        "Access control",
        "Network segmentation",
        "Continuous monitoring"
      ]
    },
    {
      title: "Advanced Endpoint Protection",
      description: "Comprehensive protection for all devices with AI-driven threat prevention",
      icon: Smartphone,
      color: "text-yellow-400",
      details: [
        "Real-time scanning",
        "Behavioral blocking",
        "Ransomware protection",
        "Device control"
      ]
    },
    {
      title: "Network Security Monitoring",
      description: "24/7 network surveillance with advanced intrusion detection and prevention",
      icon: Network,
      color: "text-red-400",
      details: [
        "Traffic analysis",
        "Threat hunting",
        "Incident response",
        "Forensic analysis"
      ]
    },
    {
      title: "Compliance & Governance",
      description: "Automated compliance monitoring for industry standards and regulations",
      icon: CheckCircle,
      color: "text-blue-400",
      details: [
        "SOC 2 compliance",
        "GDPR compliance",
        "HIPAA compliance",
        "PCI DSS compliance"
      ]
    }
  ];

  const securityLayers = [
    {
      title: "Perimeter Security",
      description: "Advanced firewall protection with DDoS mitigation and intrusion prevention",
      icon: Shield,
      features: ["Next-gen firewalls", "DDoS protection", "Web application firewall", "VPN solutions"]
    },
    {
      title: "Identity & Access Management",
      description: "Multi-factor authentication and privileged access management",
      icon: Key,
      features: ["MFA/2FA", "Single sign-on", "Privileged access", "Identity governance"]
    },
    {
      title: "Data Protection",
      description: "End-to-end encryption and data loss prevention",
      icon: Database,
      features: ["Data encryption", "DLP systems", "Backup encryption", "Key management"]
    },
    {
      title: "Cloud Security",
      description: "Comprehensive cloud security posture management",
      icon: Cloud,
      features: ["CSPM", "Cloud access security", "Container security", "Serverless protection"]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$1,800",
      period: "/month",
      description: "Basic quantum-safe security for small businesses",
      features: [
        "Up to 50 endpoints",
        "Basic threat detection",
        "Email security",
        "24/7 monitoring",
        "Standard support",
        "Basic compliance"
      ],
      popular: false,
      color: "from-gray-600 to-gray-700"
    },
    {
      name: "Professional",
      price: "$3,200",
      period: "/month",
      description: "Advanced security for growing organizations",
      features: [
        "Up to 500 endpoints",
        "AI threat detection",
        "Advanced analytics",
        "Incident response",
        "Priority support",
        "Full compliance",
        "Custom integrations",
        "Security training"
      ],
      popular: true,
      color: "from-cyan-500 to-blue-600"
    },
    {
      name: "Enterprise",
      price: "$6,500",
      period: "/month",
      description: "Enterprise-grade security with custom solutions",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "Dedicated team",
        "24/7 support",
        "Custom development",
        "On-premise options",
        "SLA guarantees",
        "Executive reporting"
      ],
      popular: false,
      color: "from-purple-600 to-pink-600"
    }
  ];

  const benefits = [
    {
      title: "Future-Proof Security",
      description: "Quantum-resistant encryption that protects against tomorrow's threats",
      icon: Target,
      color: "text-green-400"
    },
    {
      title: "99.99% Uptime",
      description: "Continuous protection with guaranteed service availability",
      icon: Clock,
      color: "text-cyan-400"
    },
    {
      title: "AI-Powered Defense",
      description: "Machine learning that adapts and improves threat detection",
      icon: Brain,
      color: "text-purple-400"
    },
    {
      title: "Global Coverage",
      description: "Protect your business anywhere in the world",
      icon: Globe,
      color: "text-blue-400"
    },
    {
      title: "Compliance Ready",
      description: "Meet all industry standards and regulatory requirements",
      icon: CheckCircle,
      color: "text-yellow-400"
    },
    {
      title: "Expert Support",
      description: "24/7 access to cybersecurity experts",
      icon: Users,
      color: "text-red-400"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant security for patient data and medical systems",
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Finance",
      description: "Bank-grade security for financial transactions and customer data",
      icon: Building,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Government",
      description: "FISMA and FedRAMP compliant security solutions",
      icon: Building,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Manufacturing",
      description: "OT security for industrial control systems and IoT devices",
      icon: Building,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Retail",
      description: "PCI DSS compliant security for payment processing",
      icon: Building,
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Education",
      description: "FERPA compliant security for student and institutional data",
      icon: Building,
      color: "from-gray-500 to-blue-500"
    }
  ];

  const threatProtection = [
    {
      title: "Ransomware Protection",
      description: "Advanced ransomware detection and prevention with instant recovery",
      icon: AlertTriangle,
      features: ["Behavioral analysis", "File monitoring", "Backup protection", "Instant recovery"]
    },
    {
      title: "Phishing Prevention",
      description: "AI-powered email security that blocks sophisticated phishing attacks",
      icon: Mail,
      features: ["URL analysis", "Content filtering", "Sender verification", "User training"]
    },
    {
      title: "Insider Threat Detection",
      description: "Monitor and prevent malicious activities from within your organization",
      icon: Users,
      features: ["User behavior analytics", "Privilege monitoring", "Data access tracking", "Anomaly detection"]
    },
    {
      title: "Supply Chain Security",
      description: "Protect against third-party and supply chain attacks",
      icon: Globe2,
      features: ["Vendor assessment", "Code scanning", "Dependency monitoring", "Risk scoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEO 
        title="Quantum-Safe Cybersecurity Suite - Zion Tech Group" 
        description="Next-generation cybersecurity platform using quantum-resistant encryption and AI-powered threat detection. Protect your business against today's and tomorrow's threats."
        keywords="quantum cybersecurity, quantum-safe encryption, ai threat detection, zero-trust security, endpoint protection, network security"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Quantum-Safe Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl text-cyan-300 mb-8 font-medium">
              Future-Proof Security for the Quantum Era
            </p>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Our quantum-resistant cybersecurity platform combines next-generation encryption with AI-powered 
              threat detection to protect your business against today's threats and tomorrow's quantum attacks.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#features" className="futuristic-btn text-lg px-8 py-4 group">
                <span>Explore Security</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="/contact" className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300">
                Security Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge security capabilities that protect your business from all angles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className={`w-16 h-16 mx-auto mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Multi-Layer Security Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive protection across all security layers with defense in depth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityLayers.map((layer, index) => (
              <div
                key={layer.title}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <layer.icon className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {layer.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {layer.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {layer.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Threat Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect against the most sophisticated cyber threats with AI-powered detection and response
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {threatProtection.map((threat, index) => (
              <div
                key={threat.title}
                className="glass-card p-8 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <threat.icon className="w-16 h-16 text-red-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {threat.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {threat.description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {threat.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Cybersecurity Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience enterprise-grade security that adapts and evolves with emerging threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className={`w-16 h-16 mx-auto mb-6 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored cybersecurity solutions designed for your industry's unique compliance and security needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${industry.color} p-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your business needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`glass-card p-8 text-center relative ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-8">{plan.description}</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full futuristic-btn text-center ${
                    plan.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-600' : ''
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that trust us with their cybersecurity. Get protected today with quantum-safe security.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="/contact"
                  className="futuristic-btn text-lg px-8 py-4 group"
                >
                  <span>Get Protected Today</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a
                  href="/contact"
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group"
                >
                  <span>Security Assessment</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}