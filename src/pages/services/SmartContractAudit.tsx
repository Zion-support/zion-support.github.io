import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Star, 
  Phone, 
  ArrowRight 
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
      benefit: "Average 7-day delivery"
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
        "Logic vulnerabilities"
      ]
    },
    {
      icon: Clock,
      title: "Gas Optimization",
      description: "Analysis and optimization of gas consumption patterns for cost efficiency.",
      vulnerabilities: [
        "Inefficient loops",
        "Redundant storage operations",
        "Unoptimized data structures",
        "Expensive external calls"
      ]
    },
    {
      icon: CheckCircle,
      title: "Code Quality Review",
      description: "Assessment of code quality, maintainability, and adherence to best practices.",
      vulnerabilities: [
        "Poor error handling",
        "Inconsistent coding style",
        "Missing documentation",
        "Complex logic patterns"
      ]
    },
    {
      icon: Search,
      title: "Formal Verification",
      description: "Mathematical proof of contract correctness using formal methods.",
      vulnerabilities: [
        "Logic inconsistencies",
        "Invariant violations",
        "State transition errors",
        "Mathematical proofs"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "Review contract architecture, documentation, and requirements to understand scope and objectives."
    },
    {
      step: "02",
      title: "Automated Analysis",
      description: "Run comprehensive automated scans using multiple tools to identify common vulnerabilities and patterns."
    },
    {
      step: "03",
      title: "Manual Review",
      description: "Expert manual code review focusing on business logic, edge cases, and complex interactions."
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Dynamic testing including fuzzing, stress testing, and integration testing scenarios."
    },
    {
      step: "05",
      title: "Report Generation",
      description: "Detailed report with findings, risk assessment, recommendations, and remediation guidance."
    },
    {
      step: "06",
      title: "Follow-up Support",
      description: "Ongoing support for remediation, re-audit services, and security consultation."
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Audit",
      price: "$2,500",
      period: "per contract",
      description: "Essential security analysis for simple smart contracts",
      features: [
        "Automated vulnerability scanning",
        "Basic security review",
        "Vulnerability report",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional Audit",
      price: "$7,500",
      period: "per contract",
      description: "Comprehensive analysis for complex smart contracts",
      features: [
        "Full automated + manual review",
        "Gas optimization analysis",
        "Detailed security report",
        "Priority support",
        "Re-audit included"
      ],
      popular: true
    },
    {
      name: "Enterprise Audit",
      price: "$15,000",
      period: "per contract",
      description: "Complete analysis with formal verification",
      features: [
        "All Professional features",
        "Formal verification",
        "Custom testing scenarios",
        "Dedicated security expert",
        "Unlimited revisions",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, DeFi Protocol",
      content: "Zion's smart contract audit saved us from a critical vulnerability that could have resulted in millions in losses. Their thorough analysis and clear reporting made remediation straightforward.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, NFT Marketplace",
      content: "The team's expertise in smart contract security is unmatched. They not only found issues but provided clear guidance on how to fix them. Highly recommended for any blockchain project.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Lead Developer, DAO",
      content: "Professional, thorough, and incredibly knowledgeable. The audit process was smooth and the final report was comprehensive. We feel confident launching with their approval.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Contract Audit Services | Zion AI</title>
        <meta name="description" content="Professional smart contract security audits with comprehensive vulnerability analysis, gas optimization, and compliance verification." />
        <meta name="keywords" content="smart contract audit, blockchain security, vulnerability assessment, DeFi security, NFT security" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Smart Contract Security Audits
              </h1>
              <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
                Comprehensive security analysis and vulnerability assessment for blockchain applications. 
                Protect your smart contracts with expert auditing services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </a>
                <a 
                  href="/case-studies" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors inline-flex items-center"
                >
                  View Case Studies
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Types */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Audit Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our multi-layered approach ensures thorough security analysis covering all aspects of smart contract security.
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

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Audit Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Systematic approach ensuring comprehensive security analysis and detailed reporting.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                    <span className="text-red-600 font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Advanced Security Analysis
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security testing using cutting-edge tools and expert manual review.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
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

        {/* Pricing */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the audit package that best fits your project needs and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
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
                    <div className="text-4xl font-bold text-red-600 mb-2">{plan.price}</div>
                    <p className="text-gray-600">{plan.period}</p>
                    <p className="text-gray-600 mt-4">{plan.description}</p>
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
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-red-600 text-white hover:bg-red-700' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Request Quote
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a 
                href="/contact" 
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
              >
                Get Custom Quote
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by leading blockchain projects worldwide for comprehensive security auditing.
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
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Secure Your Smart Contracts?
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Get professional security auditing services and launch your blockchain project with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Start Your Audit
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors inline-flex items-center"
              >
                View Success Stories
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