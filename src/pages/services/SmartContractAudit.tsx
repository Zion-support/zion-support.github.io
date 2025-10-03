import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Shield, Search, AlertTriangle, CheckCircle, Clock, Users, ArrowRight } from 'lucide-react';
import Header from '../../components/Header;
import Footer from '../../components/Footer;
const SmartContractAudit: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Comprehensive Security Analysis",
      description: "Deep code analysis using static analysis, dynamic testing, and formal verification to identify vulnerabilities.",
      benefit: "99.8% vulnerability detection rate"
    },
    {
      icon: Search,
      title: "Automated Vulnerability Scanning",
      description: "AI-powered scanning tools that detect common smart contract vulnerabilities and security patterns.",
      benefit: "100+ vulnerability patterns detected"
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment & Mitigation",
      description: "Detailed risk analysis with prioritized recommendations and mitigation strategies.",
      benefit: "Zero critical vulnerabilities in production"
    },
    {
      icon: CheckCircle,
      title: "Compliance Verification",
      description: "Ensure compliance with industry standards, regulatory requirements, and best practices.",
      benefit: "100% compliance with standards"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Rapid audit completion with detailed reports delivered within 5-10 business days.",
      benefit: "5-10 day delivery guarantee"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified blockchain security experts with extensive experience in smart contract auditing.",
      benefit: "50+ successful audits completed"
    }
  ];

  const pricing = [
    {
      name: "Basic Audit",
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
        "Up to 500 lines of code"
      ],
      popular: false
    },
    {
      name: "Professional Audit",
      price: "$8,500",
      period: "one-time",
      description: "Comprehensive audit for complex DeFi protocols and dApps",
      features: [
        "Full static & dynamic analysis",
        "Comprehensive manual review",
        "Advanced vulnerability scanning",
        "Detailed security report",
        "Priority support",
        "3 revisions included",
        "Full compliance verification",
        "Up to 2,000 lines of code",
        "Gas optimization analysis",
        "Architecture review"
      ],
      popular: true
    },
    {
      name: "Enterprise Audit",
      price: "$25,000",
      period: "one-time",
      description: "Complete audit solution for enterprise blockchain projects",
      features: [
        "End-to-end security analysis",
        "Multi-contract system review",
        "Formal verification",
        "Executive summary report",
        "Dedicated security consultant",
        "Unlimited revisions",
        "Full regulatory compliance",
        "Unlimited lines of code",
        "Performance optimization",
        "Architecture & design review",
        "Post-deployment monitoring",
        "Security training included"
      ],
      popular: false
    }
  ];

  const auditTypes = [
    {
      icon: Shield,
      title: "Security Audit",
      vulnerabilities: [
        "Reentrancy attacks",
        "Integer overflow/underflow",
        "Access control issues",
        "Logic errors",
        "Front-running vulnerabilities"
      ]
    },
    {
      icon: CheckCircle,
      title: "Compliance Audit",
      vulnerabilities: [
        "ERC-20/721/1155 compliance",
        "Regulatory requirements",
        "Industry standards",
        "Best practices adherence",
        "Documentation completeness"
      ]
    },
    {
      icon: Search,
      title: "Gas Optimization",
      vulnerabilities: [
        "Inefficient loops",
        "Redundant storage operations",
        "Unoptimized data structures",
        "Expensive external calls",
        "Memory vs storage usage"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Business Logic",
      vulnerabilities: [
        "Logic flaws",
        "Edge case handling",
        "State management issues",
        "Transaction ordering",
        "Economic attacks"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "We analyze your smart contract requirements and scope the audit project."
    },
    {
      step: "02",
      title: "Code Analysis",
      description: "Comprehensive static and dynamic analysis using industry-leading tools."
    },
    {
      step: "03",
      title: "Manual Review",
      description: "Expert security engineers conduct thorough manual code review."
    },
    {
      step: "04",
      title: "Report Generation",
      description: "Detailed security report with findings, recommendations, and remediation steps."
    }
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      description: "Identify and fix vulnerabilities before deployment to prevent costly exploits."
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure your smart contracts meet all regulatory and industry standards."
    },
    {
      title: "Cost Optimization",
      description: "Optimize gas usage and improve contract efficiency to reduce operational costs."
    },
    {
      title: "Investor Confidence",
      description: "Build trust with investors and users through professional security validation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Contract Audit Services | Zion AI</title>
        <meta name="description" content="Professional smart contract security auditing services. Comprehensive vulnerability assessment, compliance verification, and gas optimization for blockchain projects." /><meta name="keywords" content="smart contract audit, blockchain security, vulnerability assessment, DeFi security, Web3 audit" /></Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 to-red-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Smart Contract Security Audit
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Protect your blockchain project with comprehensive smart contract security auditing. 
                Our expert team identifies vulnerabilities and ensures compliance with industry standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4/>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Security Analysis
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our multi-layered approach ensures maximum security for your smart contracts
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-red-600/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-3">{feature.description}</p>
                    <span className="inline-block bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                      {feature.benefit}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Audit Types Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Audit Types & Vulnerabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We cover all aspects of smart contract security
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {auditTypes.map((audit, index) => {
                const Icon = audit.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <Icon className="h-8 w-8 text-red-600 mr-3/>
                      <h3 className="text-xl font-bold text-gray-900">{audit.title}</h3>
                    </div>
                    <ul className="space-y-1">
                      {audit.vulnerabilities.map((vuln, vulnIndex) => (
                        <li key={vulnIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0/>
                          <span className="text-gray-700">{vuln}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Audit Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to smart contract security
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <div className="text-4xl font-bold text-red-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Audit Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional security auditing that protects your investment
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
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
                Choose the perfect audit package for your project
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-red-500 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-red-600 mb-2">
                      {plan.price}
                      <span className="text-lg font-normal text-gray-500">/{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0/>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Need a custom audit solution?</p>
              <a
                href="/contact"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
              >
                Contact us for enterprise solutions
                <ArrowRight className="w-4 h-4 ml-1/>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Secure Your Smart Contract?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Don't risk your project's security. Get a professional audit from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                Start Your Audit
                <ArrowRight className="ml-2 h-4 w-4/>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                View Pricing
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