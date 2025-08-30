import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Lock, 
  Link as LinkIcon, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  BarChart3,
  TrendingUp,
  Activity,
  Globe,
  Building,
  FileText,
  Monitor,
  Users,
  Database,
  Network,
  Server,
  Code,
  Wallet,
  Smartphone,
  Zap,
  Target,
  Rocket,
  Star,
  Coins,
  Fingerprint,
  Eye,
  Cpu
} from 'lucide-react';

export default function Blockchain() {
  const services = [
    {
      title: "Smart Contract Development",
      description: "Build secure and efficient smart contracts for various blockchain platforms.",
      icon: Code,
      features: ["Ethereum contracts", "Solana programs", "Polygon solutions", "Security auditing"]
    },
    {
      title: "DeFi Applications",
      description: "Develop decentralized finance applications and protocols.",
      icon: Coins,
      features: ["DEX platforms", "Lending protocols", "Yield farming", "Staking solutions"]
    },
    {
      title: "NFT Marketplaces",
      description: "Create NFT platforms for digital art, collectibles, and gaming.",
      icon: Star,
      features: ["Marketplace development", "Minting platforms", "Trading systems", "Royalty management"]
    },
    {
      title: "Enterprise Blockchain",
      description: "Implement private and consortium blockchain solutions for businesses.",
      icon: Building,
      features: ["Hyperledger Fabric", "Corda networks", "Supply chain tracking", "Identity management"]
    },
    {
      title: "Cross-Chain Solutions",
      description: "Build bridges and interoperability solutions between different blockchains.",
      icon: LinkIcon,
      features: ["Bridge development", "Cross-chain swaps", "Asset transfers", "Interoperability"]
    },
    {
      title: "Blockchain Consulting",
      description: "Strategic guidance on blockchain adoption and implementation.",
      icon: Monitor,
      features: ["Technology assessment", "Use case identification", "Implementation strategy", "Training"]
    }
  ];

  const solutions = [
    {
      title: "Financial Services",
      description: "Transform traditional finance with blockchain technology.",
      icon: BarChart3,
      features: ["Payment processing", "Asset tokenization", "Cross-border transfers", "Regulatory compliance"]
    },
    {
      title: "Supply Chain",
      description: "Enhance transparency and traceability in supply chains.",
      icon: Network,
      features: ["Product tracking", "Quality assurance", "Compliance monitoring", "Stakeholder collaboration"]
    },
    {
      title: "Healthcare",
      description: "Secure and share medical records with blockchain technology.",
      icon: Shield,
      features: ["Patient data management", "Drug traceability", "Clinical trials", "HIPAA compliance"]
    },
    {
      title: "Real Estate",
      description: "Streamline property transactions and ownership records.",
      icon: Building,
      features: ["Property tokenization", "Smart contracts", "Title management", "Fractional ownership"]
    }
  ];

  const benefits = [
    {
      title: "Transparency",
      description: "Immutable and transparent record-keeping for all transactions.",
      icon: Eye
    },
    {
      title: "Security",
      description: "Cryptographically secure and tamper-proof data storage.",
      icon: Lock
    },
    {
      title: "Efficiency",
      description: "Automated processes and reduced intermediaries.",
      icon: Zap
    },
    {
      title: "Trust",
      description: "Decentralized trust without relying on central authorities.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
              <LinkIcon className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blockchain
            <span className="text-zion-cyan"> Solutions</span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge blockchain technology. Build secure, 
            transparent, and efficient decentralized applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:scale-105"
            >
              Build on Blockchain
            </Link>
            <Link
              to="/request-quote"
              className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Blockchain Assessment
            </Link>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Blockchain Development Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              From smart contracts to enterprise solutions, we provide comprehensive blockchain development services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-zion-blue-dark border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Tailored blockchain solutions for your industry's unique challenges and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className="bg-zion-blue border border-zion-purple/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-zion-slate-light mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Blockchain?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Experience the revolutionary benefits of blockchain technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build on Blockchain?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Let's explore how blockchain technology can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/blockchain-assessment"
              className="border border-zion-cyan text-zion-cyan px-8 py-4 rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
            >
              Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}