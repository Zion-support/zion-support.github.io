import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users, 
  Globe, 
  Code, 
  Database, 
  Phone, 
  ArrowRight, 
  Star 
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
      popular: false,
    },
    {
      name: "Professional Audit",
      price: "$8,500",
      period: "one-time",
      description: "Comprehensive audit for complex DeFi protocols and dApps",
      features: [
        "Advanced static analysis",
        "Dynamic testing",
        "Gas optimization review",
        "Detailed security report",
        "Priority support",
        "3 revisions included",
        "Advanced compliance check",
        "Up to 2000 lines of code",
        "Architecture review",
        "Performance analysis"
      ],
      popular: true,
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
      popular: false,
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "CTO, DeFi Protocol",
      content: "The smart contract audit identified 3 critical vulnerabilities that could have resulted in $50M in losses. The team's expertise saved our project and gave us confidence for mainnet launch.",
      rating: 5,
      company: "DeFi Protocol"
    },
    {
      name: "Sarah Rodriguez",
      role: "Founder, NFT Marketplace",
      content: "Professional audit process with clear communication and actionable recommendations. The compliance verification helped us meet regulatory requirements for our marketplace launch.",
      rating: 5,
      company: "NFT Marketplace"
    },
    {
      name: "Dr. James Wilson",
      role: "Head of Blockchain, FinTech",
      content: "The enterprise audit package provided comprehensive security coverage for our multi-contract system. The formal verification process gave us mathematical proof of our contract's correctness.",
      rating: 5,
      company: "FinTech Corp"
    }
  ];

  const auditTypes = [
    {
      icon: Shield,
      title: "Security Audit",
      description: "Comprehensive security analysis focusing on vulnerability detection and risk assessment.",
      vulnerabilities: [
        "Reentrancy attacks",
        "Integer overflow/underflow",
        "Access control issues",
        "Front-running vulnerabilities"
      ]
    },
    {
      icon: Code,
      title: "Code Review",
      description: "Detailed code analysis for best practices, optimization, and maintainability.",
      vulnerabilities: [
        "Gas optimization issues",
        "Code complexity problems",
        "Best practice violations",
        "Documentation gaps"
      ]
    },
    {
      icon: Database,
      title: "Logic Audit",
      description: "Business logic verification to ensure correct implementation of intended functionality.",
      vulnerabilities: [
        "Logic errors",
        "Edge case handling",
        "State management issues",
        "Business rule violations"
      ]
    },
    {
      icon: Globe,
      title: "Compliance Audit",
      description: "Verification against industry standards and regulatory requirements.",
      vulnerabilities: [
        "Regulatory compliance gaps",
        "Standard violations",
        "Legal requirement issues",
        "Governance problems"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Contract Audit Services | Zion Tech Group</title>
        <meta name="description" content="Professional smart contract audit services with 99.8% vulnerability detection rate. Expert blockchain security analysis, compliance verification, and risk assessment." />
        <meta name="keywords" content="smart contract audit, blockchain security, DeFi audit, NFT audit, smart contract review, blockchain compliance" />
        <link rel="canonical" href="/services/smart-contract-audit" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Smart Contract Audit Services
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Professional blockchain security analysis with 99.8% vulnerability detection rate. 
                Expert smart contract auditing for DeFi, NFT, and enterprise blockchain projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Get Audit Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/case-studies" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors inline-flex items-center justify-center"
                >
                  View Case Studies
                  <ArrowRight className="w-5 h-5 ml-2" />
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
                Why Choose Our Smart Contract Audits?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive audit process combines automated tools with expert manual analysis 
                to deliver the most thorough security assessment available.
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
                    <p className="text-gray-600 mb-6">{feature.description}</p>
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
                Comprehensive Audit Types
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer specialized audit services tailored to different aspects of smart contract security and functionality.
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
                Smart Contract Audit Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the audit package that best fits your project requirements and budget.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg border-2 ${plan.popular ? 'border-red-500' : 'border-gray-200'} relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-red-600 mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.period}</p>
                    <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-red-600 text-white hover:bg-red-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by leading blockchain projects and enterprises worldwide.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-red-600">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Secure Your Smart Contract?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get a professional audit from certified blockchain security experts. 
              Protect your project from vulnerabilities and ensure regulatory compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Quote
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors inline-flex items-center justify-center"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
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