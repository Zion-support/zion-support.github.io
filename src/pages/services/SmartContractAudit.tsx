import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Search, AlertTriangle, CheckCircle, Clock, Star, ArrowRight, Phone } from 'lucide-react';
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
      title: "Security Audit",
      description: "Comprehensive security analysis covering all attack vectors and vulnerabilities.",
      vulnerabilities: [
        "Reentrancy attacks",
        "Integer overflow/underflow",
        "Access control issues",
        "Logic errors"
      ]
    },
    {
      title: "Gas Optimization",
      description: "Analysis and optimization of gas consumption for cost-effective operations.",
      vulnerabilities: [
        "Inefficient loops",
        "Redundant storage operations",
        "Unnecessary computations",
        "Memory optimization"
      ]
    },
    {
      title: "Code Quality Review",
      description: "Assessment of code structure, maintainability, and best practices.",
      vulnerabilities: [
        "Poor code organization",
        "Missing documentation",
        "Inconsistent naming",
        "Complex logic"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Audit",
      price: "$2,500",
      duration: "5-7 days",
      features: [
        "Security vulnerability scan",
        "Basic gas optimization",
        "Code quality review",
        "Detailed report"
      ],
      popular: false
    },
    {
      name: "Professional Audit",
      price: "$5,000",
      duration: "7-10 days",
      features: [
        "Comprehensive security analysis",
        "Advanced gas optimization",
        "Formal verification",
        "Detailed remediation guide",
        "30-day support"
      ],
      popular: true
    },
    {
      name: "Enterprise Audit",
      price: "$10,000+",
      duration: "10-15 days",
      features: [
        "Full security audit",
        "Custom gas optimization",
        "Formal verification",
        "Compliance verification",
        "90-day support",
        "Priority support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "DeFi Protocol",
      rating: 5,
      comment: "Zion's audit helped us identify critical vulnerabilities before launch. Their expertise saved us from potential losses."
    },
    {
      name: "Michael Rodriguez",
      company: "NFT Marketplace",
      rating: 5,
      comment: "Professional, thorough, and fast. The detailed report helped us improve our smart contract security significantly."
    },
    {
      name: "Emily Johnson",
      company: "Blockchain Startup",
      rating: 5,
      comment: "Outstanding service! They found issues we never knew existed and provided clear solutions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Contract Audit Services | Zion Tech Group</title>
        <meta name="description" content="Professional smart contract audit services with comprehensive security analysis, vulnerability detection, and compliance verification." />
        <meta name="keywords" content="smart contract audit, blockchain security, vulnerability assessment, DeFi audit" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Smart Contract Audit Services
              </h1>
              <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
                Comprehensive security analysis and vulnerability assessment for your blockchain projects
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </a>
                <a href="/case-studies" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors flex items-center justify-center">
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
                Why Choose Our Audit Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert team provides comprehensive smart contract audits with industry-leading security analysis
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <Icon className="w-6 h-6 text-red-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-green-600 font-medium">
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
                Our Audit Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive audit types to ensure your smart contracts are secure and optimized
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {auditTypes.map((audit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {audit.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {audit.description}
                  </p>
                  <ul className="space-y-2">
                    {audit.vulnerabilities.map((vuln, vulnIndex) => (
                      <li key={vulnIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {vuln}
                      </li>
                    ))}
                  </ul>
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
                Choose the perfect audit package for your project needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-red-500 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-red-600 mb-2">
                    {plan.price}
                  </div>
                  <div className="text-gray-600 mb-6">
                    {plan.duration}
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a href="/contact" className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center block">
                    Request Quote
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a href="/contact" className="text-red-600 font-semibold hover:text-red-700 flex items-center justify-center">
                Need a custom solution?
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what our clients say about our smart contract audit services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Secure Your Smart Contracts?
            </h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Protect your blockchain project with professional smart contract auditing from certified security experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Request Free Quote
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-red-900 font-semibold rounded-lg transition-colors"
              >
                View Audit Reports
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