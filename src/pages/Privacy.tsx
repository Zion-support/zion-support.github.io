import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f

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
<<<<<<< HEAD
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
=======
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we collect, use, and protect your personal information
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We collect information you provide directly to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Contact us through our website or email</li>
                <li>Request a quote or consultation</li>
                <li>Subscribe to our newsletter</li>
                <li>Apply for a job or career opportunity</li>
                <li>Use our services or platforms</li>
              </ul>
              
              <p className="text-gray-300 mb-4">
                The types of information we may collect include:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Name, email address, phone number, and company information</li>
                <li>Project requirements and technical specifications</li>
                <li>Resume, work history, and professional qualifications</li>
                <li>Website usage data and analytics</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about projects and opportunities</li>
                <li>Send newsletters and marketing communications (with your consent)</li>
                <li>Process job applications and career inquiries</li>
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and security threats</li>
              </ul>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Information Sharing</h3>
              <p className="text-gray-300 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
=======
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">3. Information Sharing</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>With your explicit consent</li>
                <li>With service providers who assist us in operating our business</li>
                <li>To comply with legal requirements or protect our rights</li>
                <li>In connection with a business transfer or merger</li>
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
              </ul>

<<<<<<< HEAD
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
=======
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">4. Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Unauthorized access, alteration, or disclosure</li>
                <li>Data loss or destruction</li>
                <li>Malicious attacks and security breaches</li>
              </ul>
              <p className="text-gray-300">
                However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
              </p>

<<<<<<< HEAD
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
=======
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">5. Your Rights</h2>
              <p className="text-gray-300 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-gray-300">
                To exercise these rights, please contact us at{' '}
                <a href="mailto:privacy@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">
                  privacy@ziontechgroup.com
                </a>
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">6. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve our website functionality and user experience</li>
              </ul>
              <p className="text-gray-300">
                You can control cookie settings through your browser preferences. For more information, see our{' '}
                <Link to="/cookies" className="text-blue-400 hover:text-blue-300">
                  Cookie Policy
                </Link>.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">7. International Transfers</h2>
              <p className="text-gray-300 mb-4">
                Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">8. Children's Privacy</h2>
              <p className="text-gray-300">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">9. Changes to This Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
              <p className="text-gray-300">
                Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">10. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> <a href="mailto:privacy@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">privacy@ziontechgroup.com</a></p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Address:</strong> Zion Tech Group, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have Questions About Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our privacy team is here to help answer any questions you may have about how we handle your data.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
          >
            Contact Privacy Team
          </Link>
        </div>
      </section>
    </div>
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
  );
};

export default Privacy;