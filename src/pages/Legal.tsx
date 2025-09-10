import React from 'react';
import { FileText, Shield, Scale } from 'lucide-react';
import SEO from '../components/SEO';

const Legal = () => {
  const legalDocuments = [
    {
      title: "Terms of Service",
      description: "Our terms and conditions for using our services",
      icon: <FileText className="h-6 w-6 text-blue-400" />,
      link: "/terms"
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your information",
      icon: <Shield className="h-6 w-6 text-green-400" />,
      link: "/privacy"
    },
    {
      title: "Cookie Policy",
      description: "Information about our use of cookies and similar technologies",
      icon: <Scale className="h-6 w-6 text-purple-400" />,
      link: "/cookies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Legal - Zion Tech Group"
        description="Legal information, terms, and policies for Zion Tech Group."
        keywords={["legal", "terms", "privacy", "policies", "compliance"]}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Legal Information</h1>
          <p className="text-xl text-gray-300">
            Important legal documents and policies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {legalDocuments.map((document, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                {document.icon}
                <h3 className="text-xl font-bold text-white ml-3">{document.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{document.description}</p>
              <button className="text-blue-400 hover:text-blue-300 transition-colors">
                Read More →
              </button>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Compliance & Governance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Regulatory Compliance</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• GDPR Compliance</li>
                <li>• SOC 2 Type II Certified</li>
                <li>• ISO 27001 Certified</li>
                <li>• HIPAA Compliant</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Corporate Governance</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Board of Directors</li>
                <li>• Audit Committee</li>
                <li>• Code of Conduct</li>
                <li>• Whistleblower Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;