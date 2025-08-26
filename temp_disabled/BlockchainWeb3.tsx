import React from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { Check, Link as LinkIcon, Shield, Zap, Globe, Target, Activity, Smartphone, Server, Cloud, Database, Users } from 'lucide-react';

export default function BlockchainWeb3Services() {
  const blockchainServices = [
    {
      icon: LinkIcon,
      title: 'Smart Contract Development',
      description: 'Secure, audited smart contracts for DeFi, NFTs, and enterprise blockchain applications.',
      price: 'From $8,500/project',
      marketPrice: '$7,000 - $25,000/project',
      features: [
        'Custom smart contract development',
        'Security audits and testing',
        'Gas optimization',
        'Multi-chain compatibility',
        'Upgradeable contract architecture',
        'Comprehensive documentation'
      ],
      benefits: [
        'Reduced development costs by 40%',
        'Enhanced security and reliability',
        'Faster time to market',
        'Audit-ready contracts'
      ]
    },
    {
      icon: Shield,
      title: 'DeFi Platform Development',
      description: 'Complete DeFi platforms including DEXs, lending protocols, and yield farming solutions.',
      price: 'From $25,000/project',
      marketPrice: '$20,000 - $80,000/project',
      features: [
        'Decentralized exchange (DEX) development',
        'Lending and borrowing protocols',
        'Yield farming and staking',
        'Liquidity management',
        'Cross-chain interoperability',
        'Advanced trading features'
      ],
      benefits: [
        'Revenue-generating DeFi protocols',
        'Competitive advantage in DeFi space',
        'Scalable and secure architecture',
        'Multi-chain deployment capability'
      ]
    },
    {
      icon: Zap,
      title: 'NFT Marketplace & Collections',
      description: 'Custom NFT marketplaces and generative art collections with advanced features.',
      price: 'From $12,000/project',
      marketPrice: '$10,000 - $35,000/project',
      features: [
        'Custom NFT marketplace development',
        'Generative art collection creation',
        'Royalty and revenue sharing',
        'Multi-chain NFT support',
        'Advanced trading features',
        'Metadata management system'
      ],
      benefits: [
        'New revenue streams from NFTs',
        'Enhanced brand engagement',
        'Community building opportunities',
        'Future-proof digital assets'
      ]
    },
    {
      icon: Globe,
      title: 'Enterprise Blockchain Solutions',
      description: 'Private and consortium blockchain networks for enterprise applications and supply chain.',
      price: 'From $35,000/project',
      marketPrice: '$30,000 - $100,000/project',
      features: [
        'Private blockchain networks',
        'Consortium blockchain setup',
        'Supply chain tracking',
        'Identity management',
        'Data privacy and compliance',
        'Integration with existing systems'
      ],
      benefits: [
        'Improved transparency and traceability',
        'Reduced operational costs',
        'Enhanced data security',
        'Regulatory compliance'
      ]
    },
    {
      icon: Database,
      title: 'Web3 Infrastructure & APIs',
      description: 'Backend infrastructure and APIs for Web3 applications and blockchain integration.',
      price: 'From $6,500/month',
      marketPrice: '$5,500 - $15,000/month',
      features: [
        'Blockchain node management',
        'Web3 API development',
        'Indexing and data services',
        'Multi-chain support',
        'Real-time blockchain data',
        'Scalable infrastructure'
      ],
      benefits: [
        'Reduced infrastructure costs',
        'Faster development cycles',
        'Reliable blockchain access',
        'Scalable Web3 backend'
      ]
    },
    {
      icon: Users,
      title: 'DAO & Governance Platforms',
      description: 'Decentralized autonomous organization platforms with advanced governance mechanisms.',
      price: 'From $18,000/project',
      marketPrice: '$15,000 - $50,000/project',
      features: [
        'DAO framework development',
        'Voting and governance systems',
        'Treasury management',
        'Proposal creation and execution',
        'Multi-signature wallets',
        'Governance token integration'
      ],
      benefits: [
        'Decentralized decision making',
        'Community-driven governance',
        'Transparent operations',
        'Enhanced stakeholder engagement'
      ]
    }
  ];

  const industries = [
    'Financial Services & Banking',
    'Gaming & Entertainment',
    'Real Estate & Property',
    'Healthcare & Pharmaceuticals',
    'Supply Chain & Logistics',
    'Energy & Utilities',
    'Government & Public Sector',
    'Education & Training'
  ];

  const technologies = [
    'Ethereum & Solidity',
    'Polygon & Layer 2',
    'Binance Smart Chain',
    'Polkadot & Substrate',
    'Cosmos & Tendermint',
    'Hyperledger Fabric',
    'IPFS & Filecoin',
    'Chainlink & Oracles'
  ];

  const benefits = [
    'Transparent and immutable transactions',
    'Reduced intermediary costs',
    'Enhanced security and privacy',
    'Programmable money and assets',
    'Global accessibility and inclusion',
    'Innovative business models'
  ];

  const useCases = [
    {
      title: 'DeFi Lending Platform',
      description: 'Decentralized lending and borrowing platform with automated interest rates and collateral management.',
      roi: '30-60% revenue increase',
      implementation: '16-24 weeks'
    },
    {
      title: 'NFT Marketplace',
      description: 'Custom NFT marketplace with advanced trading features, royalties, and multi-chain support.',
      roi: '25-45% new revenue',
      implementation: '12-20 weeks'
    },
    {
      title: 'Supply Chain Tracking',
      description: 'Blockchain-based supply chain solution for transparency, traceability, and compliance.',
      roi: '20-40% cost reduction',
      implementation: '20-32 weeks'
    },
    {
      title: 'DAO Governance Platform',
      description: 'Decentralized governance platform for community-driven decision making and treasury management.',
      roi: '15-35% efficiency improvement',
      implementation: '14-22 weeks'
    }
  ];

  const blockchainTypes = [
    {
      type: 'Public Blockchains',
      examples: 'Ethereum, Bitcoin, Polygon',
      useCase: 'DeFi, NFTs, Public Applications',
      cost: 'Low transaction fees'
    },
    {
      type: 'Private Blockchains',
      examples: 'Hyperledger Fabric, Corda',
      useCase: 'Enterprise, Supply Chain, Internal',
      cost: 'Controlled access and costs'
    },
    {
      type: 'Consortium Blockchains',
      examples: 'R3 Corda, Quorum',
      useCase: 'Industry Collaboration, B2B',
      cost: 'Shared infrastructure costs'
    },
    {
      type: 'Hybrid Blockchains',
      examples: 'Custom Solutions',
      useCase: 'Mixed Public/Private Use Cases',
      cost: 'Flexible cost structure'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blockchain & Web3 Services - Zion Tech Group" 
        description="Comprehensive blockchain development, DeFi platforms, NFT marketplaces, and Web3 infrastructure solutions for the decentralized future."
        keywords="blockchain services, DeFi development, NFT marketplace, smart contracts, Web3, cryptocurrency, decentralized applications"
        canonical="https://ziontechgroup.com/services/blockchain-web3"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
            Blockchain & Web3 Services
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Build the future of decentralized applications with our comprehensive blockchain and Web3 services. 
            From DeFi platforms to NFT marketplaces, we help you navigate the blockchain revolution.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Blockchain & Web3 Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end blockchain solutions that help businesses leverage the power of decentralization 
              to create innovative applications and business models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blockchainServices.map((service, index) => (
              <div key={service.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <p className="text-lg font-semibold text-purple-600">{service.price}</p>
                  <p className="text-sm text-gray-500">Market: {service.marketPrice}</p>
                </div>
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="space-y-2">
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-sm text-gray-600">
                      <span className="font-medium">✓</span> {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real-World Blockchain Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven blockchain solutions that deliver measurable business value across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={useCase.title} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Expected ROI</div>
                    <div className="text-lg font-semibold text-purple-600">{useCase.roi}</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Implementation</div>
                    <div className="text-lg font-semibold text-blue-600">{useCase.implementation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blockchain Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Blockchain Types & Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding different blockchain architectures to choose the right solution for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {blockchainTypes.map((blockchain, index) => (
              <div key={blockchain.type} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{blockchain.type}</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Examples:</span>
                    <p className="text-gray-600">{blockchain.examples}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Best For:</span>
                    <p className="text-gray-600">{blockchain.useCase}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Cost:</span>
                    <p className="text-gray-600">{blockchain.cost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Blockchain Services?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our blockchain expertise combined with cutting-edge Web3 technologies enables us to deliver 
                solutions that provide real business value and competitive advantage.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Blockchain Assessment</h3>
              <p className="text-gray-600 mb-6">
                Discover how blockchain can transform your business with our comprehensive 
                blockchain readiness assessment and strategy session.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Assessment Value:</span>
                  <span className="font-semibold text-gray-900">$3,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Your Cost:</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block w-full text-center"
              >
                Schedule Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our blockchain solutions are tailored to meet the unique challenges and opportunities 
              across diverse industry sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div key={industry} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-purple-50 transition-colors border border-gray-200">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Blockchain Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge blockchain and Web3 technologies to build robust, scalable, 
              and innovative solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={tech} className="bg-white rounded-lg p-4 text-center hover:bg-purple-50 transition-colors border border-gray-200">
                <span className="text-gray-700 font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Blockchain Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for delivering successful blockchain solutions that drive business value.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600 text-sm">
                  Understand business needs and blockchain opportunities
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Architecture</h3>
                <p className="text-gray-600 text-sm">
                  Design blockchain architecture and tokenomics
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Development</h3>
                <p className="text-gray-600 text-sm">
                  Build smart contracts and blockchain infrastructure
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Testing</h3>
                <p className="text-gray-600 text-sm">
                  Security audits and comprehensive testing
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Deployment</h3>
                <p className="text-gray-600 text-sm">
                  Launch on mainnet with monitoring
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">6</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Maintenance</h3>
                <p className="text-gray-600 text-sm">
                  Ongoing support and optimization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let our blockchain experts help you create innovative decentralized applications 
            that drive business growth and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Blockchain Journey
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}