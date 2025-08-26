import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  const lastUpdated = 'January 15, 2025';

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's Terms of Service. Read our terms and conditions for using our services and website." />
        <meta name="keywords" content="terms of service, terms and conditions, legal terms, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300">
              Please read these terms carefully before using our services.
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Last updated: {lastUpdated}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
              
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using the services provided by Zion Tech Group ("we," "our," or "us"), 
                  including our website, applications, and any related services, you agree to be bound by 
                  these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  These Terms constitute a legally binding agreement between you and Zion Tech Group. 
                  We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
                </p>
              </div>

              {/* Services Description */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Zion Tech Group provides technology consulting, development, and implementation services, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Artificial Intelligence and Machine Learning solutions</li>
                  <li>Cloud computing and DevOps services</li>
                  <li>Cybersecurity and compliance services</li>
                  <li>Digital transformation consulting</li>
                  <li>Web and mobile application development</li>
                  <li>IT infrastructure and network services</li>
                  <li>Data analytics and business intelligence</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                </p>
              </div>

              {/* User Accounts */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts and Registration</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Some of our services may require you to create an account. When creating an account, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your account information</li>
                  <li>Keep your account credentials secure and confidential</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We reserve the right to terminate or suspend accounts that violate these Terms or engage in fraudulent activities.
                </p>
              </div>

              {/* Acceptable Use */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Acceptable Use Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Use services for any illegal or unauthorized purpose</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon intellectual property rights</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt service operations</li>
                  <li>Use services to harm or harass others</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content, features, and functionality of our services, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Text, graphics, logos, and images</li>
                  <li>Software, code, and applications</li>
                  <li>Design, layout, and user interface</li>
                  <li>Trademarks, service marks, and trade names</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Are owned by Zion Tech Group or its licensors and are protected by copyright, trademark, 
                  and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
                </p>
              </div>

              {/* User Content */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">6. User Content and Submissions</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You retain ownership of any content you submit to our services. However, by submitting content, you grant us:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>A worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content</li>
                  <li>The right to modify, adapt, and display your content in connection with our services</li>
                  <li>Permission to use your content for marketing and promotional purposes</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  You represent and warrant that you have all necessary rights to grant these licenses and that your content does not violate any third-party rights.
                </p>
              </div>

              {/* Privacy and Data */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Privacy and Data Protection</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Our collection, use, and protection of your personal information 
                  is governed by our Privacy Policy, which is incorporated into these Terms by reference. 
                  By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
                </p>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Payment Terms and Billing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For paid services, the following terms apply:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>All fees are due upon receipt unless otherwise specified</li>
                  <li>Prices are subject to change with 30 days' notice</li>
                  <li>Late payments may result in service suspension</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>Taxes may be added to fees as required by law</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We use third-party payment processors and are not responsible for their actions or policies.
                </p>
              </div>

              {/* Service Level Agreements */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Service Level Agreements</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our services are provided "as is" and "as available." While we strive to maintain high service quality:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>We do not guarantee uninterrupted or error-free service</li>
                  <li>Service availability may vary based on maintenance and updates</li>
                  <li>We are not liable for temporary service interruptions</li>
                  <li>Specific SLAs may apply to enterprise customers</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Service interruptions or data loss</li>
                  <li>Third-party actions or content</li>
                  <li>Damages exceeding the amount paid for services</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This limitation applies regardless of the form of action or legal theory.
                </p>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold harmless Zion Tech Group, its officers, directors, employees, 
                  and agents from and against any claims, damages, losses, and expenses arising from your use 
                  of our services or violation of these Terms.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Either party may terminate these Terms at any time:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>We may terminate for violation of these Terms</li>
                  <li>You may terminate by discontinuing use of our services</li>
                  <li>Termination does not affect accrued rights or obligations</li>
                  <li>We may retain certain data as required by law</li>
                </ul>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Governing Law and Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms are governed by the laws of the State of Delaware, United States. Any disputes shall be resolved through:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Good faith negotiations between the parties</li>
                  <li>Mediation if negotiations fail</li>
                  <li>Binding arbitration in Wilmington, Delaware</li>
                  <li>Court proceedings only if arbitration is not available</li>
                </ul>
              </div>

              {/* Severability */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Severability and Waiver</h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in full force and effect. 
                  Our failure to enforce any right or provision shall not constitute a waiver of that right or provision.
                </p>
              </div>

              {/* Entire Agreement */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Entire Agreement</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms, together with our Privacy Policy and any other agreements referenced herein, 
                  constitute the entire agreement between you and Zion Tech Group regarding our services.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">Email: legal@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">Phone: +1 (302) 464-0950</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314-11.314z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">Address: Wilmington, DE, United States</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Terms;