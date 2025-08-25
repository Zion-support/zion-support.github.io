import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Link, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  BarChart3, 
  Database, 
  Cloud,
  Lock,
  CheckCircle,
  Building,
  TrendingUp,
  Wallet,
  Coins,
  Smartphone,
  Cpu,
  Eye,
  ArrowUpRight,
  Target,
  Award
} from 'lucide-react';

export default function BlockchainDeFiSolutions() {
  const features = [
    {
      title: "Smart Contract Development",
      description: "Custom smart contracts built with security best practices for DeFi protocols, NFTs, and enterprise applications",
      icon: Cpu,
      benefits: ["Audited contracts", "Gas optimization", "Security testing", "Multi-chain support"]
    },
    {
      title: "DeFi Protocol Development",
      description: "Complete DeFi protocols including DEXs, lending platforms, yield farming, and liquidity management",
      icon: Coins,
      benefits: ["Automated market making", "Liquidity pools", "Yield optimization", "Risk management"]
    },
    {
      title: "Cross-Chain Interoperability",
      description: "Solutions that enable seamless communication and asset transfer between different blockchain networks",
      icon: Link,
      benefits: ["Bridge protocols", "Atomic swaps", "Cross-chain DeFi", "Multi-chain wallets"]
    },
    {
      title: "Enterprise Blockchain Solutions",
      description: "Private and consortium blockchain networks for enterprise applications with custom governance",
      icon: Building,
      benefits: ["Permissioned networks", "Custom consensus", "Enterprise integration", "Compliance tools"]
    },
    {
      title: "NFT & Metaverse Platforms",
      description: "Complete NFT marketplaces, gaming platforms, and metaverse infrastructure development",
      icon: Smartphone,
      benefits: ["NFT minting", "Marketplace features", "Gaming integration", "Metaverse tools"]
    },
    {
      title: "DeFi Analytics & Monitoring",
      description: "Real-time analytics and monitoring tools for DeFi protocols and blockchain networks",
      icon: BarChart3,
      benefits: ["Portfolio tracking", "Risk analysis", "Performance metrics", "Alert systems"]
    }
  ];

  const useCases = [
    {
      industry: "DeFi Protocols",
      applications: ["DEX platforms", "Lending protocols", "Yield farming", "Staking platforms"],
      complexity: "High",
      roi: "500-1000%"
    },
    {
      industry: "Enterprise Blockchain",
      applications: ["Supply chain tracking", "Identity management", "Asset tokenization", "Voting systems"],
      complexity: "Medium",
      roi: "200-400%"
    },
    {
      industry: "NFT & Gaming",
      applications: ["NFT marketplaces", "Gaming platforms", "Metaverse worlds", "Collectible systems"],
      complexity: "Medium",
      roi: "300-600%"
    },
    {
      industry: "Cross-Chain Solutions",
      applications: ["Bridge protocols", "Cross-chain DeFi", "Multi-chain wallets", "Interoperability tools"],
      complexity: "High",
      roi: "400-800%"
    }
  ];

  const pricing = [
    {
      plan: "Starter",
      price: "$499",
      period: "per month",
      features: [
        "Basic smart contracts",
        "Single blockchain support",
        "Standard security audit",
        "Email support",
        "Basic documentation",
        "Testing environment"
      ],
      bestFor: "Small DeFi projects"
    },
    {
      plan: "Professional",
      price: "$1,499",
      period: "per month",
      features: [
        "Advanced smart contracts",
        "Multi-chain support",
        "Comprehensive security audit",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom integrations"
      ],
      bestFor: "Growing DeFi protocols",
      popular: true
    },
    {
      plan: "Enterprise",
      price: "$4,999",
      period: "per month",
      features: [
        "Custom DeFi protocols",
        "Cross-chain solutions",
        "Enterprise security",
        "24/7 dedicated support",
        "Custom analytics",
        "White-label solutions",
        "On-premise deployment"
      ],
      bestFor: "Large-scale blockchain projects"
    }
  ];

  const benefits = [
    {
      title: "Innovation Leadership",
      description: "Stay ahead of the curve with cutting-edge blockchain and DeFi solutions",
      icon: TrendingUp,
      metric: "Market advantage"
    },
    {
      title: "Cost Efficiency",
      description: "Reduce transaction costs and eliminate intermediaries in financial operations",
      icon: BarChart3,
      metric: "30-70% cost reduction"
    },
    {
      title: "Transparency & Security",
      description: "Immutable records and transparent operations with cryptographic security",
      icon: Shield,
      metric: "100% transparency"
    },
    {
      title: "Global Accessibility",
      description: "Enable financial services for unbanked populations worldwide",
      icon: Globe,
      metric: "Global reach"
    }
  ];

  const technologies = [
    { name: "Ethereum", icon: Cpu, color: "from-blue-500 to-purple-500" },
    { name: "Polygon", icon: Link, color: "from-purple-500 to-pink-500" },
    { name: "Solana", icon: Zap, color: "from-green-500 to-blue-500" },
    { name: "Polkadot", icon: Globe, color: "from-pink-500 to-red-500" },
    { name: "Cosmos", icon: Coins, color: "from-blue-500 to-cyan-500" },
    { name: "Avalanche", icon: TrendingUp, color: "from-red-500 to-orange-500" }
  ];

  const services = [
    {
      category: "Smart Contract Development",
      offerings: [
        "DeFi protocol contracts",
        "NFT smart contracts",
        "Governance contracts",
        "Oracle integration",
        "Multi-sig wallets",
        "Token contracts"
      ]
    },
    {
      category: "DeFi Platform Development",
      offerings: [
        "Decentralized exchanges (DEX)",
        "Lending and borrowing protocols",
        "Yield farming platforms",
        "Staking and governance",
        "Liquidity management",
        "Derivatives trading"
      ]
    },
    {
      category: "Cross-Chain Solutions",
      offerings: [
        "Bridge protocols",
        "Cross-chain DeFi",
        "Multi-chain wallets",
        "Interoperability tools",
        "Asset wrapping",
        "Cross-chain messaging"
      ]
    },
    {
      category: "Enterprise Blockchain",
      offerings: [
        "Private blockchain networks",
        "Consortium solutions",
        "Supply chain tracking",
        "Identity management",
        "Asset tokenization",
        "Compliance tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Blockchain & DeFi Solutions Platform - Zion Tech Group" 
        description="Comprehensive blockchain and DeFi development services including smart contracts, DeFi protocols, cross-chain solutions, and enterprise blockchain applications."
        keywords="blockchain development, DeFi protocols, smart contracts, NFT platforms, cross-chain solutions, enterprise blockchain"
        canonical="https://ziontechgroup.com/services/blockchain-defi-solutions"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Blockchain & DeFi Solutions
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Build the Future of Finance & Technology
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your business with cutting-edge blockchain technology and DeFi solutions. 
            From smart contracts to cross-chain protocols, we build secure, scalable, and 
            innovative blockchain applications that drive the future of decentralized finance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Comprehensive Blockchain Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our platform provides end-to-end blockchain development services, from smart contract 
              development to complete DeFi protocol deployment and enterprise blockchain solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
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
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our blockchain and DeFi solutions are designed to meet the unique requirements 
              of different industries, providing specialized applications for maximum impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zion-blue-dark">
                      {useCase.industry}
                    </h3>
                    <div className="text-zion-cyan font-semibold">
                      ROI: {useCase.roi}
                    </div>
                    <div className="text-sm text-zion-slate">
                      Complexity: {useCase.complexity}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Comprehensive blockchain and DeFi services designed to meet every stage of your 
              project development, from concept to deployment and maintenance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6">
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-4">
                  {service.category}
                </h3>
                <ul className="space-y-2">
                  {service.offerings.map((offering, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {offering}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Flexible Development Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the development plan that best fits your project requirements and budget. 
              All plans include our core blockchain development expertise and security best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 ${
                plan.popular ? 'border-zion-cyan scale-105' : 'border-zion-blue-light'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-zion-cyan text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                    {plan.plan}
                  </h3>
                  <div className="text-4xl font-bold text-zion-cyan mb-1">
                    {plan.price}
                  </div>
                  <div className="text-zion-slate">
                    {plan.period}
                  </div>
                  <p className="text-sm text-zion-slate mt-2">
                    {plan.bestFor}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white' 
                    : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Blockchain & DeFi?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Blockchain technology and DeFi solutions offer unprecedented opportunities 
              for innovation, efficiency, and financial inclusion across industries.
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
                <div className="text-2xl font-bold text-zion-cyan">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Multi-Chain Technology Support
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our platform supports multiple blockchain networks, enabling you to choose 
              the best technology for your specific use case and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-zion-blue-dark">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join the blockchain revolution and transform your business with decentralized 
            finance solutions and cutting-edge blockchain technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
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