import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Last updated: January 2025
          </p>

          <div className="cyber-card p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Information We Collect
              </h2>
              <p className="text-gray-300 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Business information (company name, industry, size)</li>
                <li>Service usage data and preferences</li>
                <li>Communication records and support requests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-cyan-400" />
                How We Use Your Information
              </h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Deliver and maintain our AI services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Improve our services and develop new features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-cyan-400" />
                Data Security
              </h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Database className="w-6 h-6 mr-3 text-cyan-400" />
                Data Sharing
              </h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Your Rights
              </h2>
              <p className="text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+13024640950"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  kleber@ziontechgroup.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
