import React from 'react'';
import { Helmet } from 'react-helmet-async'';
import { Globe } from 'lucide-react'';
import Header from '../../components/Header'';
import Footer from '../../components/Footer'';
import React from 'react';'
import { Helmet } from 'react-helmet-async';'
import { Globe } from 'lucide-react';'
import Header from '../../components/Header';'
import Footer from '../../components/Footer';'

const SmartContractAudit: React.FC: ()  => {,,,
  const features: [,,
    {
      icon: Shield,,,,
      title: "Comprehensive Security Analysis",",";,"
      description: "Deep code analysis using static analysis, dynamic testing, and formal verification to identify vulnerabilities.",",";,"
      title: "Comprehensive Security Analysis",","
      description: "Deep code analysis using static analysis, dynamic testing, and formal verification to identify vulnerabilities.",","
      benefit: "99.8% vulnerability detection rate","
    },
    {
      icon: Search,,,,
      title: "Automated Vulnerability Scanning",",";,"
      description: "AI-powered scanning tools that detect common smart contract vulnerabilities and security patterns.",",";,"
      title: "Automated Vulnerability Scanning",","
      description: "AI-powered scanning tools that detect common smart contract vulnerabilities and security patterns.",","
      benefit: "100+ vulnerability patterns detected","
    },
    {
      icon: AlertTriangle,,,,
      title: "Risk Assessment & Mitigation",",";,"
      description: "Detailed risk analysis with prioritized recommendations and mitigation strategies.",",";,"
      title: "Risk Assessment & Mitigation",","
      description: "Detailed risk analysis with prioritized recommendations and mitigation strategies.",","
      benefit: "Zero critical vulnerabilities in production","
    },
    {
      icon: CheckCircle,,,,
      title: "Compliance Verification",",";,"
      description: "Ensure compliance with industry standards, regulatory requirements, and best practices.",",";,"
      title: "Compliance Verification",","
      description: "Ensure compliance with industry standards, regulatory requirements, and best practices.",","
      benefit: "100% compliance with standards","
    },
    {
      icon: Clock,,,,
      title: "Fast Turnaround",",";,"
      description: "Rapid audit completion with detailed reports delivered within 5-10 business days.",",";,"
      title: "Fast Turnaround",","
      description: "Rapid audit completion with detailed reports delivered within 5-10 business days.",","
      benefit: "5-10 day delivery guarantee","
    },
    {
      icon: Users,,,,
      title: "Expert Team",",";,"
      description: "Certified blockchain security experts with extensive experience in smart contract auditing.",",";,"
      title: "Expert Team",","
      description: "Certified blockchain security experts with extensive experience in smart contract auditing.",","
      benefit: "50+ successful audits completed","
    }
  ];

  const pricing: [,,
    {
      name: "Basic Audit",";,"
      price: "$2,500",";,"
      period: "one-time",";,"
      description: "Perfect for simple smart contracts and token contracts",";,"
      features: [,,,
        "Static code analysis",";"
        "Manual code review",";"
        "Basic vulnerability scan",";"
        "Security report",";"
        "Email support",";"
        "1 revision included",";"
        "Standard compliance check",";"
        "Up to 500 lines of code"
      ]
      popular: false,,
    },
    {
      name: "Professional Audit",";,"
      price: "$8,500",";,"
      period: "one-time",";,"
      description: "Comprehensive audit for complex DeFi protocols and dApps",";,"
      features: [,,,
        "Full static & dynamic analysis",";"
        "Comprehensive manual review",";"
        "Advanced vulnerability scanning",";"
        "Detailed security report",";"
        "Priority support",";"
        "3 revisions included",";"
        "Full compliance verification",";"
        "Up to 2,000 lines of code",";"
        "Gas optimization analysis",";"
        "Architecture review"
      ]
      popular: true,,
    },
    {
      name: "Enterprise Audit",";,"
      price: "$25,000",";,"
      period: "one-time",";,"
      description: "Complete audit solution for enterprise blockchain projects",";,"
      features: [,,,
        "End-to-end security analysis",";"
        "Multi-contract system review",";"
        "Formal verification",";"
        "Executive summary report",";"
        "Dedicated security consultant",";"
        "Unlimited revisions",";"
        "Full regulatory compliance",";"
        "Unlimited lines of code",";"
        "Performance optimization",";"
        "Architecture & design review",";"
        "Post-deployment monitoring",";"
        "Security training included"
      ]
      popular: false,,,
      name: "Basic Audit",","
      price: "$2,500",","
      period: "one-time",","
      description: "Perfect for simple smart contracts and token contracts",","
      features: [,,,
        "Static code analysis","
        "Manual code review","
        "Basic vulnerability scan","
        "Security report","
        "Email support","
        "1 revision included","
        "Standard compliance check","
        "Up to 500 lines of code"
      ]
      popular: false,,
    },
    {
      name: "Professional Audit",","
      price: "$8,500",","
      period: "one-time",","
      description: "Comprehensive audit for complex DeFi protocols and dApps",","
      features: [,,,
        "Full static & dynamic analysis","
        "Comprehensive manual review","
        "Advanced vulnerability scanning","
        "Detailed security report","
        "Priority support","
        "3 revisions included","
        "Full compliance verification","
        "Up to 2,000 lines of code","
        "Gas optimization analysis","
        "Architecture review"
      ]
      popular: true,,
    },
    {
      name: "Enterprise Audit",","
      price: "$25,000",","
      period: "one-time",","
      description: "Complete audit solution for enterprise blockchain projects",","
      features: [,,,
        "End-to-end security analysis","
        "Multi-contract system review","
        "Formal verification","
        "Executive summary report","
        "Dedicated security consultant","
        "Unlimited revisions","
        "Full regulatory compliance","
        "Unlimited lines of code","
        "Performance optimization","
        "Architecture & design review","
        "Post-deployment monitoring","
        "Security training included"
      ]
      popular: false,,
    }
  ];

  const testimonials: [,,
    {
      name: "Michael Chen",",";,"
      role: "CTO, DeFi Protocol",",";,"
      content: "The smart contract audit identified 3 critical vulnerabilities that could have resulted in $50M in losses. The team's expertise saved our project and gave us confidence for mainnet launch.",",";,"
      name: "Michael Chen",","
      role: "CTO, DeFi Protocol",","
      content: "The smart contract audit identified 3 critical vulnerabilities that could have resulted in $50M in losses. The team's expertise saved our project and gave us confidence for mainnet launch.",","
      rating: 5,,,,
      company: "DeFi Protocol","
    },
    {
      name: "Sarah Rodriguez",",";,"
      role: "Founder, NFT Marketplace",",";,"
      content: "Professional audit process with clear communication and actionable recommendations. The compliance verification helped us meet regulatory requirements for our marketplace launch.",",";,"
      name: "Sarah Rodriguez",","
      role: "Founder, NFT Marketplace",","
      content: "Professional audit process with clear communication and actionable recommendations. The compliance verification helped us meet regulatory requirements for our marketplace launch.",","
      rating: 5,,,,
      company: "NFT Marketplace","
    },
    {
      name: "Dr. James Wilson",",";,"
      role: "Head of Blockchain, FinTech",",";,"
      content: "The enterprise audit package provided comprehensive security coverage for our multi-contract system. The formal verification process gave us mathematical proof of our contract's correctness.",",";,"
      name: "Dr. James Wilson",","
      role: "Head of Blockchain, FinTech",","
      content: "The enterprise audit package provided comprehensive security coverage for our multi-contract system. The formal verification process gave us mathematical proof of our contract's correctness.",","
      rating: 5,,,,
      company: "FinTech","
    }
  ];

  const auditTypes: [,,
    {
      title: "DeFi Protocols",",";,"
      icon: Globe,,,,
      description: "Comprehensive auditing for decentralized finance protocols including lending, borrowing, and trading platforms.",",";,"
      vulnerabilities: ["Reentrancy attacks", "Flash loan exploits", "Oracle manipulation", "Liquidity pool risks"]","
    },
    {
      title: "NFT Smart Contracts",",";,"
      icon: Code,,,,
      description: "Specialized auditing for NFT marketplaces, minting contracts, and token standards compliance.",",";,"
      vulnerabilities: ["Metadata manipulation", "Royalty bypass", "Minting vulnerabilities", "Transfer restrictions"]","
    },
    {
      title: "Token Contracts",",";,"
      icon: Database,,,,
      description: "Security analysis for ERC-20, ERC-721, ERC-1155, and custom token implementations.",",";,"
      vulnerabilities: ["Supply manipulation", "Access control issues", "Transfer bugs", "Approval vulnerabilities"]","
    },
    {
      title: "DAO Governance",",";,"
      icon: Users,,,,
      description: "Auditing governance contracts, voting mechanisms, and treasury management systems.",",";,"
      vulnerabilities: ["Vote manipulation", "Treasury exploits", "Proposal vulnerabilities", "Execution risks"]",";,"
      title: "DeFi Protocols",","
      icon: Globe,,,,
      description: "Comprehensive auditing for decentralized finance protocols including lending, borrowing, and trading platforms.",","
      vulnerabilities: ["Reentrancy attacks", "Flash loan exploits", "Oracle manipulation", "Liquidity pool risks"]","
    },
    {
      title: "NFT Smart Contracts",","
      icon: Code,,,,
      description: "Specialized auditing for NFT marketplaces, minting contracts, and token standards compliance.",","
      vulnerabilities: ["Metadata manipulation", "Royalty bypass", "Minting vulnerabilities", "Transfer restrictions"]","
    },
    {
      title: "Token Contracts",","
      icon: Database,,,,
      description: "Security analysis for ERC-20, ERC-721, ERC-1155, and custom token implementations.",","
      vulnerabilities: ["Supply manipulation", "Access control issues", "Transfer bugs", "Approval vulnerabilities"]","
    },
    {
      title: "DAO Governance",","
      icon: Users,,,,
      description: "Auditing governance contracts, voting mechanisms, and treasury management systems.",","
      vulnerabilities: ["Vote manipulation", "Treasury exploits", "Proposal vulnerabilities", "Execution risks"]","
    }
  ];

  const process: [,,
    {
      step: "01",",";,"
      title: "Initial Assessment",",";,"
      description: "Code review and architecture analysis to understand the smart contract functionality and design.","
    },
    {
      step: "02",",";,"
      title: "Automated Scanning",",";,"
      description: "AI-powered vulnerability detection using industry-leading security tools and custom analyzers.","
    },
    {
      step: "03",",";,"
      title: "Manual Review",",";,"
      description: "Expert manual code review focusing on business logic, edge cases, and complex interactions.","
    },
    {
      step: "04",",";,"
      title: "Risk Analysis",",";,"
      description: "Comprehensive risk assessment with vulnerability prioritization and impact analysis.","
    },
    {
      step: "05",",";,"
      title: "Report Generation",",";,"
      description: "Detailed security report with findings, recommendations, and remediation guidance.","
    },
    {
      step: "06",",";,"
      title: "Follow-up Support",",";,"
      step: "01",","
      title: "Initial Assessment",","
      description: "Code review and architecture analysis to understand the smart contract functionality and design.","
    },
    {
      step: "02",","
      title: "Automated Scanning",","
      description: "AI-powered vulnerability detection using industry-leading security tools and custom analyzers.","
    },
    {
      step: "03",","
      title: "Manual Review",","
      description: "Expert manual code review focusing on business logic, edge cases, and complex interactions.","
    },
    {
      step: "04",","
      title: "Risk Analysis",","
      description: "Comprehensive risk assessment with vulnerability prioritization and impact analysis.","
    },
    {
      step: "05",","
      title: "Report Generation",","
      description: "Detailed security report with findings, recommendations, and remediation guidance.","
    },
    {
      step: "06",","
      title: "Follow-up Support",","
      description: "Ongoing support for vulnerability remediation and re-audit services.","
    }
  ];

  return (
    <>
      <Helmet >
        <title >Smart Contract Audit - Zion Tech Group | Blockchain Security Experts</title>
        <meta name: "description",";,"
  content: "Professional smart contract auditing services with 99.8% vulnerability detection rate. Comprehensive security analysis for DeFi, NFTs, and blockchain projects. 5-10 day delivery." /><meta name: "keywords" content ="smart contract audit, blockchain security, DeFi audit, NFT audit, smart contract security, vulnerability assessment, blockchain compliance" /><link rel: "canonical" href="https://ziontechgroup.com/services/smart-contract-audit/>",";,"
  content: "Professional smart contract auditing services with 99.8% vulnerability detection rate. Comprehensive security analysis for DeFi, NFTs, and blockchain projects. 5-10 day delivery.","
        />
        <meta name: "keywords" content ="smart contract audit, blockchain security, DeFi audit, NFT audit, smart contract security, vulnerability assessment, blockchain compliance" />","
        <link rel: "canonical" href ="https: //ziontechgroup.com/services/smart-contract-audit" />","
      </Helmet>

      <Header />
      
<<<<<<< HEAD
      <main className="min-h-screen bg-white">","
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center"
              <h1 className="text-5xl md: text-7xl font-bold mb-6">",";,"
  Smart Contract <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">Audit</span>";,"
              </h1>
              <p className="text-xl md: text-2xl text-red-100 max-w-4xl mx-auto mb-8">",";,"
  Professional smart contract auditing services with 99.8% vulnerability detection rate. 
                Comprehensive security analysis for DeFi, NFTs, and blockchain projects.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">","
        <section className="bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center">","
              <h1 className="text-5xl md: text-7xl font-bold mb-6">",";,"
  Smart Contract <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">Audit</span>","
              </h1>
              <p className="text-xl md: text-2xl text-red-100 max-w-4xl mx-auto mb-8">",";,"
  Professional smart contract auditing services with 99.8% vulnerability detection rate. 
                Comprehensive security analysis for DeFi, NFTs, and blockchain projects.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">","
                <a href="/contact",";,"
  className="inline-flex items-center px-8 py-4 bg-red-600 hover: bg-red-700 text-white font-semibold rounded-lg transition-colors","
                >
                  <Phone className="w-5 h-5 mr-2/>";,"
                  <Phone className="w-5 h-5 mr-2" />",";,"
  Request Quote
                </a>
                <a href="#pricing",";,"
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-red-900 font-semibold rounded-lg transition-colors","
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2/>";,"
                  <ArrowRight className="w-5 h-5 ml-2" />","
=======
      <main className= "min-h-screen bg-white">","
        {/* Hero Section */}
        <section className= "bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white py-20">
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center">
              <h1 className= "text-5xl md: text-7xl font-bold mb-6"">"
  Smart Contract <span className= "bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">Audit</span>";,"
              </h1>
              <p className= "text-xl md: text-2xl text-red-100 max-w-4xl mx-auto mb-8"">"
  Professional smart contract auditing services with 99.8% vulnerability detection rate. 
                Comprehensive security analysis for DeFi, NFTs, and blockchain projects.
              </p>
              <div className= "flex flex-col sm: flex-row gap-4 justify-center">","
        <section className= "bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white py-20">","
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center">","
              <h1 className= "text-5xl md: text-7xl font-bold mb-6"">"
  Smart Contract <span className= "bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">Audit</span>","
              </h1>
              <p className= "text-xl md: text-2xl text-red-100 max-w-4xl mx-auto mb-8"">"
  Professional smart contract auditing services with 99.8% vulnerability detection rate. 
                Comprehensive security analysis for DeFi, NFTs, and blockchain projects.
              </p>
              <div className= "flex flex-col sm: flex-row gap-4 justify-center">","
                <a href: "/contact",";,"
  className= "inline-flex items-center px-8 py-4 bg-red-600 hover: bg-red-700 text-white font-semibold rounded-lg transition-colors","
                >
                  <Phone className= "w-5 h-5 mr-2/>";,"
                  <Phone className= "w-5 h-5 mr-2" />",";,"
  Request Quote
                </a>
                <a href: "#pricing",";,"
  className= "inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-red-900 font-semibold rounded-lg transition-colors","
                >
                  View Pricing
                  <ArrowRight className= "w-5 h-5 ml-2/>";,"
                  <ArrowRight className= "w-5 h-5 ml-2" />","
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
<<<<<<< HEAD
        <section className="py-16 bg-gray-50"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-12"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section className="py-16 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-12">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Why Choose Our Smart Contract Auditing Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
=======
        <section className= "py-16 bg-gray-50">
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center mb-12">
              <h2 className= "text-4xl font-bold text-gray-900 mb-4">
        <section className= "py-16 bg-gray-50">","
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center mb-12">","
              <h2 className= "text-4xl font-bold text-gray-900 mb-4"">"
  Why Choose Our Smart Contract Auditing Services?
              </h2>
              <p className= "text-xl text-gray-600 max-w-3xl mx-auto"">"
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
  Protect your blockchain project with industry-leading security expertise and comprehensive analysis.
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid md: grid-cols-4 gap-8">","
              <div className="text-center"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4"
                  <Shield className="w-8 h-8 text-red-600/>";,"
            <div className="grid md: grid-cols-4 gap-8">","
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">","
                  <Shield className="w-8 h-8 text-red-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">99.8% Detection Rate</h3>","
                <p className="text-gray-600">Industry-leading vulnerability detection</p>","
              </div>
              <div className="text-center"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4"
                  <Clock className="w-8 h-8 text-orange-600/>";,"
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">","
                  <Clock className="w-8 h-8 text-orange-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">5-10 Day Delivery</h3>","
                <p className="text-gray-600">Fast turnaround guaranteed</p>","
              </div>
              <div className="text-center"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4"
                  <Users className="w-8 h-8 text-yellow-600/>";,"
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">","
                  <Users className="w-8 h-8 text-yellow-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">50+ Audits Completed</h3>","
                <p className="text-gray-600">Proven track record of success</p>","
              </div>
              <div className="text-center"
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"
                  <CheckCircle className="w-8 h-8 text-green-600/>";,"
              <div className="text-center">","
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">","
                  <CheckCircle className="w-8 h-8 text-green-600" />","
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100% Compliance</h3>","
                <p className="text-gray-600">Meet all regulatory standards</p>","
=======
            <div className= "grid md: grid-cols-4 gap-8">","
              <div className= "text-center">
                <div className= "inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  <Shield className= "w-8 h-8 text-red-600/>";,"
            <div className= "grid md: grid-cols-4 gap-8">","
              <div className= "text-center">","
                <div className= "inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">","
                  <Shield className= "w-8 h-8 text-red-600" />","
                </div>
                <h3 className= "text-xl font-bold text-gray-900 mb-2">99.8% Detection Rate</h3>","
                <p className= "text-gray-600">Industry-leading vulnerability detection</p>","
              </div>
              <div className= "text-center">
                <div className= "inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <Clock className= "w-8 h-8 text-orange-600/>";,"
              <div className= "text-center">","
                <div className= "inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">","
                  <Clock className= "w-8 h-8 text-orange-600" />","
                </div>
                <h3 className= "text-xl font-bold text-gray-900 mb-2">5-10 Day Delivery</h3>","
                <p className= "text-gray-600">Fast turnaround guaranteed</p>","
              </div>
              <div className= "text-center">
                <div className= "inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                  <Users className= "w-8 h-8 text-yellow-600/>";,"
              <div className= "text-center">","
                <div className= "inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">","
                  <Users className= "w-8 h-8 text-yellow-600" />","
                </div>
                <h3 className= "text-xl font-bold text-gray-900 mb-2">50+ Audits Completed</h3>","
                <p className= "text-gray-600">Proven track record of success</p>","
              </div>
              <div className= "text-center">
                <div className= "inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <CheckCircle className= "w-8 h-8 text-green-600/>";,"
              <div className= "text-center">","
                <div className= "inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">","
                  <CheckCircle className= "w-8 h-8 text-green-600" />","
                </div>
                <h3 className= "text-xl font-bold text-gray-900 mb-2">100% Compliance</h3>","
                <p className= "text-gray-600">Meet all regulatory standards</p>","
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
              </div>
            </div>
          </div>
        </section>

        {/* Audit Types */}
<<<<<<< HEAD
        <section className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Specialized Audit Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
=======
        <section className= "py-20">
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center mb-16">
              <h2 className= "text-4xl font-bold text-gray-900 mb-4">
        <section className= "py-20">","
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center mb-16">","
              <h2 className= "text-4xl font-bold text-gray-900 mb-4"">"
  Specialized Audit Services
              </h2>
              <p className= "text-xl text-gray-600 max-w-3xl mx-auto"">"
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
  Expert auditing for all types of blockchain projects and smart contract implementations.
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {auditTypes.map((audit, index) => {
                const Icon: audit.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6"
                      <Icon className="w-8 h-8 text-red-600/>";,"
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{audit.title}</h3>";"
                    <p className="text-gray-600 mb-6">{audit.description}</p>";"
                    <div className="mb-4"
                      <h4 className="font-semibold text-gray-900 mb-2">Common Vulnerabilities: </h4>","
                      <ul className="space-y-1"
                        {audit.vulnerabilities.map((vuln, vulnIndex) => (
                          <li key={vulnIndex} className="flex items-center text-sm"
                            <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0/>";,"
                            <span className="text-gray-700">{vuln}</span>";"
            <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {auditTypes.map((audit, index) => {
                const Icon: audit.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">","
                      <Icon className="w-8 h-8 text-red-600" />","
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{audit.title}</h3>"
                    <p className="text-gray-600 mb-6">{audit.description}</p>"
                    <div className="mb-4">","
                      <h4 className="font-semibold text-gray-900 mb-2">Common Vulnerabilities: </h4>","
                      <ul className="space-y-1">","
                        {audit.vulnerabilities.map((vuln, vulnIndex) => (
                          <li key={vulnIndex} className="flex items-center text-sm">","
                            <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />","
                            <span className="text-gray-700">{vuln}</span>"
=======
            <div className= "grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {auditTypes.map((audit, index) => {
                const Icon: audit.icon;,,,
  return (
                  <div key: {index} className= "bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className= "inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                      <Icon className= "w-8 h-8 text-red-600/>";,"
                    </div>
                    <h3 className= "text-xl font-bold text-gray-900 mb-4">{audit.title}</h3>";"
                    <p className= "text-gray-600 mb-6">{audit.description}</p>";"
                    <div className= "mb-4">
                      <h4 className= "font-semibold text-gray-900 mb-2">Common Vulnerabilities: </h4>","
                      <ul className= "space-y-1">
                        {audit.vulnerabilities.map((vuln, vulnIndex) => (
                          <li key: {vulnIndex} className= "flex items-center text-sm">
                            <AlertTriangle className= "w-4 h-4 text-orange-500 mr-2 flex-shrink-0/>";,"
                            <span className= "text-gray-700">{vuln}</span>";"
            <div className= "grid md: grid-cols-2 lg:grid-cols-4 gap-8">","
              {auditTypes.map((audit, index) => {
                const Icon: audit.icon;,,,
  return (
                  <div key: {index} className= "bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className= "inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">","
                      <Icon className= "w-8 h-8 text-red-600" />","
                    </div>
                    <h3 className= "text-xl font-bold text-gray-900 mb-4">{audit.title}</h3>"
                    <p className= "text-gray-600 mb-6">{audit.description}</p>"
                    <div className= "mb-4">","
                      <h4 className= "font-semibold text-gray-900 mb-2">Common Vulnerabilities: </h4>","
                      <ul className= "space-y-1">","
                        {audit.vulnerabilities.map((vuln, vulnIndex) => (
                          <li key: {vulnIndex} className= "flex items-center text-sm">","
                            <AlertTriangle className= "w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />","
                            <span className= "text-gray-700">{vuln}</span>"
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
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

        {/* Process */}
<<<<<<< HEAD
        <section className="py-20 bg-gray-50"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section className="py-20 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Our Audit Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
=======
        <section className= "py-20 bg-gray-50">
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center mb-16">
              <h2 className= "text-4xl font-bold text-gray-900 mb-4">
        <section className= "py-20 bg-gray-50">","
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center mb-16">","
              <h2 className= "text-4xl font-bold text-gray-900 mb-4"">"
  Our Audit Process
              </h2>
              <p className= "text-xl text-gray-600 max-w-3xl mx-auto"">"
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
  Systematic approach ensuring comprehensive security analysis and detailed reporting.
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {process.map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">","
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">","
                    <span className="text-red-600 font-bold text-lg">{step.step}</span>"
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>"
                  <p className="text-gray-600">{step.description}</p>"
=======
            <div className= "grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
            <div className= "grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {process.map((step, index) => (
                <div key: {index} className= "bg-white p-8 rounded-xl shadow-lg border border-gray-200">","
                  <div className= "inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">","
                    <span className= "text-red-600 font-bold text-lg">{step.step}</span>"
                  </div>
                  <h3 className= "text-xl font-bold text-gray-900 mb-3">{step.title}</h3>"
                  <p className= "text-gray-600">{step.description}</p>"
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
<<<<<<< HEAD
        <section className="py-20"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section className="py-20">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Advanced Security Analysis
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
=======
        <section className= "py-20">
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center mb-16">
              <h2 className= "text-4xl font-bold text-gray-900 mb-4">
        <section className= "py-20">","
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center mb-16">","
              <h2 className= "text-4xl font-bold text-gray-900 mb-4"">"
  Advanced Security Analysis
              </h2>
              <p className= "text-xl text-gray-600 max-w-3xl mx-auto"">"
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
  Comprehensive security testing using cutting-edge tools and expert manual review.
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4"
                      <Icon className="w-6 h-6 text-red-600/>";,"
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>";"
                    <p className="text-gray-600 mb-4">{feature.description}</p>";"
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm"
                      <CheckCircle className="w-4 h-4 mr-1/>";,"
            <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,,,
  return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">","
                      <Icon className="w-6 h-6 text-red-600" />","
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>"
                    <p className="text-gray-600 mb-4">{feature.description}</p>"
                    <div className="inline-flex items-center text-green-600 font-semibold text-sm">","
                      <CheckCircle className="w-4 h-4 mr-1" />","
=======
            <div className= "grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,,,
  return (
                  <div key: {index} className= "bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className= "inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                      <Icon className= "w-6 h-6 text-red-600/>";,"
                    </div>
                    <h3 className= "text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>";"
                    <p className= "text-gray-600 mb-4">{feature.description}</p>";"
                    <div className= "inline-flex items-center text-green-600 font-semibold text-sm">
                      <CheckCircle className= "w-4 h-4 mr-1/>";,"
            <div className= "grid md: grid-cols-2 lg:grid-cols-3 gap-8">","
              {features.map((feature, index) => {
                const Icon: feature.icon;,,,
  return (
                  <div key: {index} className= "bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover: shadow-xl transition-shadow">","
                    <div className= "inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">","
                      <Icon className= "w-6 h-6 text-red-600" />","
                    </div>
                    <h3 className= "text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>"
                    <p className= "text-gray-600 mb-4">{feature.description}</p>"
                    <div className= "inline-flex items-center text-green-600 font-semibold text-sm">","
                      <CheckCircle className= "w-4 h-4 mr-1" />","
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
<<<<<<< HEAD
        <section id="pricing" className="py-20 bg-gray-50"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16"
              <h2 className="text-4xl font-bold text-gray-900 mb-4"
        <section id="pricing" className ="py-20 bg-gray-50">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className="text-center mb-16">","
              <h2 className="text-4xl font-bold text-gray-900 mb-4">",";,"
  Transparent Pricing for Every Project Size
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">",";,"
=======
        <section id: "pricing" className="py-20 bg-gray-50">
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center mb-16">
              <h2 className= "text-4xl font-bold text-gray-900 mb-4">
        <section id: "pricing" className ="py-20 bg-gray-50">","
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center mb-16">","
              <h2 className= "text-4xl font-bold text-gray-900 mb-4"">"
  Transparent Pricing for Every Project Size
              </h2>
              <p className= "text-xl text-gray-600 max-w-3xl mx-auto"">"
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
  Choose the audit package that fits your smart contract complexity and security requirements.
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid md: grid-cols-3 gap-8">","
            <div className="grid md: grid-cols-3 gap-8">","
              {pricing.map((plan, index) => (
                <div key={index} className: {`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-red-500 relative' : ''}`}>`
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">","
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">",";,"
=======
            <div className= "grid md: grid-cols-3 gap-8">","
            <div className= "grid md: grid-cols-3 gap-8">","
              {pricing.map((plan, index) => (
                <div key: {index} className= {`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-red-500 relative' : ''}`}>`
                  {plan.popular && (
                    <div className= "absolute -top-4 left-1/2 transform -translate-x-1/2">","
                      <span className= "bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold"">"
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
  Most Popular
                      </span>
                    </div>
                  )}
<<<<<<< HEAD
                  <div className="text-center mb-8">","
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>"
                    <div className="flex items-center justify-center mb-2">","
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>"
                      <span className="text-gray-600 ml-1">/{plan.period}</span>"
                    </div>
                    <p className="text-gray-600">{plan.description}</p>"
                  </div>
                  <ul className="space-y-4 mb-8">","
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0/>";,"
                        <span className="text-gray-700">{feature}</span>";"
                      <li key={featureIndex} className="flex items-center">","
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />","
                        <span className="text-gray-700">{feature}</span>"
                      </li>
                    ))}
                  </ul>
                  <a href="/contact",";,"
  className: {,,
=======
                  <div className= "text-center mb-8">","
                    <h3 className= "text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>"
                    <div className= "flex items-center justify-center mb-2">","
                      <span className= "text-4xl font-bold text-gray-900">{plan.price}</span>"
                      <span className= "text-gray-600 ml-1">/{plan.period}</span>"
                    </div>
                    <p className= "text-gray-600">{plan.description}</p>"
                  </div>
                  <ul className= "space-y-4 mb-8">","
                    {plan.features.map((feature, featureIndex) => (
                      <li key: {featureIndex} className= "flex items-center">
                        <CheckCircle className= "w-5 h-5 text-green-500 mr-3 flex-shrink-0/>";,"
                        <span className= "text-gray-700">{feature}</span>";"
                      <li key: {featureIndex} className= "flex items-center">","
                        <CheckCircle className= "w-5 h-5 text-green-500 mr-3 flex-shrink-0" />","
                        <span className= "text-gray-700">{feature}</span>"
                      </li>
                    ))}
                  </ul>
                  <a href: "/contact",";,"
  className= {,,
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${`
plan.popular
? 'bg-red-600 text-white hover: bg-red-700',';,
? 'bg-red-600 text-white hover: bg-red-700',',';,
: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
}`}`
                  >
                    Request Quote
                  </a>
                </div>
              ))}
            </div>

<<<<<<< HEAD
            <div className="text-center mt-12">","
              <p className="text-gray-600 mb-4">Need a custom audit solution?</p>","
              <a href="/contact",";,"
  className="inline-flex items-center text-red-600 hover: text-red-700 font-semibold","
              >
                Contact our Security Team
                <ArrowRight className="w-4 h-4 ml-1/>";,"
                <ArrowRight className="w-4 h-4 ml-1" />","
=======
            <div className= "text-center mt-12">","
              <p className= "text-gray-600 mb-4">Need a custom audit solution?</p>","
              <a href: "/contact",";,"
  className= "inline-flex items-center text-red-600 hover: text-red-700 font-semibold","
              >
                Contact our Security Team
                <ArrowRight className= "w-4 h-4 ml-1/>";,"
                <ArrowRight className= "w-4 h-4 ml-1" />","
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
<<<<<<< HEAD
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
=======
        <section className= "py-20">
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center mb-16">
              <h2 className= "text-4xl font-bold text-gray-900 mb-4">
        <section className= "py-20">","
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">","
            <div className= "text-center mb-16">","
              <h2 className= "text-4xl font-bold text-gray-900 mb-4"">"
  What Our Clients Say
              </h2>
              <p className= "text-xl text-gray-600 max-w-3xl mx-auto"">"
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
  Join dozens of successful blockchain projects that trust our security expertise.
              </p>
            </div>

<<<<<<< HEAD
            <div className="grid md: grid-cols-3 gap-8">","
            <div className="grid md: grid-cols-3 gap-8">","
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">","
                  <div className="flex items-center mb-4">","
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current/>";,"
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />","
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">","
                    "{testimonial.content}"
                  </blockquote>
                  <div >
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>"
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>"
                    <div className="text-red-600 text-sm font-medium">{testimonial.company}</div>"
=======
            <div className= "grid md: grid-cols-3 gap-8">","
            <div className= "grid md: grid-cols-3 gap-8">","
              {testimonials.map((testimonial, index) => (
                <div key: {index} className= "bg-white p-8 rounded-xl shadow-lg border border-gray-200">","
                  <div className= "flex items-center mb-4">","
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key: {i} className= "w-5 h-5 text-yellow-400 fill-current/>";,"
                      <Star key: {i} className= "w-5 h-5 text-yellow-400 fill-current" />","
                    ))}
                  </div>
                  <blockquote className= "text-gray-700 mb-6 italic">","
                    "{testimonial.content}"
                  </blockquote>
                  <div >
                    <div className= "font-semibold text-gray-900">{testimonial.name}</div>"
                    <div className= "text-gray-600 text-sm">{testimonial.role}</div>"
                    <div className= "text-red-600 text-sm font-medium">{testimonial.company}</div>"
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white"
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className="text-4xl font-bold mb-6"
        <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white">","
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className="text-4xl font-bold mb-6">",";,"
  Ready to Secure Your Smart Contracts?
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">",";,"
  Protect your blockchain project with professional smart contract auditing from certified security experts.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
            <div className="flex flex-col sm: flex-row gap-4 justify-center">","
              <a href="/contact",";,"
  className="inline-flex items-center px-8 py-4 bg-red-600 hover: bg-red-700 text-white font-semibold rounded-lg transition-colors","
              >
                <Phone className="w-5 h-5 mr-2/>";,"
                <Phone className="w-5 h-5 mr-2" />",";,"
  Request Free Quote
              </a>
              <a href="/case-studies",";,"
  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-red-900 font-semibold rounded-lg transition-colors","
              >
                View Audit Reports
                <ArrowRight className="w-5 h-5 ml-2/>";,"
                <ArrowRight className="w-5 h-5 ml-2" />","
=======
        <section className= "py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white">
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className= "text-4xl font-bold mb-6">
        <section className= "py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white">","
          <div className= "max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">","
            <h2 className= "text-4xl font-bold mb-6"">"
  Ready to Secure Your Smart Contracts?
            </h2>
            <p className= "text-xl text-red-100 max-w-3xl mx-auto mb-8"">"
  Protect your blockchain project with professional smart contract auditing from certified security experts.
            </p>
            <div className= "flex flex-col sm: flex-row gap-4 justify-center">","
            <div className= "flex flex-col sm: flex-row gap-4 justify-center">","
              <a href: "/contact",";,"
  className= "inline-flex items-center px-8 py-4 bg-red-600 hover: bg-red-700 text-white font-semibold rounded-lg transition-colors","
              >
                <Phone className= "w-5 h-5 mr-2/>";,"
                <Phone className= "w-5 h-5 mr-2" />",";,"
  Request Free Quote
              </a>
              <a href: "/case-studies",";,"
  className= "inline-flex items-center px-8 py-4 border-2 border-white text-white hover: bg-white hover:text-red-900 font-semibold rounded-lg transition-colors","
              >
                View Audit Reports
                <ArrowRight className= "w-5 h-5 ml-2/>";,"
                <ArrowRight className= "w-5 h-5 ml-2" />","
>>>>>>> a5cf4052dc3904d78088a15d415db3ea2f6579b8
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SmartContractAudit;