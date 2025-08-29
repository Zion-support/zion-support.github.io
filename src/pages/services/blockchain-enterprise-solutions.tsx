import { Helmet } from 'react-helmet-async';
import { Lock, Shield, Zap, Settings, Users, Globe, ArrowRight, CheckCircle, Play, Download, Mail, Target, Activity, BarChart3, Database} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlockchainEnterpriseSolutions() {
  return (
    <>
      <Helmet>
        <title>Blockchain Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your business with enterprise blockchain solutions. Secure transactions, smart contracts, and decentralized applications for modern enterprises." />
        <meta name="keywords" content="blockchain, enterprise blockchain, smart contracts, DeFi, distributed ledger, cryptocurrency, enterprise solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium mb-8">
                <Lock className="w-4 h-4 mr-2" />
                Enterprise Blockchain Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Blockchain
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Enterprise</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Leverage the power of blockchain technology to transform your enterprise operations. 
                Secure transactions, smart contracts, and decentralized applications for the modern business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-yellow-500/30 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise Blockchain Capabilities
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our blockchain platform provides comprehensive enterprise solutions with security, 
                scalability, and compliance built-in.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Lock,
                  title: "Smart Contracts",
                  description: "Automated, self-executing contracts with predefined conditions and outcomes."
                },
                {
                  icon: Shield,
                  title: "Security & Privacy",
                  description: "Enterprise-grade security with advanced encryption and privacy controls."
                },
                {
                  icon: Zap,
                  title: "DeFi Solutions",
                  description: "Decentralized finance applications for modern financial operations."
                },
                {
                  icon: Settings,
                  title: "Enterprise Integration",
                  description: "Seamless integration with existing enterprise systems and workflows."
                },
                {
                  icon: Users,
                  title: "Consortium Networks",
                  description: "Private blockchain networks for trusted business partnerships."
                },
                {
                  icon: Globe,
                  title: "Cross-border Solutions",
                  description: "Global blockchain networks for international business operations."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Blockchain Use Cases
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Discover how blockchain technology can revolutionize different aspects of your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Supply Chain",
                  description: "Track products from origin to destination with immutable records.",
                  icon: LinkIcon,
                  benefits: ["Product tracking", "Quality assurance", "Compliance verification"]
                },
                {
                  title: "Financial Services",
                  description: "Secure transactions, cross-border payments, and asset tokenization.",
                  icon: Zap,
                  benefits: ["Secure payments", "Asset tokenization", "Cross-border transfers"]
                },
                {
                  title: "Healthcare",
                  description: "Secure patient records, drug traceability, and medical supply chains.",
                  icon: Users,
                  benefits: ["Patient records", "Drug traceability", "Supply chain"]
                },
                {
                  title: "Real Estate",
                  description: "Property tokenization, smart contracts, and automated transactions.",
                  icon: Target,
                  benefits: ["Property tokenization", "Smart contracts", "Automated transactions"]
                },
                {
                  title: "Government",
                  description: "Voting systems, identity management, and public records.",
                  icon: Globe,
                  benefits: ["Voting systems", "Identity management", "Public records"]
                },
                {
                  title: "Energy Trading",
                  description: "Peer-to-peer energy trading and renewable energy certificates.",
                  icon: Activity,
                  benefits: ["P2P trading", "Renewable certificates", "Grid management"]
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-slate-300 mb-4">{useCase.description}</p>
                  <ul className="space-y-1">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-yellow-400 flex items-center">
                        <CheckCircle className="w-3 h-3 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Blockchain Technology
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Built on cutting-edge blockchain technologies for maximum security, performance, and scalability.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    "Multi-chain architecture supporting multiple blockchain networks",
                    "Advanced consensus mechanisms for security and performance",
                    "Smart contract development and deployment platform",
                    "Enterprise-grade security with encryption and access controls",
                    "Scalable infrastructure for high-volume transactions",
                    "Integration APIs for existing enterprise systems"
                  ].map((technology, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{technology}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Blockchain Types</h3>
                <div className="space-y-4">
                  {[
                    { type: "Public", icon: Globe, color: "from-blue-500 to-cyan-500", description: "Open, permissionless networks" },
                    { type: "Private", icon: Lock, color: "from-purple-500 to-pink-500", description: "Controlled, permissioned networks" },
                    { type: "Consortium", icon: Users, color: "from-green-500 to-emerald-500", description: "Multi-organization networks" },
                    { type: "Hybrid", icon: LinkIcon, color: "from-orange-500 to-red-500", description: "Combination of public and private" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="text-slate-300 font-medium">{item.type}</span>
                        <p className="text-xs text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DeFi Solutions Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                DeFi Enterprise Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Decentralized finance solutions designed for enterprise use cases and compliance requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">DeFi Applications</h3>
                <div className="space-y-4">
                  {[
                    "Decentralized exchanges (DEX) for enterprise trading",
                    "Lending and borrowing platforms with smart contracts",
                    "Yield farming and liquidity provision strategies",
                    "Asset tokenization and fractional ownership",
                    "Automated market makers (AMM) for liquidity",
                    "Cross-chain bridges for multi-network operations"
                  ].map((application, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Enterprise Benefits</h3>
                <div className="space-y-4">
                  {[
                    "Reduce transaction costs and eliminate intermediaries",
                    "Improve transparency and auditability of financial operations",
                    "Enable 24/7 global financial services and trading",
                    "Automate complex financial processes with smart contracts",
                    "Access to new financial instruments and investment opportunities",
                    "Enhanced security and reduced fraud through blockchain technology"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Implementation Process
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our systematic approach ensures successful blockchain implementation for your enterprise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment",
                  description: "Evaluate business needs and identify blockchain opportunities."
                },
                {
                  step: "02",
                  title: "Architecture",
                  description: "Design blockchain solution architecture and network topology."
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Build smart contracts and blockchain applications."
                },
                {
                  step: "04",
                  title: "Deployment",
                  description: "Deploy and integrate with existing enterprise systems."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-500/10 to-orange-600/10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with Blockchain?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Leverage the power of blockchain technology to secure, automate, and optimize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-200"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-yellow-500/30 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500/10 transition-all duration-200"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}