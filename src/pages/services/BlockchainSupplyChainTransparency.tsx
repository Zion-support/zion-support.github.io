import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Link, 
  Shield, 
  Eye, 
  TrendingUp, 
  Globe, 
  Users, 
  BarChart3, 
  Clock,
  Target,
  Award,
  Cpu,
  Zap,
  CheckCircle,
  Truck,
  Factory,
  Leaf
} from 'lucide-react';

export default function BlockchainSupplyChainTransparency() {
  const features = [
    {
      title: "End-to-End Traceability",
      description: "Track products from raw materials to final delivery with immutable blockchain records",
      icon: Eye,
      benefits: ["Complete visibility", "Real-time tracking", "Immutable records", "Audit trail"]
    },
    {
      title: "Smart Contract Automation",
      description: "Automate supply chain processes with self-executing smart contracts",
      icon: Cpu,
      benefits: ["Payment automation", "Quality verification", "Compliance checks", "Dispute resolution"]
    },
    {
      title: "Sustainability Monitoring",
      description: "Track environmental impact and sustainability metrics across the supply chain",
      icon: Leaf,
      benefits: ["Carbon footprint", "ESG compliance", "Green certification", "Impact reporting"]
    },
    {
      title: "Quality Assurance",
      description: "Real-time quality monitoring and verification at every stage",
      icon: CheckCircle,
      benefits: ["Quality metrics", "Compliance tracking", "Certification management", "Risk assessment"]
    },
    {
      title: "Supplier Verification",
      description: "Verify supplier credentials and compliance with blockchain-based verification",
      icon: Shield,
      benefits: ["Identity verification", "Compliance checking", "Performance tracking", "Risk scoring"]
    },
    {
      title: "Analytics & Reporting",
      description: "Advanced analytics and reporting for supply chain optimization",
      icon: BarChart3,
      benefits: ["Performance metrics", "Cost analysis", "Efficiency insights", "Predictive analytics"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$899",
      period: "per month",
      features: [
        "Up to 100 products tracked",
        "Basic blockchain tracking",
        "Standard reporting",
        "Email support",
        "Basic integrations"
      ],
      bestFor: "Small manufacturers and distributors"
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "per month",
      features: [
        "Up to 1,000 products tracked",
        "Advanced blockchain features",
        "Premium reporting",
        "Priority support",
        "Advanced integrations",
        "Custom dashboards"
      ],
      bestFor: "Growing businesses"
    },
    {
      name: "Enterprise",
      price: "$6,999",
      period: "per month",
      features: [
        "Unlimited products tracked",
        "Full blockchain capabilities",
        "Custom integrations",
        "24/7 dedicated support",
        "Enterprise analytics",
        "White-label solution",
        "Custom development"
      ],
      bestFor: "Large organizations"
    }
  ];

  const useCases = [
    {
      industry: "Food & Beverage",
      examples: [
        "Farm-to-table traceability",
        "Food safety compliance",
        "Organic certification",
        "Recall management"
      ]
    },
    {
      industry: "Pharmaceuticals",
      examples: [
        "Drug authenticity verification",
        "Temperature monitoring",
        "Regulatory compliance",
        "Counterfeit prevention"
      ]
    },
    {
      industry: "Luxury Goods",
      examples: [
        "Authenticity verification",
        "Origin certification",
        "Quality assurance",
        "Brand protection"
      ]
    },
    {
      industry: "Electronics",
      examples: [
        "Component traceability",
        "Conflict mineral tracking",
        "Quality control",
        "Warranty management"
      ]
    }
  ];

  const benefits = [
    {
      metric: "100%",
      description: "Supply chain transparency",
      icon: Eye
    },
    {
      metric: "60%",
      description: "Reduction in fraud risk",
      icon: Shield
    },
    {
      metric: "40%",
      description: "Cost savings",
      icon: TrendingUp
    },
    {
      metric: "3x",
      description: "Faster compliance",
      icon: CheckCircle
    }
  ];

  const industrySolutions = [
    {
      name: "Food Safety",
      description: "Ensure food safety with blockchain-based traceability and compliance monitoring",
      icon: Leaf,
      features: ["HACCP compliance", "Temperature monitoring", "Recall management", "Supplier verification"]
    },
    {
      name: "Pharmaceutical Security",
      description: "Prevent counterfeiting and ensure drug authenticity with blockchain verification",
      icon: Shield,
      features: ["Drug authentication", "Serial number tracking", "Regulatory compliance", "Quality assurance"]
    },
    {
      name: "Sustainable Sourcing",
      description: "Track sustainability metrics and ensure responsible sourcing practices",
      icon: Globe,
      features: ["ESG compliance", "Carbon footprint", "Fair trade verification", "Environmental impact"]
    },
    {
      name: "Quality Management",
      description: "Maintain product quality throughout the supply chain with real-time monitoring",
      icon: CheckCircle,
      features: ["Quality metrics", "Compliance tracking", "Performance monitoring", "Risk assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Blockchain Supply Chain Transparency Platform - Zion Tech Group" 
        description="Transform your supply chain with blockchain transparency. Achieve 100% visibility, reduce fraud risk by 60%, and save 40% on costs."
        keywords="blockchain supply chain, supply chain transparency, blockchain traceability, supply chain management, blockchain logistics"
        canonical="https://ziontechgroup.com/services/blockchain-supply-chain-transparency"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Blockchain Supply Chain Transparency
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Complete Visibility & Trust in Every Link
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your supply chain with blockchain transparency. Achieve 100% visibility, 
            reduce fraud risk by 60%, and save 40% on costs with immutable tracking and smart contracts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:kleber@ziontechgroup.com?subject=Blockchain Supply Chain Transparency Demo Request"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Demo
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Transform Your Supply Chain with Blockchain
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our blockchain platform delivers measurable improvements in transparency, security, and efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {benefit.metric}
                </div>
                <p className="text-zion-slate font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Powerful Blockchain Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Everything you need to achieve complete supply chain transparency and trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {benefit}
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
              Tailored blockchain solutions for different industries and compliance requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">
                  {solution.name}
                </h3>
                <p className="text-sm text-zion-slate mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-1 text-left">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
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
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 border-2 ${
                tier.name === 'Professional' 
                  ? 'border-zion-cyan scale-105' 
                  : 'border-zion-blue-light'
              }`}>
                {tier.name === 'Professional' && (
                  <div className="bg-zion-cyan text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-zion-cyan">{tier.price}</span>
                  <span className="text-zion-slate">{tier.period}</span>
                </div>
                <p className="text-zion-slate mb-6">{tier.bestFor}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Blockchain Supply Chain Transparency - ${tier.name} Plan Inquiry`}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                    tier.name === 'Professional'
                      ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white'
                      : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Use Cases
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              See how blockchain transparency transforms different industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-4 text-center">
                  {useCase.industry}
                </h3>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Information */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Market Analysis & ROI
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Understand the market opportunity and potential return on investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-6">Market Overview</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-blue-dark font-semibold">Market Size</span>
                    <span className="text-zion-cyan font-bold">$23.4B</span>
                  </div>
                  <p className="text-sm text-zion-slate">Global blockchain supply chain market (2024)</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-blue-dark font-semibold">Growth Rate</span>
                    <span className="text-green-600 font-bold">87.7% CAGR</span>
                  </div>
                  <p className="text-sm text-zion-slate">Expected annual growth through 2030</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-zion-blue-dark font-semibold">Average ROI</span>
                    <span className="text-purple-600 font-bold">450%</span>
                  </div>
                  <p className="text-sm text-zion-slate">Within 18 months of implementation</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zion-blue-dark mb-6">Competitive Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-zion-cyan rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-zion-blue-dark">Advanced Blockchain</h4>
                    <p className="text-zion-slate">Latest blockchain technology with smart contract capabilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-purple rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-zion-blue-dark">Industry Expertise</h4>
                    <p className="text-zion-slate">Deep understanding of supply chain challenges and solutions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-green rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-zion-blue-dark">Rapid Implementation</h4>
                    <p className="text-zion-slate">Deploy blockchain solutions in weeks, not months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Supply Chain?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join leading businesses that have achieved complete transparency and trust with blockchain technology
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Blockchain Supply Chain Transparency Demo Request"
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Demo
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}