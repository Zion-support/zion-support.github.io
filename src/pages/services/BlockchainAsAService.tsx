import React from 'react';
import { Link } from 'react-router-dom';

const BlockchainAsAService = () => {

  const features = [
    {

      icon: LinkIcon,
      title: 'Multi-Chain Infrastructure',
      description: 'Deploy and manage blockchain networks across multiple protocols including Ethereum, Polygon, Solana, and custom chains.',
      benefits: [
        'Multi-protocol support',
        'Custom chain deployment',
        'Cross-chain interoperability',
        'Scalable infrastructure'
      ],
      price: 'From $299/month'
    },
    {

      icon: Shield,
      title: 'Smart Contract Development',
      description: 'End-to-end smart contract development with testing, deployment, and monitoring tools.',
      benefits: [
        'Contract templates',
        'Automated testing',
        'Security auditing',
        'Deployment tools'
      ],
      price: 'From $199/month'
    },
    {

      icon: Zap,
      title: 'DeFi & NFT Solutions',
      description: 'Ready-to-deploy DeFi protocols, NFT marketplaces, and tokenization platforms.',
      benefits: [
        'DeFi protocol templates',
        'NFT marketplace builder',
        'Token creation tools',
        'Liquidity management'
      ],
      price: 'From $399/month'
    },
    {

      icon: Lock,
      title: 'Enterprise Blockchain',
      description: 'Private and consortium blockchain solutions with enterprise-grade security and compliance.',
      benefits: [
        'Private networks',
        'Consortium management',
        'Regulatory compliance',
        'Enterprise integration'
      ],
      price: 'From $599/month'
    }
  ];

  const blockchainProtocols = [
    {

      title: 'Ethereum & EVM',
      description: 'Full Ethereum compatibility with smart contract deployment and DeFi integration.',
      icon: Network,
      features: ['Smart contracts', 'DeFi protocols', 'NFT standards', 'Layer 2 scaling']
    },
    {

      title: 'Polygon & Sidechains',
      description: 'High-performance sidechains with low fees and fast transaction processing.',
      icon: Zap,
      features: ['Low transaction fees', 'Fast confirmations', 'EVM compatibility', 'Cross-chain bridges']
    },
    {

      title: 'Solana',
      description: 'High-throughput blockchain with sub-second finality and low costs.',
      icon: Activity,
      features: ['High TPS', 'Low fees', 'Fast finality', 'Rust development']
    },
    {

      title: 'Custom Blockchains',
      description: 'Build custom blockchain networks tailored to your specific use case.',
      icon: Server,
      features: ['Custom consensus', 'Tailored features', 'Private networks', 'Full control']
    }
  ];

  const useCases = [
    {

      title: 'Supply Chain Management',
      description: 'Transparent and immutable supply chain tracking with real-time visibility.',
      icon: Network,
      roi: '40% cost reduction'
    },
    {

      title: 'Digital Identity',
      description: 'Self-sovereign identity solutions with privacy-preserving verification.',
      icon: Key,
      roi: '60% faster verification'
    },
    {

      title: 'Asset Tokenization',
      description: 'Fractional ownership of real-world assets through blockchain tokens.',
      icon: Wallet,
      roi: '300% liquidity increase'
    },
    {

      title: 'Cross-Border Payments',
      description: 'Fast and cost-effective international payments with blockchain technology.',
      icon: Globe,
      roi: '80% cost reduction'
    }
  ];

  const integrations = [
    { name: 'Web3.js', description: 'JavaScript library for Ethereum blockchain interaction' },
    { name: 'Hardhat', description: 'Development environment for Ethereum smart contracts' },
    { name: 'Truffle', description: 'Development framework for Ethereum dApps' },
    { name: 'OpenZeppelin', description: 'Library for secure smart contract development' },
    { name: 'IPFS', description: 'Decentralized storage for blockchain applications' },
    { name: 'Chainlink', description: 'Decentralized oracle network for smart contracts' }
  ];

  const pricingTiers = [
    {

      name: 'Starter',
      price: '$299/month',
      description: 'Perfect for developers and small projects',
      features: [
        'Basic blockchain deployment',
        'Smart contract templates',
        'Development tools',
        'Community support',
        'Basic analytics'
      ]
    },
    {

      name: 'Professional',
      price: '$799/month',
      description: 'Ideal for growing businesses and startups',
      features: [
        'Multi-chain support',
        'Advanced smart contracts',
        'DeFi & NFT tools',
        'Priority support',
        'Advanced analytics',
        'Custom integrations'
      ]
    },
    {

      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex requirements',
      features: [
        'Custom blockchain networks',
        'Enterprise security',
        'Dedicated support team',
        'SLA guarantees',
        'On-premise deployment',
        'Custom compliance'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-emerald-600/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-slate-900/50 px-4 py-1 text-green-300">
            <LinkIcon className="h-4 w-4" />
            <span className="text-xs font-semibold tracking-wider">BLOCKCHAIN AS A SERVICE</span>
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl mb-6">
            Build the Future with
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> Blockchain Technology</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Deploy, manage, and scale blockchain applications with our comprehensive BaaS platform. From DeFi to enterprise solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 font-semibold hover:from-green-400 hover:to-emerald-500 transition-all">
              Start Free Trial
            </Link>
            <Link to="/request-quote" className="rounded-lg border border-green-400/40 px-6 py-3 font-semibold text-green-300 hover:bg-white/5 transition-all">
              Request Demo
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-green-400/30 hover:bg-white/10">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 text-green-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-300 mb-6">{feature.description}</p>
              <ul className="space-y-3 mb-6">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-green-300">{feature.price}</div>
            </div>
          ))}
        </div>

        {/* Blockchain Protocols */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Supported Blockchain Protocols</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {blockchainProtocols.map((protocol, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-600/20 text-green-300">
                  <protocol.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{protocol.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{protocol.description}</p>
                <ul className="text-xs text-slate-400 space-y-1">
                  {protocol.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Industry Use Cases & ROI</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-600/20 text-green-300">
                  <useCase.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                <p className="text-sm text-slate-300 mb-3">{useCase.description}</p>
                <div className="text-sm font-semibold text-green-400">{useCase.roi}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Developer Tools & Integrations</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
                <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
                <p className="text-sm text-slate-300">{integration.description}</p>
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
                  ? 'border-2 border-green-400 bg-gradient-to-br from-green-500/10 to-emerald-600/10 relative' 
                  : 'border-white/10 bg-white/5'
              }`}>
                {tier.name === 'Professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="text-4xl font-bold text-green-300 mb-6">{tier.price}</div>
                <p className="text-slate-300 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={tier.name === 'Enterprise' ? '/contact' : '/contact'} 
                  className={`w-full rounded-lg py-3 text-center font-semibold transition-all ${

                    tier.name === 'Enterprise'
                      ? 'border border-green-400 text-green-300 hover:bg-green-400 hover:text-white'
                      : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500'
                  }`}
                >
                  {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Performance</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">99.9%</div>
              <div className="text-sm text-slate-300">Uptime Guarantee</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">&lt;2s</div>
              <div className="text-sm text-slate-300">Deployment Time</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">24/7</div>
              <div className="text-sm text-slate-300">Technical Support</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">100+</div>
              <div className="text-sm text-slate-300">Pre-built Templates</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-green-500/10 to-emerald-600/10 p-12 backdrop-blur-md">
            <h2 className="text-3xl font-bold mb-4">Ready to Build on Blockchain?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the blockchain revolution and build the next generation of decentralized applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold hover:from-green-400 hover:to-emerald-500 transition-all">
                Start Your Free Trial
              </Link>
              <a href="mailto:kleber@ziontechgroup.com" className="rounded-lg border border-green-400 px-8 py-4 font-semibold text-green-300 hover:bg-green-400 hover:text-white transition-all">
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

export default BlockchainAsAService;