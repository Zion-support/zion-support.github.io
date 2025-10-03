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
      description: "Comprehensive security analysis covering all attack vectors and vulnerabilities.",
      vulnerabilities: [
        "Reentrancy attacks",
        "Integer overflow/underflow",
        "Access control issues",
        "Logic vulnerabilities"
      ]
    },
    {
      icon: Search,
      title: "Code Review",
      description: "Detailed code analysis for best practices and optimization opportunities.",
      vulnerabilities: [
        "Gas optimization issues",
        "Code quality problems",
        "Documentation gaps",
        "Architecture concerns"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Gas Analysis",
      description: "Gas consumption analysis and optimization recommendations.",
      vulnerabilities: [
        "High gas consumption",
        "Inefficient loops",
        "Unnecessary storage operations",
        "Complex calculations"
      ]
    },
    {
      icon: CheckCircle,
      title: "Compliance Check",
      description: "Verification against industry standards and regulatory requirements.",
      vulnerabilities: [
        "Standard compliance gaps",
        "Regulatory violations",
        "Best practice deviations",
        "Documentation issues"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We analyze your smart contract requirements and scope the audit process."
    },
    {
      step: "2",
      title: "Automated Analysis",
      description: "Run comprehensive automated security scans using industry-leading tools."
    },
    {
      step: "3",
      title: "Manual Review",
      description: "Expert manual code review by certified smart contract auditors."
    },
    {
      step: "4",
      title: "Testing & Verification",
      description: "Dynamic testing and formal verification of critical functions."
    },
    {
      step: "5",
      title: "Report & Recommendations",
      description: "Detailed report with prioritized findings and remediation guidance."
    },
    {
      step: "6",
      title: "Follow-up Support",
      description: "Ongoing support for implementing fixes and security improvements."
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Audit",
      price: "$2,500",
      duration: "5-7 days",
      features: [
        "Automated security scan",
        "Basic code review",
        "Vulnerability report",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional Audit",
      price: "$5,000",
      duration: "7-10 days",
      features: [
        "Comprehensive security analysis",
        "Manual code review",
        "Gas optimization analysis",
        "Detailed remediation guide",
        "Phone support",
        "Follow-up consultation"
      ],
      popular: true
    },
    {
      name: "Enterprise Audit",
      price: "$10,000",
      duration: "10-14 days",
      features: [
        "Full security audit suite",
        "Formal verification",
        "Compliance verification",
        "Custom testing scenarios",
        "Dedicated auditor",
        "Priority support",
        "Post-audit monitoring"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, DeFi Protocol",
      content: "Zion's smart contract audit helped us identify critical vulnerabilities before launch. Their thorough analysis saved us from potential losses.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, NFT Marketplace",
      content: "Professional, thorough, and fast. The audit report was comprehensive and the recommendations were actionable.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "Lead Developer, Gaming DAO",
      content: "Excellent service with detailed explanations. The team was responsive and helped us implement all security improvements.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Contract Security Audit Services | Zion AI</title>
        <meta name="description" content="Professional smart contract security audits by certified experts. Comprehensive vulnerability analysis, compliance verification, and detailed remediation guidance." />
        <meta name="keywords" content="smart contract audit, blockchain security, DeFi audit, NFT security, cryptocurrency audit" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Smart Contract Security Audits
              </h1>
              <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
                Protect your blockchain projects with comprehensive security audits by certified experts. 
                Identify vulnerabilities before they become costly exploits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-3 bg-white text-red-900 font-semibold rounded-lg hover:bg-red-50 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </a>
                <a 
                  href="/case-studies" 
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-900 transition-colors"
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
                Our multi-layered approach ensures thorough security analysis covering all aspects of smart contract development.
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
                Choose the audit package that fits your project needs and budget.
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/ {plan.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a 
                    href="/contact" 
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Request Quote
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
              >
                Need Custom Pricing?
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
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how our security audits have helped blockchain projects succeed.
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
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Secure Your Smart Contracts?
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Don't let vulnerabilities compromise your project. Get professional security audit services from certified experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-white text-red-900 font-semibold rounded-lg hover:bg-red-50 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Start Your Audit
              </a>
              <a 
                href="/case-studies" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-900 transition-colors"
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