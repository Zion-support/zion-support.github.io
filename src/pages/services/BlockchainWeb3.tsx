import React from 'react';
import Head from 'next/head';
import { 
  Blockchain, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const BlockchainWeb3: React.FC = () => {
  const services = [
    {
      title: "Smart Contract Development",
      description: "Secure, audited smart contracts for DeFi, NFTs, and enterprise applications",
      icon: "🔐",
      features: ["Solidity/Vyper Development", "Security Auditing", "Gas Optimization", "Testing & Deployment"]
    },
    {
      title: "DeFi Solutions",
      description: "Decentralized finance applications and protocols",
      icon: "💰",
      features: ["DEX Development", "Lending Protocols", "Yield Farming", "Staking Solutions"]
    },
    {
      title: "NFT Platforms",
      description: "Complete NFT marketplace and collection management systems",
      icon: "🎨",
      features: ["Marketplace Development", "Collection Management", "Royalty Systems", "Metadata Standards"]
    },
    {
      title: "Web3 Integration",
      description: "Seamless blockchain integration for existing applications",
      icon: "🔗",
      features: ["Wallet Integration", "Blockchain APIs", "Transaction Management", "User Experience"]
    }
  ];

  const technologies = [
    { name: "Ethereum", features: ["Smart Contracts", "DeFi", "NFTs", "Layer 2 Solutions"] },
    { name: "Polygon", features: ["Scalability", "Low Fees", "Ethereum Compatibility", "Fast Transactions"] },
    { name: "Solana", features: ["High Performance", "Low Cost", "Fast Finality", "Eco-friendly"] },
    { name: "Polkadot", features: ["Interoperability", "Parachains", "Governance", "Scalability"] }
  ];

  const developmentProcess = [
    { step: 1, title: "Discovery", description: "Requirements analysis and blockchain selection" },
    { step: 2, title: "Design", description: "Architecture and smart contract design" },
    { step: 3, title: "Development", description: "Smart contract and frontend development" },
    { step: 4, title: "Deployment", description: "Testing, auditing, and mainnet deployment" }
  ];

  return (
    <>
      <Head>
        <title>Blockchain & Web3 Solutions - Zion Tech Group</title>
        <meta name="description" content="Expert blockchain development, DeFi solutions, NFT platforms, and Web3 integration services. Build the future of decentralized technology with Zion Tech Group." />
        <meta name="keywords" content="blockchain, web3, defi, nft, smart contracts, ethereum, cryptocurrency" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Blockchain className="w-12 h-12 text-blue-400 mr-3" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Blockchain & Web3
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge blockchain technology. 
              From DeFi protocols to NFT marketplaces, we build the future of decentralized applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Blockchain Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive blockchain solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Blockchain Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with leading blockchain platforms to deliver optimal solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-xl font-semibold text-white mb-4">{tech.name}</h3>
                  <ul className="space-y-2">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <ArrowRight className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                A systematic approach to building secure, scalable, and user-friendly 
                blockchain applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {developmentProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build on the Blockchain?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how blockchain technology can transform your business 
              and create new opportunities for growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </a>
              <a
                href="/solutions"
                className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlockchainWeb3;
