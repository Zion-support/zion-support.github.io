<<<<<<< HEAD
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Professional blockchain solutions services for your business needs.',
  keywords: 'blockchain solutions, services, business, technology'
}

=======
<<<<<<< HEAD
export const metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain solutions for modern businesses.',
  keywords: 'blockchain-solutions, services, business, technology'
}
>>>>>>> origin/chore/fix-lint-and-merge
export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blockchain Solutions
          </h1>
<<<<<<< HEAD
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional blockchain solutions services for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-4">Fast & Reliable</h3>
            <p className="text-gray-300">
              High-performance solutions that deliver results quickly and consistently.
=======
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive blockchain solutions for modern businesses.
=======
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page | Zion Tech Group',
  description: 'Professional page solutions for your business needs.',
  keywords: 'page',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Page | Zion Tech Group',
    description: 'Professional page solutions for your business needs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page | Zion Tech Group',
    description: 'Professional page solutions for your business needs.',
  },
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Page</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional page solutions for your business needs.
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored blockchain-solutions solutions designed for your specific business requirements.
=======
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
            <p className="text-gray-600 mb-4">
              Advanced features and capabilities for your business needs.
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Professional solutions</li>
              <li>• 24/7 support</li>
              <li>• Scalable architecture</li>
            </ul>
          </div>
<<<<<<< HEAD
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-xl font-bold text-white mb-4">Easy Integration</h3>
            <p className="text-gray-300">
              Seamlessly integrate with your existing systems and workflows.
=======
<<<<<<< HEAD
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
>>>>>>> origin/chore/fix-lint-and-merge
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
<<<<<<< HEAD
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-white mb-4">Scalable Solutions</h3>
            <p className="text-gray-300">
              Grow with your business with our flexible and scalable platform.
=======
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your blockchain-solutions solutions run smoothly.
>>>>>>> origin/chore/fix-lint-and-merge
            </p>

export default function BlockchainSolutionsPage() { 
  return ( 
    <div className="animate-fade-in">
      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Blockchain Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlockchainServiceCard
            title="DeFi Protocol Development"
            description="Decentralized finance protocols with yield farming, liquidity pools, and automated market makers"
            features={["Smart contract development", "Yield farming mechanisms", "Liquidity pool management", "Governance tokens", "Security auditing"]}
            price="$25k–$100k"
            icon="🏦"
          />
          <BlockchainServiceCard
            title="NFT Marketplace & Collections"
            description="Complete NFT platforms with minting, trading, and marketplace functionality"
            features={["NFT minting contracts", "Marketplace development", "Royalty management", "Metadata optimization", "IPFS integration"]}
            price="$15k–$60k"
            icon="🎨"
          />
          <BlockchainServiceCard
            title="Web3 Applications"
            description="Decentralized applications with wallet integration and blockchain connectivity"
            features={["Wallet integration", "Smart contract interaction", "Token management", "User authentication", "Transaction handling"]}
            price="$20k–$80k"
            icon="🌐"
          />
          <BlockchainServiceCard
            title="Smart Contract Auditing"
            description="Comprehensive security auditing and optimization of smart contracts"
            features={["Security vulnerability analysis", "Gas optimization", "Code review", "Test coverage", "Compliance checking"]}
            price="$5k–$25k"
            icon="🔍"
          />
          <BlockchainServiceCard
            title="Token Development & ICO"
            description="Custom token creation and initial coin offering management"
            features={["ERC-20/ERC-721 tokens", "Tokenomics design", "ICO platform", "Vesting mechanisms", "Distribution management"]}
            price="$10k–$40k"
            icon="🪙"
          />
          <BlockchainServiceCard
            title="Cross-Chain Solutions"
            description="Interoperability solutions for multi-blockchain connectivity"
            features={["Bridge development", "Cross-chain swaps", "Multi-chain wallets", "Interoperability protocols", "Asset migration"]}
            price="$30k–$120k"
            icon="🔗"
          />
          <BlockchainServiceCard
            title="DAO Development & Governance"
            description="Decentralized autonomous organization platforms with governance mechanisms"
            features={["Governance token design", "Voting mechanisms", "Treasury management", "Proposal systems", "Member management", "Transparency tools"]}
            price="$20k–$80k"
            icon="🗳️"
          />
          <BlockchainServiceCard
            title="Metaverse & Virtual Worlds"
            description="Blockchain-powered virtual worlds and metaverse platforms"
            features={["Virtual land NFTs", "Avatar systems", "In-world economies", "Social features", "Gaming mechanics", "VR/AR integration"]}
            price="$40k–$150k"
            icon="🌍"
          />
          <BlockchainServiceCard
            title="Blockchain Gaming & Play-to-Earn"
            description="Gaming platforms with blockchain integration and tokenized rewards"
            features={["Game development", "NFT integration", "Token economics", "Marketplace features", "Guild systems", "Tournament management"]}
            price="$30k–$120k"
            icon="🎮"
          />
          <BlockchainServiceCard
            title="Supply Chain & Traceability"
            description="Blockchain solutions for supply chain transparency and product traceability"
            features={["Product tracking", "Quality verification", "Authenticity proof", "Compliance reporting", "Stakeholder management", "IoT integration"]}
            price="$25k–$90k"
            icon="📦"
          />
          <BlockchainServiceCard
            title="Identity & KYC Solutions"
            description="Decentralized identity management and KYC/AML compliance systems"
            features={["Digital identity", "KYC verification", "Privacy protection", "Compliance reporting", "Cross-platform integration", "Biometric authentication"]}
            price="$20k–$70k"
            icon="🆔"
          />
          <BlockchainServiceCard
            title="Real Estate Tokenization"
            description="Property tokenization and fractional ownership platforms"
            features={["Property tokenization", "Fractional ownership", "Rental income distribution", "Property management", "Legal compliance", "Marketplace integration"]}
            price="$35k–$100k"
            icon="🏠"
          />
          <BlockchainServiceCard
            title="Carbon Credit & ESG Trading"
            description="Blockchain platforms for carbon credit trading and ESG compliance"
            features={["Carbon credit tokenization", "ESG reporting", "Trading mechanisms", "Verification systems", "Compliance tracking", "Impact measurement"]}
            price="$30k–$80k"
            icon="🌱"
          />
          <BlockchainServiceCard
            title="Insurance & Risk Management"
            description="Decentralized insurance protocols and risk management solutions"
            features={["Smart insurance contracts", "Risk assessment", "Claims processing", "Payout automation", "Reinsurance protocols", "Parametric insurance"]}
            price="$25k–$90k"
            icon="🛡️"
          />
          <BlockchainServiceCard
            title="Healthcare Data Management"
            description="Secure healthcare data sharing and patient record management"
            features={["Patient data privacy", "Interoperability", "Consent management", "Data sharing protocols", "Compliance frameworks", "AI integration"]}
            price="$40k–$120k"
            icon="🏥"
          />
          <BlockchainServiceCard
            title="Energy Trading & Grid Management"
            description="Peer-to-peer energy trading and smart grid management systems"
            features={["Energy tokenization", "P2P trading", "Smart contracts", "Grid optimization", "Renewable energy tracking", "Billing automation"]}
            price="$35k–$100k"
            icon="⚡"
          />
          <BlockchainServiceCard
            title="Voting & Governance Systems"
            description="Secure and transparent voting systems for organizations and governments"
            features={["Secure voting", "Identity verification", "Result transparency", "Audit trails", "Multi-level governance", "Mobile integration"]}
            price="$20k–$60k"
            icon="🗳️"
          />
          <BlockchainServiceCard
            title="Intellectual Property & Patents"
            description="IP protection and patent management on blockchain"
            features={["IP registration", "Patent tracking", "Royalty distribution", "Dispute resolution", "Licensing management", "Prior art verification"]}
            price="$25k–$70k"
            icon="💡"
          />
          <BlockchainServiceCard
            title="Gaming Assets & Marketplaces"
            description="Cross-game asset trading and gaming NFT marketplaces"
            features={["Asset interoperability", "Cross-game trading", "Rarity systems", "Marketplace features", "Guild management", "Tournament rewards"]}
            price="$20k–$80k"
            icon="🎯"
          />
          <BlockchainServiceCard
            title="Decentralized Storage Solutions"
            description="Distributed storage networks and file sharing protocols"
            features={["Distributed storage", "File encryption", "Access control", "Redundancy management", "Cost optimization", "API integration"]}
            price="$15k–$50k"
            icon="💾"
          />
          <BlockchainServiceCard
            title="Prediction Markets & Oracles"
            description="Decentralized prediction markets and oracle data feeds"
            features={["Market creation", "Oracle integration", "Liquidity management", "Dispute resolution", "Data verification", "API services"]}
            price="$25k–$80k"
            icon="🔮"
          />
          <BlockchainServiceCard
            title="Social Media & Content Platforms"
            description="Decentralized social media and content monetization platforms"
            features={["Content monetization", "Creator rewards", "Community governance", "Censorship resistance", "Data ownership", "Token economics"]}
            price="$30k–$100k"
            icon="📱"
          />
          <BlockchainServiceCard
            title="Lending & Borrowing Protocols"
            description="Decentralized lending platforms with automated risk management"
            features={["Collateral management", "Interest rate algorithms", "Liquidation mechanisms", "Risk assessment", "Governance tokens", "Multi-asset support"]}
            price="$25k–$90k"
            icon="💰"
          />
          <BlockchainServiceCard
            title="Stablecoin Development"
            description="Custom stablecoin creation with price stability mechanisms"
            features={["Price stability", "Collateral management", "Governance systems", "Audit compliance", "Multi-chain deployment", "Integration APIs"]}
            price="$20k–$60k"
            icon="💎"
          />
          <BlockchainServiceCard
            title="Blockchain Analytics & Monitoring"
            description="Comprehensive blockchain data analysis and monitoring tools"
            features={["Transaction analysis", "Address tracking", "Risk scoring", "Compliance monitoring", "Real-time alerts", "Custom dashboards"]}
            price="$15k–$50k"
            icon="📊"
          />
        </div>

        {/* Core Blockchain Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Blockchain Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlockchainServiceCard 
              title="Smart Contract Development" 
              description="Secure, audited smart contracts for various blockchain platforms"
              features={["Solidity development", "Security audits", "Gas optimization", "Multi-chain support"]}
              price="Starting at $15k"
              icon="📜"
            />
            <BlockchainServiceCard 
              title="DeFi Protocols" 
              description="Decentralized finance applications and yield farming platforms"
              features={["DEX development", "Lending protocols", "Yield farming", "Liquidity pools"]}
              price="Starting at $25k"
              icon="💰"
            />
            <BlockchainServiceCard 
              title="NFT Marketplaces" 
              description="Complete NFT platforms with minting, trading, and auction features"
              features={["NFT minting", "Marketplace UI", "Royalty system", "Metadata management"]}
              price="Starting at $20k"
              icon="🎨"
            />
            <BlockchainServiceCard 
              title="Web3 Applications" 
              description="Decentralized applications with wallet integration and blockchain connectivity"
              features={["Wallet integration", "MetaMask support", "IPFS storage", "User authentication"]}
              price="Starting at $18k"
              icon="🌐"
            />
            <BlockchainServiceCard 
              title="Token Development" 
              description="Custom token creation and tokenomics design"
              features={["ERC-20/ERC-721", "Tokenomics design", "Vesting contracts", "Multi-signature wallets"]}
              price="Starting at $12k"
              icon="🪙"
            />
            <BlockchainServiceCard 
              title="Blockchain Integration" 
              description="Integrate blockchain functionality into existing applications"
              features={["API development", "Node management", "Transaction handling", "Event monitoring"]}
              price="Starting at $10k"
              icon="🔗"
            />

=======

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
            <p className="text-gray-600 mb-4">
              Transform your business with our cutting-edge solutions.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Increased efficiency</li>
              <li>• Cost savings</li>
              <li>• Better results</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Support</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive support and maintenance services.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Expert consultation</li>
              <li>• Training and documentation</li>
              <li>• Ongoing maintenance</li>
            </ul>
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
          </div>
        </div>
      </div>
    </div>
  )
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service | Zion Tech Group',
  description: 'Professional services for your business needs.',
  keywords: 'services, business, technology',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Service | Zion Tech Group',
    description: 'Professional services for your business needs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Professional services for your business needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            This service page is under development. Please contact us for more information.
import Link from 'next/link';

export const metadata = {
  title: 'Blockchain Solutions | Zion Tech Group',
  description: 'Comprehensive blockchain development, DeFi solutions, NFT platforms, and Web3 integration for secure and decentralized applications.',
  keywords: 'blockchain solutions, DeFi development, NFT platforms, Web3 integration, smart contracts, decentralized applications'
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-12 h-12 flex items-center justify-center bg-purple-600 text-white rounded-full text-xl font-bold mb-4">
      {step}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ContactSection: React.FC = () => (
  <section className="py-12 bg-purple-600 rounded-lg text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Ready to Build the Future of Web3?</h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Let's discuss your blockchain project and how we can help you create innovative decentralized solutions.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Blockchain Solutions Inquiry"
        className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
      >
        Get Free Consultation
      </a>
      <a
        href="tel:+13024640950"
        className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
      >
        Call +1 302 464 0950
      </a>
    </div>
    <div className="mt-8 text-sm">
      <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      <p>📧 kleber@ziontechgroup.com</p>
    </div>
  </section>
);

export default function BlockchainSolutionsPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-indigo-100 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Blockchain Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Unlock the power of decentralization with our expert blockchain development services.
          From secure smart contracts to innovative Web3 applications, we build the future of digital trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=Blockchain Solutions Inquiry"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Blockchain Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Blockchain Development Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a proven methodology to deliver secure, scalable, and innovative blockchain solutions.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step={1}
            title="Strategy & Architecture"
            description="Defining your blockchain strategy, selecting the right platform, and designing the architecture."
          />
          <ProcessStep
            step={2}
            title="Development & Testing"
            description="Building smart contracts, dApps, and conducting comprehensive security testing."
          />
          <ProcessStep
            step={3}
            title="Deployment & Maintenance"
            description="Deploying to mainnet, monitoring performance, and providing ongoing support."
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Blockchain Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive blockchain solutions to power your Web3 initiatives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Smart Contract Development"
            description="Secure, audited smart contracts for DeFi, NFTs, and enterprise applications."
            icon="📜"
          />
          <FeatureCard
            title="DeFi Protocol Development"
            description="Building decentralized finance protocols including DEXs, lending platforms, and yield farming."
            icon="💰"
          />
          <FeatureCard
            title="NFT Platform Development"
            description="Creating NFT marketplaces, minting platforms, and digital collectible ecosystems."
            icon="🎨"
          />
          <FeatureCard
            title="dApp Development"
            description="Full-stack decentralized applications with intuitive user interfaces."
            icon="🌐"
          />
          <FeatureCard
            title="Enterprise Blockchain"
            description="Private blockchain solutions for enterprise use cases and supply chain management."
            icon="🏢"
          />
          <FeatureCard
            title="Web3 Integration"
            description="Integrating Web3 features into existing applications and platforms."
            icon="🔗"
          />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}