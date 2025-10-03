import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Shield, Search, AlertTriangle, CheckCircle, Clock, Zap, Users, FileText, Award } from 'lucide-react';
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
    },
    {
      icon: Zap,
      title: "Gas Optimization",
      description: "Identify and fix gas inefficiencies to reduce transaction costs and improve performance.",
      benefit: "Up to 40% gas savings"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless integration with development teams for ongoing security and code quality.",
      benefit: "Real-time collaboration tools"
    },
    {
      icon: FileText,
      title: "Detailed Reporting",
      description: "Comprehensive audit reports with actionable recommendations and remediation guidance.",
      benefit: "Executive and technical summaries"
    },
    {
      icon: Award,
      title: "Certification Support",
      description: "Assistance with security certifications and compliance documentation for enterprise clients.",
      benefit: "Industry-standard certifications"
    }
  ];

  const auditProcess = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "Code review, architecture analysis, and scope definition for the audit process."
    },
    {
      step: "2", 
      title: "Automated Analysis",
      description: "Comprehensive scanning using multiple tools and vulnerability databases."
    },
    {
      step: "3",
      title: "Manual Review",
      description: "Expert analysis by certified security professionals for complex vulnerabilities."
    },
    {
      step: "4",
      title: "Testing & Validation",
      description: "Dynamic testing, penetration testing, and formal verification methods."
    },
    {
      step: "5",
      title: "Report & Remediation",
      description: "Detailed reporting with prioritized fixes and implementation guidance."
    }
  ];

  const industries = [
    "DeFi Protocols",
    "NFT Marketplaces", 
    "Gaming Platforms",
    "Supply Chain",
    "Real Estate",
    "Insurance",
    "Healthcare",
    "Finance"
  ];

  return (
    <>
      <Helmet>
        <title>Smart Contract Security Audit | Zion AI</title>
        <meta name="description" content="Comprehensive smart contract security audits with 99.8% vulnerability detection rate. Expert analysis, automated scanning, and detailed remediation guidance." />
        <meta name="keywords" content="smart contract audit, blockchain security, DeFi audit, NFT security, smart contract testing" />
        <link rel="canonical" href="https://zion.ai/services/smart-contract-audit" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Enterprise-Grade Security
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Smart Contract
                <span className="text-blue-600 block">Security Audit</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Comprehensive security audits for smart contracts with 99.8% vulnerability detection rate. 
                Protect your blockchain applications with expert analysis and automated scanning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Quote
                </button>
                <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  View Sample Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Security Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our multi-layered approach ensures maximum security coverage for your smart contracts
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-sm font-medium text-blue-600">
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Audit Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to ensuring maximum security coverage
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {auditProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized expertise across multiple blockchain sectors
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900">
                    {industry}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Smart Contracts?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a comprehensive security audit with detailed remediation guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Audit
              </button>
              <button className="px-8 py-4 border border-blue-300 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default SmartContractAudit;