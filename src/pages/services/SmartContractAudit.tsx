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
      description: "Detailed risk analysis with actionable recommendations to secure your smart contracts.",
      benefit: "Comprehensive risk mitigation strategies",
    },
    {
      icon: CheckCircle,
      title: "Compliance Verification",
      description: "Ensure your smart contracts meet industry standards and regulatory requirements.",
      benefit: "Full compliance documentation",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Get detailed audit reports within 7-14 days with prioritized findings.",
      benefit: "Rapid deployment timeline",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified blockchain security experts with extensive smart contract audit experience.",
      benefit: "World-class security expertise",
    },
  ];

  const auditSteps = [
    {
      step: "01",
      title: "Code Review",
      description: "Comprehensive static analysis and manual code review by security experts.",
    },
    {
      step: "02", 
      title: "Automated Testing",
      description: "AI-powered vulnerability scanning and automated security testing.",
    },
    {
      step: "03",
      title: "Dynamic Analysis",
      description: "Runtime testing and behavioral analysis of smart contract functions.",
    },
    {
      step: "04",
      title: "Report & Recommendations",
      description: "Detailed audit report with prioritized findings and remediation guidance.",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic Audit",
      price: "$2,500",
      duration: "7-10 days",
      popular: false,
      features: [
        "Static code analysis",
        "Automated vulnerability scanning",
        "Basic security review",
        "Audit report with findings",
        "Email support",
      ],
    },
    {
      name: "Professional Audit",
      price: "$5,000",
      duration: "10-14 days",
      popular: true,
      features: [
        "Comprehensive security analysis",
        "Manual code review",
        "Dynamic testing",
        "Risk assessment",
        "Detailed remediation guide",
        "Priority support",
        "Follow-up consultation",
      ],
    },
    {
      name: "Enterprise Audit",
      price: "$10,000+",
      duration: "14-21 days",
      popular: false,
      features: [
        "Full security audit suite",
        "Formal verification",
        "Penetration testing",
        "Compliance verification",
        "Custom security requirements",
        "Dedicated security expert",
        "Ongoing monitoring",
        "24/7 support",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, DeFi Protocol",
      content: "Zion's smart contract audit saved us from a critical vulnerability that could have resulted in millions in losses. Their expertise is unmatched.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, NFT Marketplace",
      content: "Professional, thorough, and fast. The audit report was comprehensive and helped us launch with confidence.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Security Lead, Gaming DAO",
      content: "The team's attention to detail and deep blockchain knowledge gave us peace of mind for our token launch.",
      rating: 5,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Smart Contract Audit Services | Zion Tech Group</title>
        <meta name="description" content="Professional smart contract security auditing services. Comprehensive vulnerability analysis, risk assessment, and compliance verification for blockchain projects." />
        <meta name="keywords" content="smart contract audit, blockchain security, vulnerability assessment, DeFi security, NFT security, crypto audit" />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Smart Contract Security Audits
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Protect your blockchain project with comprehensive security audits by certified experts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  Get Audit Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="/case-studies"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
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
                Comprehensive Security Analysis
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expert team provides thorough smart contract audits using industry-leading tools and methodologies
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="text-sm font-medium text-red-600">{feature.benefit}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audit Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Audit Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to identifying and mitigating smart contract vulnerabilities
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {auditSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Audit Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the right audit package for your project's security needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg border-2 ${
                  plan.popular ? 'border-red-600' : 'border-gray-200'
                }`}>
                  {plan.popular && (
                    <div className="bg-red-600 text-white text-center py-2 px-4 rounded-lg mb-4 -mt-8">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-red-600 mb-2">{plan.price}</div>
                    <div className="text-gray-600">{plan.duration}</div>
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
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by leading blockchain projects worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
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
              Ready to Secure Your Smart Contracts?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get a comprehensive security audit and launch your blockchain project with confidence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </a>
              <a 
                href="/case-studies"
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
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