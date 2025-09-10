import React from 'react';
import SEO from '../components/SEO';

const Legal: React.FC = () => {
  const legalDocuments = [
    {
      title: "Terms of Service",
      description: "Terms and conditions for using our services",
      lastUpdated: "2025-01-01",
      link: "/terms"
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your data",
      lastUpdated: "2025-01-01",
      link: "/privacy"
    },
    {
      title: "Cookie Policy",
      description: "Information about our use of cookies",
      lastUpdated: "2025-01-01",
      link: "/cookies"
    },
    {
      title: "Data Processing Agreement",
      description: "Terms for processing personal data",
      lastUpdated: "2024-12-15",
      link: "#"
    },
    {
      title: "Service Level Agreement",
      description: "Our commitment to service availability and performance",
      lastUpdated: "2024-12-01",
      link: "#"
    },
    {
      title: "Security Policy",
      description: "Our approach to data security and protection",
      lastUpdated: "2024-11-20",
      link: "#"
    }
  ];

  const complianceInfo = [
    {
      standard: "SOC 2 Type II",
      description: "Security, availability, and confidentiality controls",
      status: "Certified",
      validUntil: "2025-12-31"
    },
    {
      standard: "ISO 27001",
      description: "Information security management system",
      status: "Certified",
      validUntil: "2025-06-30"
    },
    {
      standard: "GDPR Compliant",
      description: "General Data Protection Regulation compliance",
      status: "Compliant",
      validUntil: "Ongoing"
    },
    {
      standard: "CCPA Compliant",
      description: "California Consumer Privacy Act compliance",
      status: "Compliant",
      validUntil: "Ongoing"
    }
  ];

  return (
    <>
      <SEO 
        title="Legal - Zion Tech Group"
        description="Legal documents, compliance information, and policies for Zion Tech Group."
        keywords="legal, terms, privacy, compliance, policies, zion tech group"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Legal Information
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access our legal documents, compliance certifications, and policies 
                to understand how we protect your data and ensure regulatory compliance.
              </p>
            </div>

            {/* Legal Documents */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Legal Documents</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {legalDocuments.map((doc, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3">{doc.title}</h3>
                    <p className="text-gray-300 mb-4">{doc.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="text-sm text-purple-400">
                        <span className="font-semibold">Last Updated:</span> {doc.lastUpdated}
                      </div>
                    </div>
                    <a 
                      href={doc.link}
                      className="text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                    >
                      View Document →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Compliance & Certifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {complianceInfo.map((item, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{item.standard}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        item.status === 'Certified' || item.status === 'Compliant' 
                          ? 'bg-green-600 text-white' 
                          : 'bg-yellow-600 text-white'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="text-sm text-purple-400">
                      <span className="font-semibold">Valid Until:</span> {item.validUntil}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Protection */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Data Protection</h2>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Your Rights</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300">Right to access your personal data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300">Right to rectify inaccurate data</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300">Right to erasure ("right to be forgotten")</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300">Right to data portability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300">Right to object to processing</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Our Commitments</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300">Data minimization and purpose limitation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300">Transparent data processing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300">Regular security assessments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300">Breach notification procedures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        <span className="text-gray-300">Privacy by design principles</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">Legal Contact</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Legal Department</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-purple-400">Email:</span>
                      <p className="text-gray-300">legal@ziontechgroup.com</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-400">Phone:</span>
                      <p className="text-gray-300">+1 (555) 123-4569</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-400">Address:</span>
                      <p className="text-gray-300">
                        123 Innovation Drive<br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">Data Protection Officer</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-purple-400">Email:</span>
                      <p className="text-gray-300">dpo@ziontechgroup.com</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-400">Phone:</span>
                      <p className="text-gray-300">+1 (555) 123-4570</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-purple-400">Response Time:</span>
                      <p className="text-gray-300">72 hours for data protection inquiries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Stay Informed
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                We regularly update our legal documents and policies. Subscribe to our legal updates 
                to stay informed about changes that may affect you.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Legal;