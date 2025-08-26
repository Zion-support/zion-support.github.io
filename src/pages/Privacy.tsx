import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Zion Tech Group's privacy policy outlines how we collect, use, and protect your personal information. Learn about your rights and our data protection practices." />
        <meta property="og:title" content="Privacy Policy — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive privacy policy detailing how we protect your data and respect your privacy rights." />
        <meta property="og:url" content="https://ziontechgroup.com/privacy" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is our priority. Learn how we protect your data and respect your rights.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Our Commitment to Privacy</h2>
              <p className="text-gray-300 mb-6">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  privacy@ziontechgroup.com
                </a>
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Information We Collect</h3>
              <p className="text-gray-300 mb-4">We collect information you provide directly to us, such as:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Company information and job title</li>
                <li>Service inquiries and project requirements</li>
                <li>Communication preferences</li>
              </ul>

              <p className="text-gray-300 mb-4">We also automatically collect certain information when you visit our website:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Device information and IP address</li>
                <li>Browser type and operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website information</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">How We Use Your Information</h3>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you relevant information about our services</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Information Sharing</h3>
              <p className="text-gray-300 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Data Security</h3>
              <p className="text-gray-300 mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Your Rights</h3>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent where applicable</li>
                <li>Request data portability</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Cookies and Tracking</h3>
              <p className="text-gray-300 mb-6">
                We use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze website traffic, and understand where our visitors are coming from. You can 
                control cookie settings through your browser preferences.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Third-Party Links</h3>
              <p className="text-gray-300 mb-6">
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices or content of these external sites. We encourage you to review their 
                privacy policies before providing any personal information.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Children's Privacy</h3>
              <p className="text-gray-300 mb-6">
                Our services are not intended for children under the age of 13. We do not knowingly 
                collect personal information from children under 13. If you believe we have collected 
                such information, please contact us immediately.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">International Transfers</h3>
              <p className="text-gray-300 mb-6">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers comply with applicable data protection laws and implement 
                appropriate safeguards to protect your information.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Changes to This Policy</h3>
              <p className="text-gray-300 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on our website and updating the "Last updated" date. 
                Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Contact Us</h3>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-white/5 rounded-lg p-4 mb-6">
                <p className="text-gray-300"><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p className="text-gray-300"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-300"><strong>Address:</strong> San Francisco, CA</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help. Contact our privacy team for any questions or concerns about your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/terms"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;