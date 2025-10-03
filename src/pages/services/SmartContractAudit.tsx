import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users, 
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
      benefit: "10+ years average experience",
    },
  ];

  const auditTypes = [
    {
      icon: Shield,
      title: "DeFi Protocol Audit",
      description: "Comprehensive security analysis for decentralized finance protocols including DEXs, lending platforms, and yield farming contracts.",
      vulnerabilities: [
        "Reentrancy attacks",
        "Flash loan exploits",
        "Oracle manipulation",
        "Access control issues"
      ],
    },
    {
      icon: Search,
      title: "NFT Marketplace Audit",
      description: "Security assessment for NFT marketplaces, minting contracts, and trading platforms.",
      vulnerabilities: [
        "Price manipulation",
        "Metadata vulnerabilities",
        "Royalty bypass attacks",
        "Front-running protection"
      ],
    },
  ];

  const services = [
    {
      icon: Shield,
      title: "Static Analysis",
      description: "Automated code analysis to identify potential vulnerabilities and security issues.",
      features: [
        "Symbolic execution",
        "Control flow analysis",
        "Data flow analysis",
        "Pattern matching"
      ],
    },
    {
      icon: Search,
      title: "Dynamic Testing",
      description: "Runtime testing and simulation to validate contract behavior under various conditions.",
      features: [
        "Fuzzing testing",
        "Integration testing",
        "Stress testing",
        "Edge case validation"
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Basic Audit",
      price: "$5,000",
      duration: "5-7 days",
      description: "Essential security review for simple smart contracts",
      features: [
        "Static analysis",
        "Basic vulnerability scan",
        "Security report",
        "Email support"
      ],
    },
    {
      name: "Professional Audit",
      price: "$15,000",
      duration: "7-10 days",
      popular: true,
      description: "Comprehensive audit for complex smart contracts",
      features: [
        "Static & dynamic analysis",
        "Manual code review",
        "Detailed security report",
        "Vulnerability remediation guide",
        "Phone support",
        "30-day follow-up"
      ],
    },
    {
      name: "Enterprise Audit",
      price: "$50,000+",
      duration: "10-15 days",
      description: "Full-scale audit for enterprise blockchain solutions",
      features: [
        "Complete security assessment",
        "Formal verification",
        "Penetration testing",
        "Compliance verification",
        "Dedicated security team",
        "Ongoing monitoring",
        "Priority support"
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "DeFi Protocol CEO",
      content: "Zion's audit saved us from a critical vulnerability that could have cost millions. Their thorough analysis and clear recommendations were invaluable.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      company: "Blockchain Startup CTO",
      content: "Professional, thorough, and fast. The team identified several security issues we missed and provided actionable solutions.",
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Smart Contract Audit - Zion Tech Group | Blockchain Security Experts</title>
        <meta 
          name="description" 
          content="Professional smart contract auditing services with 99.8% vulnerability detection rate. Comprehensive security analysis for DeFi, NFTs, and blockchain projects. 5-10 day delivery." 
        />
        <meta 
          name="keywords" 
          content="smart contract audit, blockchain security, DeFi audit, NFT audit, smart contract security, vulnerability assessment, blockchain compliance" 
        />
        <link 
          rel="canonical" 
          href="https://ziontechgroup.com/services/smart-contract-audit" 
        />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Smart Contract <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">Audit</span>
              </h1>
              <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto mb-8">
                Professional smart contract auditing services with 99.8% vulnerability detection rate. 
                Comprehensive security analysis for DeFi, NFTs, and blockchain projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Request Quote
                </a>
                <a 
                  href="#pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-red-900 font-semibold rounded-lg transition-colors"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Smart Contract Audits?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive audit process ensures your smart contracts are secure, compliant, and ready for production.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <div className="text-sm font-medium text-red-600">
                      {feature.benefit}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Audit Types Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Specialized Audit Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored security assessments for different types of blockchain applications.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {auditTypes.map((audit, index) => {
                const Icon = audit.icon;
                return (
                  <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {audit.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {audit.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Common Vulnerabilities:</h4>
                      <ul className="space-y-2">
                        {audit.vulnerabilities.map((vuln, vulnIndex) => (
                          <li key={vulnIndex} className="flex items-center text-sm">
                            <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                            {vuln}
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

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Audit Methodology
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multi-layered approach combining automated tools with expert manual analysis.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
                      <Icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Audit Pricing Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the audit package that best fits your project needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-red-500 relative' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-red-600 mb-2">{plan.price}</div>
                    <div className="text-gray-600 mb-4">{plan.duration}</div>
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
                  <a 
                    href="/contact"
                    className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Request Quote
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                Custom Enterprise Solutions
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by leading blockchain companies and DeFi protocols worldwide.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.company}</div>
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
              Get a professional security audit and protect your blockchain project from vulnerabilities. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
              <a 
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-red-900 font-semibold rounded-lg transition-colors"
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