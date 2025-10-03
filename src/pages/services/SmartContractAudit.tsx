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
      benefit: "5-10 business day delivery"
    }
  ];

  const pricingPlans = [
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
      name: "Sarah Chen",
      role: "CTO",
      company: "DeFi Protocol",
      content: "Zion's smart contract audit saved us from potential vulnerabilities that could have cost millions. Their expertise is unmatched.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Founder",
      company: "NFT Marketplace",
      content: "Professional, thorough, and fast. The audit report was comprehensive and actionable. Highly recommended.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Head of Security",
      company: "Enterprise Blockchain",
      content: "The team's attention to detail and deep understanding of smart contract security impressed us. Excellent service.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Contract Audit Services | Zion Tech Group</title>
        <meta name="description" content="Professional smart contract audit services with 99.8% vulnerability detection rate. Comprehensive security analysis, automated scanning, and compliance verification." />
        <meta name="keywords" content="smart contract audit, blockchain security, vulnerability assessment, DeFi security, smart contract testing" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Smart Contract Audit Services
              </h1>
              <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
                Secure your blockchain applications with our comprehensive smart contract audit services. 
                Expert analysis, automated scanning, and detailed reporting to protect your assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Audit Quote
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

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Audit Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our multi-layered approach ensures maximum security coverage for your smart contracts
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <Icon className="w-6 h-6 text-red-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{feature.benefit}</span>
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
                Choose the audit package that fits your project requirements
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
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="block w-full bg-red-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    Request Quote
                  </a>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="/contact" 
                className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Need Custom Solution?
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
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
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
              Get started with a professional smart contract audit today. 
              Protect your blockchain assets with our expert security analysis.
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