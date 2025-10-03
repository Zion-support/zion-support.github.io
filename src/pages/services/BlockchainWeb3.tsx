import React from 'react'';
import { Helmet } from 'react-helmet-async'';
import { Coins } from 'lucide-react'';
import Header from '../../components/Header'';
import Footer from '../../components/Footer'';
import React from 'react';'
import { Helmet } from 'react-helmet-async';'
import { Coins } from 'lucide-react';'
import Header from '../../components/Header';'
import Footer from '../../components/Footer';'

const BlockchainWeb3: React.FC: ()  => {,,,
  const features: [,,
    {
      icon: Shield,,,,
      title: "Smart Contract Development";,"
      description: "Secure, audited smart contracts for DeFi, NFTs, DAOs, and enterprise applications with comprehensive testing.";,"
      title: "Smart Contract Development"
      description: "Secure, audited smart contracts for DeFi, NFTs, DAOs, and enterprise applications with comprehensive testing."
      benefit: "Zero security vulnerabilities","
    },
    {
      icon: Network,,,,
      title: "Multi-Chain Integration";,"
      description: "Seamless integration across Ethereum, Polygon, BSC, Solana, and other major blockchain networks.";,"
      title: "Multi-Chain Integration"
      description: "Seamless integration across Ethereum, Polygon, BSC, Solana, and other major blockchain networks."
      benefit: "Universal compatibility","
    },
    {
      icon: Lock,,,,
      title: "DeFi Protocol Development";,"
      description: "Custom DeFi protocols including DEXs, lending platforms, yield farming, and liquidity management systems.";,"
      title: "DeFi Protocol Development"
      description: "Custom DeFi protocols including DEXs, lending platforms, yield farming, and liquidity management systems."
      benefit: "Enterprise-grade security","
    },
    {
      icon: Coins,,,,
      title: "NFT Marketplace & Tokenization";,"
      description: "Complete NFT marketplace development with advanced features, tokenization services, and royalty management.";,"
      title: "NFT Marketplace & Tokenization"
      description: "Complete NFT marketplace development with advanced features, tokenization services, and royalty management."
      benefit: "Scalable NFT infrastructure","
    },
    {
      icon: Database,,,,
      title: "Blockchain Analytics";,"
      description: "Advanced blockchain data analysis, transaction monitoring, and compliance reporting with real-time insights.";,"
      title: "Blockchain Analytics"
      description: "Advanced blockchain data analysis, transaction monitoring, and compliance reporting with real-time insights."
      benefit: "Real-time monitoring","
    },
    {
      icon: Globe,,,,
      title: "Web3 Integration";,"
      description: "Seamless Web3 integration for existing applications with wallet connectivity and decentralized identity.";,"
      title: "Web3 Integration"
      description: "Seamless Web3 integration for existing applications with wallet connectivity and decentralized identity."
      benefit: "Smooth user experience","
    }
  ];

  const pricing: [,,
    {
      name: "Startup",";,"
      price: "$8,500",";,"
      period: "/month",";,"
      description: "Perfect for startups and small projects entering the Web3 space",";,"
      features: [,,,
        "Basic smart contract development",";"
        "Single blockchain integration",";"
        "Standard security auditing",";"
        "Email support",";"
        "Monthly progress reports",";"
        "Basic DeFi protocol setup",";"
        "Simple NFT marketplace",";"
        "Standard token development",";"
        "Basic analytics dashboard"
      ]
      popular: false,,
    },
    {
      name: "Growth",";,"
      price: "$25,000",";,"
      period: "/month",";,"
      description: "Ideal for growing projects with complex blockchain requirements",";,"
      features: [,,,
        "Advanced smart contract development",";"
        "Multi-chain integration (5 networks)",";"
        "Comprehensive security auditing",";"
        "Priority support",";"
        "Weekly progress reports",";"
        "Advanced DeFi protocols",";"
        "Custom NFT marketplace with advanced features",";"
        "Tokenomics design & implementation",";"
        "Advanced analytics & reporting",";"
        "Custom Web3 integrations",";"
        "DAO governance setup",";"
        "Yield farming protocols"
      ]
      popular: true,,
    },
    {
      name: "Enterprise",";,"
      price: "$75,000",";,"
      period: "/month",";,"
      description: "Complete solution for large-scale blockchain and Web3 implementations",";,"
      features: [,,,
        "Enterprise-grade smart contract suite",";"
        "Unlimited blockchain integrations",";"
        "Third-party security audits",";"
        "Dedicated blockchain architect",";"
        "Daily progress reports",";"
        "Complex DeFi ecosystem development",";"
        "Enterprise NFT & tokenization platform",";"
        "Custom blockchain development",";"
        "Enterprise analytics & compliance",";"
        "Full Web3 ecosystem integration",";"
        "Advanced DAO governance",";"
        "Cross-chain bridge development",";"
        "SLA guarantee",";"
        "24/7 monitoring & support"
      ]
      popular: false,,,
      name: "Startup"
      price: "$8,500"
      period: "/month"
      description: "Perfect for startups and small projects entering the Web3 space"
      features: [,,,
        "Basic smart contract development","
        "Single blockchain integration","
        "Standard security auditing","
        "Email support","
        "Monthly progress reports","
        "Basic DeFi protocol setup","
        "Simple NFT marketplace","
        "Standard token development","
        "Basic analytics dashboard"
      ]
      popular: false,,
    },
    {
      name: "Growth"
      price: "$25,000"
      period: "/month"
      description: "Ideal for growing projects with complex blockchain requirements"
      features: [,,,
        "Advanced smart contract development","
        "Multi-chain integration (5 networks)","
        "Comprehensive security auditing","
        "Priority support","
        "Weekly progress reports","
        "Advanced DeFi protocols","
        "Custom NFT marketplace with advanced features","
        "Tokenomics design & implementation","
        "Advanced analytics & reporting","
        "Custom Web3 integrations","
        "DAO governance setup","
        "Yield farming protocols"
      ]
      popular: true,,
    },
    {
      name: "Enterprise"
      price: "$75,000"
      period: "/month"
      description: "Complete solution for large-scale blockchain and Web3 implementations"
      features: [,,,
        "Enterprise-grade smart contract suite","
        "Unlimited blockchain integrations","
        "Third-party security audits","
        "Dedicated blockchain architect","
        "Daily progress reports","
        "Complex DeFi ecosystem development","
        "Enterprise NFT & tokenization platform","
        "Custom blockchain development","
        "Enterprise analytics & compliance","
        "Full Web3 ecosystem integration","
        "Advanced DAO governance","
        "Cross-chain bridge development","
        "SLA guarantee","
        "24/7 monitoring & support"
      ]
      popular: false,,
    }
  ];

  const testimonials: [,,
    {
      name: "Jennifer Martinez";,"
      role: "CEO, DeFi Innovation Lab";,"
      content: "Zion's blockchain expertise helped us launch a DeFi protocol that now manages $500M in TVL. The smart contract security audit prevented potential vulnerabilities worth millions.";,"
      name: "Jennifer Martinez"
      role: "CEO, DeFi Innovation Lab"
      content: "Zion's blockchain expertise helped us launch a DeFi protocol that now manages $500M in TVL. The smart contract security audit prevented potential vulnerabilities worth millions."
      rating: 5,,,,
      company: "DeFi Innovation Lab","
    },
    {
      name: "David Chen";,"
      role: "CTO, NFT Gaming Platform";,"
      content: "Our NFT marketplace went from concept to 100,000 users in 3 months. The multi-chain integration and advanced features set us apart from competitors.";,"
      name: "David Chen"
      role: "CTO, NFT Gaming Platform"
      content: "Our NFT marketplace went from concept to 100,000 users in 3 months. The multi-chain integration and advanced features set us apart from competitors."
      rating: 5,,,,
      company: "NFT Gaming Platform","
    },
    {
      name: "Dr. Sarah Johnson";,"
      role: "Founder, Healthcare DAO";,"
      content: "The DAO governance system and tokenomics design created a thriving community of 50,000 members. The transparency and security features are exceptional.";,"
      name: "Dr. Sarah Johnson"
      role: "Founder, Healthcare DAO"
      content: "The DAO governance system and tokenomics design created a thriving community of 50,000 members. The transparency and security features are exceptional."
      rating: 5,,,,
      company: "Healthcare DAO","
    }
  ];

  const services: [,,
    {
      title: "DeFi Development";,"
      icon: TrendingUp,,,,
      description: "Complete DeFi protocol development including DEXs, lending platforms, and yield farming systems.";,"
      metrics: "$500M+ TVL managed";,"
      benefits: ["Automated market makers", "Liquidity mining", "Cross-chain swaps"]","
    },
    {
      title: "NFT Solutions";,"
      icon: Coins,,,,
      description: "End-to-end NFT marketplace development with advanced features and tokenization services.";,"
      metrics: "100K+ users supported";,"
      benefits: ["Custom marketplace", "Royalty management", "Metadata optimization"]","
    },
    {
      title: "DAO Governance";,"
      icon: Globe,,,,
      description: "Decentralized autonomous organization setup with voting mechanisms and treasury management.";,"
      metrics: "50K+ community members";,"
      benefits: ["Voting systems", "Treasury management", "Proposal mechanisms"]","
    },
    {
      title: "Token Development";,"
      icon: Database,,,,
      description: "Custom token creation with advanced tokenomics, vesting schedules, and utility mechanisms.";,"
      metrics: "Zero security incidents";,"
      benefits: ["Custom tokenomics", "Vesting schedules", "Utility mechanisms"]",";,"
      title: "DeFi Development"
      icon: TrendingUp,,,,
      description: "Complete DeFi protocol development including DEXs, lending platforms, and yield farming systems."
      metrics: "$500M+ TVL managed"
      benefits: ["Automated market makers", "Liquidity mining", "Cross-chain swaps"]","
    },
    {
      title: "NFT Solutions"
      icon: Coins,,,,
      description: "End-to-end NFT marketplace development with advanced features and tokenization services."
      metrics: "100K+ users supported"
      benefits: ["Custom marketplace", "Royalty management", "Metadata optimization"]","
    },
    {
      title: "DAO Governance"
      icon: Globe,,,,
      description: "Decentralized autonomous organization setup with voting mechanisms and treasury management."
      metrics: "50K+ community members"
      benefits: ["Voting systems", "Treasury management", "Proposal mechanisms"]","
    },
    {
      title: "Token Development"
      icon: Database,,,,
      description: "Custom token creation with advanced tokenomics, vesting schedules, and utility mechanisms."
      metrics: "Zero security incidents"
      benefits: ["Custom tokenomics", "Vesting schedules", "Utility mechanisms"]","
    }
  ];

  const technologies: [,,
    { name: "Ethereum", type="Smart Contracts" }";"
    { name: "Polygon", type="Layer 2 Scaling" }";"
    { name: "Binance Smart Chain", type="High Performance" }";"
    { name: "Solana", type="Ultra Fast" }";"
    { name: "Polkadot", type="Interoperability" }";"
    { name: "Avalanche", type="Subnets" }";"
    { name: "Arbitrum", type="Optimistic Rollups" }";"
    { name: "Optimism", type="Layer 2 Solution" }";"
    { name: "Cosmos", type="Inter-Blockchain" }";"
    { name: "Near Protocol", type="Developer Friendly" }";"
    { name: "Algorand", type="Pure Proof of Stake" }";"
    { name: "Fantom", type="Fast Finality" }";"
    { name: "Ethereum", type="Smart Contracts" },"
    { name: "Polygon", type="Layer 2 Scaling" },"
    { name: "Binance Smart Chain", type="High Performance" },"
    { name: "Solana", type="Ultra Fast" },"
    { name: "Polkadot", type="Interoperability" },"
    { name: "Avalanche", type="Subnets" },"
    { name: "Arbitrum", type="Optimistic Rollups" },"
    { name: "Optimism", type="Layer 2 Solution" },"
    { name: "Cosmos", type="Inter-Blockchain" },"
    { name: "Near Protocol", type="Developer Friendly" },"
    { name: "Algorand", type="Pure Proof of Stake" },"
    { name: "Fantom", type="Fast Finality" }"
  ];

  return (
    <>
      <Helmet >
        <title >Blockchain & Web3 Services - Zion Tech Group | DeFi, NFT, DAO Solutions</title>
        <meta name: "description",";,"
  content: "Expert blockchain and Web3 services including DeFi protocols, NFT marketplaces, DAO governance, and smart contract development. Enterprise-grade security and multi-chain integration." /><meta name: "keywords" content ="blockchain development, Web3 services, DeFi protocols, NFT marketplace, DAO governance, smart contracts, cryptocurrency development" /><link rel: "canonical" href="https://ziontechgroup.com/services/blockchain-web3/>",";,"
  content: "Expert blockchain and Web3 services including DeFi protocols, NFT marketplaces, DAO governance, and smart contract development. Enterprise-grade security and multi-chain integration.","
        />
        <meta name: "keywords" content ="blockchain development, Web3 services, DeFi protocols, NFT marketplace, DAO governance, smart contracts, cryptocurrency development" />","
        <link rel: "canonical" href ="https: //ziontechgroup.com/services/blockchain-web3" />","
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">","
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center"
              <h1 className="text-5xl md: text-7xl font-bold mb-6">",";,"
  Blockchain & <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Web3</span>
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto mb-8">,";,"
  Expert blockchain and Web3 services including DeFi protocols, NFT marketplaces
                DAO governance, and enterprise-grade smart contract development with multi-chain integration.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">","
        <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center">","
              <h1 className="text-5xl md: text-7xl font-bold mb-6">",";,"
  Blockchain & <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Web3</span>","
              </h1>
              <p className="text-xl md: text-2xl text-indigo-100 max-w-4xl mx-auto mb-8">",";,"
  Expert blockchain and Web3 services including DeFi protocols, NFT marketplaces
                DAO governance, and enterprise-grade smart contract development with multi-chain integration.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">","
                <a href="/contact",";,"
  className="inline-flex items-center px-8 py-4 bg-indigo-600 hover: bg-indigo-700 text-white font-semibold rounded-lg transition-colors","
                >
                  <Phone className="w-5 h-5 mr-2/>
                  <Phone className="w-5 h-5 mr-2" />",";,"
  Schedule Consultation
                </a>
                <a href="#pricing",";,"
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-indigo-900 font-semibold rounded-lg transition-colors","
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2/>
                  <ArrowRight className="w-5 h-5 ml-2" />","
      <main className="min-h-screen bg-white">","
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center">
              <h1 className="text-5xl md: text-7xl font-bold mb-6">"
  Blockchain & <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Web3</span>
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto mb-8">,";,"
  Expert blockchain and Web3 services including DeFi protocols, NFT marketplaces
                DAO governance, and enterprise-grade smart contract development with multi-chain integration.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">","
        <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center">","
              <h1 className="text-5xl md: text-7xl font-bold mb-6">"
  Blockchain & <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Web3</span>","
              </h1>
              <p className="text-xl md: text-2xl text-indigo-100 max-w-4xl mx-auto mb-8">"
  Expert blockchain and Web3 services including DeFi protocols, NFT marketplaces
                DAO governance, and enterprise-grade smart contract development with multi-chain integration.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">","
                <a href="/contact",";,"
  className="inline-flex items-center px-8 py-4 bg-indigo-600 hover: bg-indigo-700 text-white font-semibold rounded-lg transition-colors","
                >
                  <Phone className="w-5 h-5 mr-2/>
                  <Phone className="w-5 h-5 mr-2" />",";,"
  Schedule Consultation
                </a>
                <a href="#pricing",";,"
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-indigo-900 font-semibold rounded-lg transition-colors","
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2/>
                  <ArrowRight className="w-5 h-5 ml-2" />","
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-gray-50"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-12"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section className="py-16 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-12">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Why Choose Our Blockchain & Web3 Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-16 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-12">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">"
  Why Choose Our Blockchain & Web3 Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
  Transform your business with cutting-edge blockchain technology and Web3 innovation.
              </p>
            </div>

            <div className="grid md: grid-cols-4 gap-8">","
              <div className="text-center"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4"
                  <Shield className="w-8 h-8 text-indigo-600/>
            <div className="grid md: grid-cols-4 gap-8">","
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">","
                  <Shield className="w-8 h-8 text-indigo-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Vulnerabilities</h3>","
                <p className="text-gray-600">Comprehensive security auditing</p>","
              </div>
              <div className="text-center"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"
                  <Network className="w-8 h-8 text-blue-600/>
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">","
                  <Network className="w-8 h-8 text-blue-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Chain</h3>","
                <p className="text-gray-600">Universal blockchain compatibility</p>","
              </div>
              <div className="text-center"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"
                  <TrendingUp className="w-8 h-8 text-green-600/>
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">","
                  <TrendingUp className="w-8 h-8 text-green-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">$500M+ TVL</h3>","
                <p className="text-gray-600">Proven track record</p>","
              </div>
              <div className="text-center"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4"
                  <Globe className="w-8 h-8 text-purple-600/>
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">","
                  <Globe className="w-8 h-8 text-purple-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Web3 Ready</h3>","
                <p className="text-gray-600">Future-proof solutions</p>","
            <div className="grid md: grid-cols-4 gap-8">","
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-indigo-600/>
            <div className="grid md: grid-cols-4 gap-8">","
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">","
                  <Shield className="w-8 h-8 text-indigo-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Vulnerabilities</h3>","
                <p className="text-gray-600">Comprehensive security auditing</p>","
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Network className="w-8 h-8 text-blue-600/>
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">","
                  <Network className="w-8 h-8 text-blue-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Chain</h3>","
                <p className="text-gray-600">Universal blockchain compatibility</p>","
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600/>
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">","
                  <TrendingUp className="w-8 h-8 text-green-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">$500M+ TVL</h3>","
                <p className="text-gray-600">Proven track record</p>","
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Globe className="w-8 h-8 text-purple-600/>
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">","
                  <Globe className="w-8 h-8 text-purple-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Web3 Ready</h3>","
                <p className="text-gray-600">Future-proof solutions</p>","
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Comprehensive Blockchain Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">"
  Comprehensive Blockchain Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
  End-to-end blockchain and Web3 solutions for modern decentralized applications.
              </p>
            </div>

            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {services.map((service, index) => {
                const Icon: service.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6"
                      <Icon className="w-8 h-8 text-indigo-600/>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {services.map((service, index) => {
                const Icon: service.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">","
                      <Icon className="w-8 h-8 text-indigo-600" />","
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                    <p className="text-gray-600 mb-4">{service.description}</p>"
                    <div className="text-indigo-600 font-semibold mb-4">{service.metrics}</div>"
                    <ul className="space-y-2">","
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm"
                          <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0/>
                          <span className="text-gray-700">{benefit}</span>";"
                        <li key={benefitIndex} className="flex items-center text-sm">","
                          <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />","
                          <span className="text-gray-700">{benefit}</span>"
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {services.map((service, index) => {
                const Icon: service.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
                      <Icon className="w-8 h-8 text-indigo-600/>
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {services.map((service, index) => {
                const Icon: service.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">","
                      <Icon className="w-8 h-8 text-indigo-600" />","
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>"
                    <p className="text-gray-600 mb-4">{service.description}</p>"
                    <div className="text-indigo-600 font-semibold mb-4">{service.metrics}</div>"
                    <ul className="space-y-2">","
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0/>
                          <span className="text-gray-700">{benefit}</span>";"
                        <li key={benefitIndex} className="flex items-center text-sm">","
                          <CheckCircle className="w-4 h-4 text-indigo-500 mr-2 flex-shrink-0" />","
                          <span className="text-gray-700">{benefit}</span>"
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section className="py-20 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Advanced Blockchain Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">"
  Advanced Blockchain Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
  Powerful features that make your blockchain solutions secure, scalable, and future-proof.
              </p>
            </div>

            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4"
                      <Icon className="w-6 h-6 text-indigo-600/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>";"
                    <p className="text-gray-600 mb-4">{feature.description}</p>";"
                    <div className="inline-flex items-center text-indigo-600 font-semibold text-sm"
                      <CheckCircle className="w-4 h-4 mr-1/>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">","
                      <Icon className="w-6 h-6 text-indigo-600" />","
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>"
                    <p className="text-gray-600 mb-4">{feature.description}</p>"
                    <div className="inline-flex items-center text-indigo-600 font-semibold text-sm">","
                      <CheckCircle className="w-4 h-4 mr-1" />","
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-indigo-600/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>";"
                    <p className="text-gray-600 mb-4">{feature.description}</p>";"
                    <div className="inline-flex items-center text-indigo-600 font-semibold text-sm">
                      <CheckCircle className="w-4 h-4 mr-1/>
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">","
                      <Icon className="w-6 h-6 text-indigo-600" />","
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>"
                    <p className="text-gray-600 mb-4">{feature.description}</p>"
                    <div className="inline-flex items-center text-indigo-600 font-semibold text-sm">","
                      <CheckCircle className="w-4 h-4 mr-1" />","
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Supported Blockchain Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">"
  Supported Blockchain Technologies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
  Expertise across all major blockchain networks and protocols.
              </p>
            </div>

            <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-4 gap-6">","
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center hover: shadow-lg transition-shadow">","
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3"
                    <Network className="w-6 h-6 text-indigo-600/>
            <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-4 gap-6">","
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center hover: shadow-lg transition-shadow">","
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">","
                    <Network className="w-6 h-6 text-indigo-600" />","
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">{tech.name}</div>"
                  <div className="text-sm text-gray-600">{tech.type}</div>"
            <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-4 gap-6">","
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center hover: shadow-lg transition-shadow">","
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Network className="w-6 h-6 text-indigo-600/>
            <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-4 gap-6">","
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center hover: shadow-lg transition-shadow">","
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">","
                    <Network className="w-6 h-6 text-indigo-600" />","
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">{tech.name}</div>"
                  <div className="text-sm text-gray-600">{tech.type}</div>"
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-gray-50"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section id="pricing" className ="py-20 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Transparent Blockchain Development Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section id="pricing" className ="py-20 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">"
  Transparent Blockchain Development Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
  Choose the plan that fits your blockchain project complexity and scale.
              </p>
            </div>

            <div className="grid md: grid-cols-3 gap-8">","
            <div className="grid md: grid-cols-3 gap-8">","
              {pricing.map((plan, index) => (
                <div key={index} className: {`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-indigo-500 relative' : ''}`}>`
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">","
                      <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">",";,"
            <div className="grid md: grid-cols-3 gap-8">","
            <div className="grid md: grid-cols-3 gap-8">","
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-indigo-500 relative' : ''}`}>`
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">","
                      <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">"
  Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">","
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>"
                    <div className="flex items-center justify-center mb-2">","
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>"
                      <span className="text-gray-600 ml-1">{plan.period}</span>"
                    </div>
                    <p className="text-gray-600">{plan.description}</p>"
                  </div>
                  <ul className="space-y-4 mb-8">","
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center"
                        <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0/>
                        <span className="text-gray-700">{feature}</span>";"
                      <li key={featureIndex} className="flex items-center">","
                        <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />","
                        <span className="text-gray-700">{feature}</span>"
                      </li>
                    ))}
                  </ul>
                  <a href="/contact",";,"
                  <div className="text-center mb-8">","
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>"
                    <div className="flex items-center justify-center mb-2">","
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>"
                      <span className="text-gray-600 ml-1">{plan.period}</span>"
                    </div>
                    <p className="text-gray-600">{plan.description}</p>"
                  </div>
                  <ul className="space-y-4 mb-8">","
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0/>
                        <span className="text-gray-700">{feature}</span>";"
                      <li key={featureIndex} className="flex items-center">","
                        <CheckCircle className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />","
                        <span className="text-gray-700">{feature}</span>"
                      </li>
                    ))}
                  </ul>
                  <a href="/contact",";,"
  className={,,
`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${`
plan.popular
? 'bg-indigo-600 text-white hover: bg-indigo-700',';,
? 'bg-indigo-600 text-white hover: bg-indigo-700',',';,
: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
}`}`
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">","
              <p className="text-gray-600 mb-4">Need a custom blockchain solution?</p>","
              <a href="/contact",";,"
  className="inline-flex items-center text-indigo-600 hover: text-indigo-700 font-semibold","
              >
                Contact our Blockchain Experts
                <ArrowRight className="w-4 h-4 ml-1/>
                <ArrowRight className="w-4 h-4 ml-1" />","
            <div className="text-center mt-12">","
              <p className="text-gray-600 mb-4">Need a custom blockchain solution?</p>","
              <a href="/contact",";,"
  className="inline-flex items-center text-indigo-600 hover: text-indigo-700 font-semibold","
              >
                Contact our Blockchain Experts
                <ArrowRight className="w-4 h-4 ml-1/>
                <ArrowRight className="w-4 h-4 ml-1" />","
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">"
  What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
  Join hundreds of satisfied customers who have launched successful blockchain and Web3 projects with our expertise.
              </p>
            </div>

            <div className="grid md: grid-cols-3 gap-8">","
            <div className="grid md: grid-cols-3 gap-8">","
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">","
                  <div className="flex items-center mb-4">","
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current/>
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />","
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">","
                    "{testimonial.content}"
                  </blockquote>
                  <div >
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>"
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>"
                    <div className="text-indigo-600 text-sm font-medium">{testimonial.company}</div>"
            <div className="grid md: grid-cols-3 gap-8">","
            <div className="grid md: grid-cols-3 gap-8">","
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">","
                  <div className="flex items-center mb-4">","
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current/>
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />","
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">","
                    "{testimonial.content}"
                  </blockquote>
                  <div >
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>"
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>"
                    <div className="text-indigo-600 text-sm font-medium">{testimonial.company}</div>"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className="text-4xl font-bold mb-6"
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className="text-4xl font-bold mb-6">",";,"
  Ready to Launch Your Blockchain Project?
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">",";,"
  Join hundreds of companies already using our blockchain and Web3 services to build the future of decentralized applications.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
              <a href="/contact",";,"
  className="inline-flex items-center px-8 py-4 bg-indigo-600 hover: bg-indigo-700 text-white font-semibold rounded-lg transition-colors","
              >
                <Phone className="w-5 h-5 mr-2/>
                <Phone className="w-5 h-5 mr-2" />",";,"
  Schedule Free Consultation
              </a>
              <a href="/case-studies",";,"
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-indigo-900 font-semibold rounded-lg transition-colors","
              >
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2/>
                <ArrowRight className="w-5 h-5 ml-2" />","
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className="text-4xl font-bold mb-6">
        <section className="py-20 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className="text-4xl font-bold mb-6">"
  Ready to Launch Your Blockchain Project?
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-8">"
  Join hundreds of companies already using our blockchain and Web3 services to build the future of decentralized applications.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
              <a href="/contact",";,"
  className="inline-flex items-center px-8 py-4 bg-indigo-600 hover: bg-indigo-700 text-white font-semibold rounded-lg transition-colors","
              >
                <Phone className="w-5 h-5 mr-2/>
                <Phone className="w-5 h-5 mr-2" />",";,"
  Schedule Free Consultation
              </a>
              <a href="/case-studies",";,"
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-indigo-900 font-semibold rounded-lg transition-colors","
              >
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2/>
                <ArrowRight className="w-5 h-5 ml-2" />","
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlockchainWeb3;