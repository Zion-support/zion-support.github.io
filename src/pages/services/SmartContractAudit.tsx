import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, CheckCircle, Phone, Star } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SmartContractAudit: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Security Analysis",
      description: "Deep code analysis using static analysis, dynamic testing, and formal verification to identify vulnerabilities.",
      benefit: "99.8% vulnerability detection rate",
    },
    {
      icon: Search,
      title: "Automated Vulnerability Scanning",
      description: "AI-powered scanning tools that detect common smart contract vulnerabilities and security patterns.",
      benefit: "100+ vulnerability patterns detected",
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment & Mitigation",
      description: "Detailed risk analysis with prioritized recommendations and mitigation strategies.",
      benefit: "Zero critical vulnerabilities in production",
    },
    {
      icon: CheckCircle,
      title: "Compliance Verification",
      description: "Ensure compliance with industry standards, regulatory requirements, and best practices.",
      benefit: "100% compliance with standards",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Rapid audit completion with detailed reports delivered within 5-10 business days.",
      benefit: "5-10 day delivery guarantee",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified blockchain security experts with extensive experience in smart contract auditing.",
      benefit: "50+ successful audits completed",
    }
  ];

  const pricing = [
    {
      name="Basic Audit",
      price: "$2,500",
      period: "one-time",
      description: "Perfect for simple smart contracts and token contracts",
      features: [
        "Static code analysis",
        "Manual code review",
        "Basic vulnerability scan",
        "Security report",
        "Email support",
        "1 revision included",
        "Standard compliance check",
        "Up to 500 lines of code
      ],
      popular: false,
    },
    {
      name="Professional Audit",
      price: "$7,500",
      period: "one-time",
      description: "Comprehensive audit for complex smart contracts and DeFi protocols",
      features: [
        "Everything in Basic",
        "Dynamic testing",
        "Formal verification",
        "Gas optimization analysis",
        "Priority support",
        "3 revisions included",
        "Advanced compliance check",
        "Up to 2,000 lines of code",
        "Integration testing",
        "Documentation review
      ],
      popular: true,
    },
    {
      name="Enterprise Audit",
      price: "$15,000",
      period: "one-time",
      description: "Full-scale audit for enterprise-grade blockchain applications",
      features: [
        "Everything in Professional",
        "Custom security framework",
        "Penetration testing",
        "Architecture review",
        "24/7 support",
        "Unlimited revisions",
        "Full compliance audit",
        "Unlimited lines of code",
        "Performance optimization",
        "Security training",
        "Ongoing monitoring
      ],
      popular: false,
    }
  ];

  const auditTypes = [
    {
      icon: Shield,
      title: "DeFi Protocol Audits",
      description: "Comprehensive security analysis for decentralized finance protocols, yield farming, and liquidity pools.",
      vulnerabilities: ["Reentrancy attacks", "Flash loan exploits", "Oracle manipulation", "Liquidity pool attacks"]
    },
    {
      icon: Code,
      title: "NFT Marketplace Audits",
      description: "Security assessment for NFT marketplaces, minting contracts, and trading platforms.",
      vulnerabilities: ["Minting vulnerabilities", "Price manipulation", "Royalty bypass", "Metadata attacks"]
    },
    {
      icon: Database,
      title: "Token Contract Audits",
      description: "Thorough analysis of ERC-20, ERC-721, ERC-1155, and custom token implementations.",
      vulnerabilities: ["Supply manipulation", "Transfer vulnerabilities", "Access control issues", "Integer overflow"]
    },
    {
      icon: Globe,
      title: "Cross-Chain Bridge Audits",
      description: "Security evaluation for cross-chain bridges and interoperability solutions.",
      vulnerabilities: ["Bridge exploits", "Validator attacks", "Message verification", "State synchronization"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Contract Audit Services | Zion Tech Group</title>
        <meta name="description" content="Professional smart contract auditing services with 99.8% vulnerability detection rate. Expert blockchain security analysis for DeFi, NFT, and enterprise applications." />
        <meta name="keywords" content="smart contract audit, blockchain security, DeFi audit, NFT audit, vulnerability assessment, security analysis" />
        <link rel="canonical" href="https://ziontechgroup.com/services/smart-contract-audit" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Smart Contract Security Audits
              </h1>
              <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
                Expert auditing for all types of blockchain projects and smart contract implementations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  View Pricing
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Audit Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach ensures maximum security for your smart contracts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                      <Icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Audit Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Types of Smart Contract Audits
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized auditing services for different blockchain applications
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {auditTypes.map((audit, index) => {
                const Icon = audit.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                      <Icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{audit.title}</h3>
                    <p className="text-gray-600 mb-6">{audit.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Vulnerabilities:</h4>
                      <ul className="space-y-1">
                        {audit.vulnerabilities.map((vuln, vulnIndex) => (
                          <li key={vulnIndex} className="flex items-center text-sm">
                            <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{vuln}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Audit Pricing Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the audit package that best fits your project requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-red-500 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="/contact" className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-gray-900 text-white hover:bg-gray-800
                  }`}>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Secure Your Smart Contracts?
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Get a comprehensive security audit from our expert team and ensure your blockchain project is secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Audit
              </a>
              <a href="tel:+1234567890" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Component;