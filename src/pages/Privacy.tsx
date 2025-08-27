import { Shield, Lock, Eye, Database, Users, Calendar, Globe, Mail, Phone } from 'lucide-react';

export default function Privacy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Your privacy and data security are our top priorities. Learn how we protect and handle your information.
          </p>
          <div className="mt-8 text-sm text-zion-slate-light">
            Last updated: {currentYear}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Lock className="w-6 h-6 mr-3 text-zion-cyan" />
                Introduction
              </h2>
              <p className="text-zion-slate-light mb-6">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>

              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-zion-cyan" />
                Information We Collect
              </h2>
              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">Personal Information</h3>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company name and job title</li>
                    <li>Professional background and expertise</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zion-slate-dark mb-2">Technical Information</h3>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Website usage data and analytics</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Database className="w-6 h-6 mr-3 text-zion-cyan" />
                How We Use Your Information
              </h2>
              <div className="space-y-4 mb-6">
                <p className="text-zion-slate-light">We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4">
                  <li>Providing and improving our services</li>
                  <li>Communicating with you about our offerings</li>
                  <li>Personalizing your experience</li>
                  <li>Analyzing website usage and performance</li>
                  <li>Ensuring security and preventing fraud</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-zion-cyan" />
                Information Sharing
              </h2>
              <p className="text-zion-slate-light mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4 mb-6">
                <li>With trusted service providers who assist us in operating our website and services</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-zion-cyan" />
                Data Security
              </h2>
              <p className="text-zion-slate-light mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4 mb-6">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>

              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-zion-cyan" />
                Data Retention
              </h2>
              <p className="text-zion-slate-light mb-6">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>

              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-zion-cyan" />
                International Data Transfers
              </h2>
              <p className="text-zion-slate-light mb-6">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>

              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Eye className="w-6 h-6 mr-3 text-zion-cyan" />
                Your Rights
              </h2>
              <p className="text-zion-slate-light mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4 mb-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your information</li>
                <li>Restrict processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-zion-cyan" />
                Cookies and Tracking
              </h2>
              <p className="text-zion-slate-light mb-6">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-zion-cyan" />
                Children's Privacy
              </h2>
              <p className="text-zion-slate-light mb-6">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>

              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-zion-cyan" />
                Changes to This Policy
              </h2>
              <p className="text-zion-slate-light mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>

              <h2 className="text-2xl font-bold text-zion-slate-dark mb-6 flex items-center">
                <Mail className="w-6 h-6 mr-3 text-zion-cyan" />
                Contact Us
              </h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-zion-slate-light rounded-lg p-6 space-y-3">
                <div className="flex items-center text-zion-slate-dark">
                  <Mail className="w-5 h-5 mr-3 text-zion-cyan" />
                  <span>Email: privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center text-zion-slate-dark">
                  <Phone className="w-5 h-5 mr-3 text-zion-cyan" />
                  <span>Phone: +1-555-123-4567</span>
                </div>
                <div className="flex items-center text-zion-slate-dark">
                  <Globe className="w-5 h-5 mr-3 text-zion-cyan" />
                  <span>Website: https://ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zion-slate-dark mb-6">
            Have Questions About Privacy?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8">
            Our team is here to help clarify any concerns about how we handle your data
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:privacy@ziontechgroup.com"
              className="bg-zion-cyan text-white px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan/90 transition-colors"
            >
              Contact Privacy Team
            </a>
            <a
              href="/contact"
              className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors"
            >
              General Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
