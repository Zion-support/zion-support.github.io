import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Link, 
  Shield, 
  BarChart3, 
  Users, 
  Globe, 
  Zap, 
  Lock,
  Database,
  Cpu,
  TrendingUp,
  Target,
  Award,
  Building,
  Network,
  Smartphone
} from 'lucide-react';

export default function BlockchainEnterpriseSolutions() {
  const solutions = [
    {
      title: "Supply Chain Transparency",
      description: "End-to-end visibility and traceability across your entire supply chain with immutable blockchain records",
      icon: Link,
      features: ["Real-time tracking", "Product authentication", "Compliance verification", "Smart contracts"]
    },
    {
      title: "Digital Identity Management",
      description: "Secure, decentralized identity solutions for employees, customers, and partners",
      icon: Shield,
      features: ["Self-sovereign identity", "Zero-knowledge proofs", "Multi-factor authentication", "Privacy protection"]
    },
    {
      title: "Smart Contract Automation",
      description: "Automate complex business processes and agreements with self-executing smart contracts",
      icon: Cpu,
      features: ["Automated execution", "Conditional logic", "Multi-party agreements", "Audit trails"]
    },
    {
      title: "Asset Tokenization",
      description: "Convert real-world assets into digital tokens for fractional ownership and trading",
      icon: BarChart3,
      features: ["Fractional ownership", "Liquidity creation", "Regulatory compliance", "Market access"]
    }
  ];

  const industries = [
    {
      name: "Financial Services",
      description: "Cross-border payments, trade finance, and asset management",
      icon: Building,
      benefits: ["Faster settlements", "Reduced costs", "Enhanced security", "Global reach"]
    },
    {
      name: "Healthcare",
      description: "Medical records, drug supply chain, and patient data management",
      icon: Shield,
      benefits: ["Data integrity", "Patient privacy", "Supply chain security", "Regulatory compliance"]
    },
    {
      name: "Manufacturing",
      description: "Quality control, warranty management, and supplier verification",
      icon: Cpu,
      benefits: ["Quality assurance", "Warranty automation", "Supplier transparency", "Cost reduction"]
    },
    {
      name: "Real Estate",
      description: "Property ownership, title management, and fractional investment",
      icon: Building,
      benefits: ["Title security", "Fractional ownership", "Reduced fraud", "Market liquidity"]
    }
  ];

  const pricingTiers = [
    {
      name: "Foundation",
      price: 1500,
      period: "month",
      description: "Basic blockchain infrastructure for small enterprises",
      features: [
        "Basic blockchain setup",
        "Smart contract templates",
        "Standard integrations",
        "Email support",
        "Basic analytics"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Enterprise",
      price: 3500,
      period: "month",
      description: "Comprehensive blockchain solutions for growing businesses",
      features: [
        "Custom blockchain development",
        "Advanced smart contracts",
        "Premium integrations",
        "Priority support",
        "Advanced analytics",
        "Custom dashboards",
        "Training & onboarding"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise Plus",
      price: 7500,
      period: "month",
      description: "Full-scale blockchain transformation for large organizations",
      features: [
        "Multi-chain architecture",
        "Custom development",
        "Enterprise integrations",
        "24/7 dedicated support",
        "Advanced security",
        "Compliance frameworks",
        "SLA guarantees",
        "Strategic consulting"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      description: "Immutable records and cryptographic security protect against fraud and tampering",
      icon: Lock,
      metrics: "99.9% security improvement"
    },
    {
      title: "Cost Reduction",
      description: "Eliminate intermediaries and automate processes to reduce operational costs",
      icon: TrendingUp,
      metrics: "30-50% cost savings"
    },
    {
      title: "Transparency",
      description: "Complete visibility into all transactions and processes across your ecosystem",
      icon: Globe,
      metrics: "100% transparency"
    },
    {
      title: "Efficiency",
      description: "Automate complex processes and reduce manual intervention",
      icon: Zap,
      metrics: "60-80% efficiency gain"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Blockchain Enterprise Solutions - Zion Tech Group" 
        description="Transform your business with enterprise-grade blockchain solutions that enhance security, transparency, and efficiency across all operations."
        keywords="blockchain enterprise, supply chain transparency, smart contracts, digital identity, asset tokenization, enterprise blockchain"
        canonical="https://ziontechgroup.com/services/blockchain-enterprise-solutions"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Blockchain Enterprise Solutions
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Trust, Transparency, Transformation
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Leverage the power of blockchain technology to create immutable, transparent, and efficient 
            business processes that drive innovation and competitive advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Blockchain Solutions?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experience unprecedented levels of trust, transparency, and efficiency with enterprise-grade blockchain technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate mb-3">
                  {benefit.description}
                </p>
                <div className="text-lg font-bold text-zion-cyan">
                  {benefit.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Enterprise Blockchain Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Comprehensive blockchain solutions designed to address the unique challenges of enterprise businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {solution.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Tailored blockchain solutions designed for the unique requirements of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-zion-slate mb-4">
                  {industry.description}
                </p>
                <ul className="text-left space-y-1">
                  {industry.benefits.map((benefit, idx) => (
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

      {/* Pricing Section */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Enterprise Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Scalable blockchain solutions that grow with your business needs.
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

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Built on cutting-edge blockchain technologies and enterprise-grade infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Multi-Chain Support
              </h3>
              <p className="text-zion-slate">
                Support for Ethereum, Hyperledger, Corda, and custom blockchain networks
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-pink rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Enterprise Security
              </h3>
              <p className="text-zion-slate">
                Military-grade encryption, multi-signature wallets, and advanced access controls
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-green to-zion-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Scalable Infrastructure
              </h3>
              <p className="text-zion-slate">
                Cloud-native architecture with horizontal scaling and high availability
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-orange to-zion-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                Mobile Integration
              </h3>
              <p className="text-zion-slate">
                Native mobile apps and responsive web interfaces for all devices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Proven Business Impact
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-12">
            Our blockchain solutions deliver measurable business value and competitive advantages.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-zion-cyan mb-2">30-50%</div>
              <div className="text-white font-semibold mb-2">Cost Reduction</div>
              <p className="text-zion-slate-light text-sm">
                Significant reduction in operational costs and intermediary fees
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-zion-cyan mb-2">60-80%</div>
              <div className="text-white font-semibold mb-2">Efficiency Gain</div>
              <p className="text-zion-slate-light text-sm">
                Dramatic improvement in process efficiency and transaction speed
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
              <div className="text-white font-semibold mb-2">Security Improvement</div>
              <p className="text-zion-slate-light text-sm">
                Near-perfect security with immutable records and cryptographic protection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-zion-blue-dark mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate max-w-3xl mx-auto mb-8">
            Start your blockchain transformation journey today and unlock new levels of efficiency and trust.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Demo
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