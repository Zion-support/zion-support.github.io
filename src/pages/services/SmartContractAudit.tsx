import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users, 
  Code, 
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
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick audit delivery without compromising on quality or thoroughness of analysis.",
      benefit: "48-72 hour delivery for standard audits"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified blockchain security experts with extensive smart contract audit experience.",
      benefit: "10+ years average experience"
    },
    {
      icon: Code,
      title: "Code Quality Review",
      description: "Comprehensive code quality assessment including best practices and optimization suggestions.",
      benefit: "Improve code maintainability"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Audit",
      price: "$2,500",
      period: "audit",
      description: "Essential security review for simple smart contracts",
      features: [
        "Automated vulnerability scanning",
        "Basic code review",
        "Security report",
      popular: false
    },
    {
      name: "Standard Audit",
      price: "$5,000",
      period: "audit",
      description: "Comprehensive audit for medium complexity contracts",
      features: [
        "Full automated scanning",
        "Manual code review",
        "Detailed security report",
      popular: true
    },
    {
      name: "Enterprise Audit",
      price: "$10,000",
      period: "audit",
      description: "Complete audit for complex enterprise contracts",
      features: [
        "Advanced vulnerability scanning",
        "Expert manual review",
        "Formal verification",
        "Comprehensive report",
        "Risk mitigation plan",
        "Priority support",
        "Follow-up consultation"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, DeFi Protocol",
      content: "Zion's smart contract audit helped us identify critical vulnerabilities before launch. Their expertise saved us from potential security breaches.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, NFT Marketplace",
      content: "Professional, thorough, and fast. The audit report was detailed and actionable. Highly recommend their services.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Blockchain Developer",
      content: "The team's deep understanding of smart contract security is impressive. They caught issues we missed during development.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Contract Audit Services | Zion Tech Group</title>
        <meta name="description" content="Professional smart contract security audits by certified blockchain experts. Comprehensive vulnerability analysis and risk mitigation." />
        <meta name="keywords" content="smart contract audit, blockchain security, DeFi audit, NFT audit, vulnerability assessment" />
      </Helmet>
      
      <Header />
      
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Smart Contract Security Audits
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Protect your blockchain projects with comprehensive security audits by certified experts. 
              Identify vulnerabilities before they become costly security breaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Audit Quote
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <a 
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </section>

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

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Audit Pricing Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the audit package that fits your project's complexity and security requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white p-8 rounded-xl shadow-lg border-2 ${plan.popular ? 'border-red-500' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">/{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See what our clients say about our smart contract audit services.
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
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
              </a>
              <a 
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors"
              >
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