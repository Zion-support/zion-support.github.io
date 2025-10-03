import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Users, 
  Star, 
  ArrowRight, 
  Phone 
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
      description: "Complete security assessment for large-scale blockchain projects",
      features: [
        "Full audit suite",
        "Multiple security methodologies",
        "Penetration testing",
        "Comprehensive report with remediation",
        "Dedicated security expert",
        "Unlimited revisions",
        "Full regulatory compliance",
        "Unlimited code lines",
        "Performance optimization",
        "Architecture security review",
        "Team training session",
        "6-month support included"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, DeFi Protocol",
      content: "Zion's smart contract audit saved us from a critical vulnerability that could have resulted in millions in losses. Their thorough analysis and clear recommendations were invaluable.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, NFT Marketplace",
      content: "Professional, thorough, and fast. The audit report was comprehensive and helped us understand every aspect of our smart contract security.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Blockchain Developer",
      content: "The team's expertise in smart contract security is unmatched. They identified issues we never would have found on our own.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Contract Audit Services | Zion Holdings</title>
        <meta name="description" content="Professional smart contract audit services with 99.8% vulnerability detection rate. Comprehensive security analysis for DeFi, NFT, and blockchain projects." />
        <meta name="keywords" content="smart contract audit, blockchain security, DeFi audit, NFT audit, vulnerability assessment" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                Smart Contract Audit Services
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Secure your blockchain projects with our comprehensive smart contract audit services. 
                Our expert team delivers 99.8% vulnerability detection rate with detailed security analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="/case-studies"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors inline-flex items-center"
                >
                  View Case Studies
                  <ArrowRight className="w-4 h-4 ml-2" />
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
                Our comprehensive audit process ensures maximum security for your blockchain projects
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
                Transparent Pricing for Every Project Size
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the audit package that fits your project needs and budget
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'ring-2 ring-red-500 relative' : ''}`}>
                  {plan.popular && (
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Most Popular
                    </span>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-red-600 mb-2">
                      {plan.price}
                      <span className="text-lg font-normal text-gray-500">/{plan.period}</span>
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
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
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
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
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
                Trusted by leading blockchain projects worldwide
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
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
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
            <h2 className="text-4xl font-bold mb-4">
              Ready to Secure Your Smart Contracts?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get a comprehensive security audit for your blockchain project. 
              Our expert team is ready to help you identify and fix vulnerabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Now
              </a>
              <a 
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors inline-flex items-center"
              >
                View Success Stories
                <ArrowRight className="w-4 h-4 ml-2" />
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