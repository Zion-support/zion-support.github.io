import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/website-audit-and-enhancement-98df

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
=======
import { Helmet } from 'react-helmet-async';

const Privacy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta property="og:title" content="Privacy Policy — Zion Tech Group" />
        <meta property="og:description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta property="og:url" content="https://ziontechgroup.com/privacy" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Policy
              </span>
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we protect and handle your personal information
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Contact us through our website forms</li>
                  <li>Request a quote or consultation</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Apply for employment opportunities</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you marketing materials (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-gray-300 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
                <p className="text-gray-300 mb-6">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Contact us through our website or email</li>
                  <li>• Request a quote or consultation</li>
                  <li>• Sign up for our newsletter</li>
                  <li>• Apply for employment</li>
                  <li>• Use our services</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Types of Information</h3>
                <p className="text-gray-300 mb-6">
                  The information we collect may include:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Name and contact information (email, phone, address)</li>
                  <li>• Company information and job title</li>
                  <li>• Project requirements and technical specifications</li>
                  <li>• Communication preferences</li>
                  <li>• Resume and employment history (for job applicants)</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">How We Use Your Information</h3>
                <p className="text-gray-300 mb-6">
                  We use the information we collect to:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Provide and improve our services</li>
                  <li>• Communicate with you about projects and services</li>
                  <li>• Send newsletters and marketing communications (with your consent)</li>
                  <li>• Process job applications</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Protect our rights and prevent fraud</li>
                </ul>

<<<<<<< HEAD
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
>>>>>>> origin/cursor/website-audit-and-enhancement-98df

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-gray-300 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

<<<<<<< HEAD
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300">
                    <strong>Email:</strong> privacy@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> San Francisco, CA
                  </p>
                </div>
              </div>

              <div className="text-center pt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
=======
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
=======
                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Information Sharing</h3>
                <p className="text-gray-300 mb-6">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• With your explicit consent</li>
                  <li>• With service providers who assist in our operations</li>
                  <li>• To comply with legal requirements</li>
                  <li>• To protect our rights and safety</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Data Security</h3>
                <p className="text-gray-300 mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Data Retention</h3>
                <p className="text-gray-300 mb-6">
                  We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Your Rights</h3>
                <p className="text-gray-300 mb-6">
                  You have the right to:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Request deletion of your information</li>
                  <li>• Object to processing of your information</li>
                  <li>• Withdraw consent for marketing communications</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Cookies and Tracking</h3>
                <p className="text-gray-300 mb-6">
                  Our website uses cookies and similar technologies to improve user experience and analyze website traffic. You can control cookie settings through your browser preferences.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Third-Party Links</h3>
                <p className="text-gray-300 mb-6">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Children's Privacy</h3>
                <p className="text-gray-300 mb-6">
                  Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
                </p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">International Transfers</h3>
                <p className="text-gray-300 mb-6">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Changes to This Policy</h3>
                <p className="text-gray-300 mb-6">
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Contact Us</h3>
                <p className="text-gray-300 mb-6">
                  If you have questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300"><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p className="text-gray-300"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p className="text-gray-300"><strong>Address:</strong> San Francisco, CA</p>
                </div>
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
              We're here to help. Contact us with any privacy-related questions.
            </p>
            <a
              href="mailto:privacy@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
  );
};

export default Privacy;