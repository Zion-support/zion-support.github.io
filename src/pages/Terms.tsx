import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service — Zion Tech Group | Service Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service. Understand our service terms, conditions, and legal agreements for technology solutions and consulting services." />
        <meta property="og:title" content="Terms of Service — Zion Tech Group" />
        <meta property="og:description" content="Comprehensive terms of service detailing the rules and conditions for using our technology solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/terms" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Service
              </span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              These terms and conditions govern your use of Zion Tech Group's services and website.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
=======
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our services
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
<<<<<<< HEAD
        </section>

        {/* Terms Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-300 mb-6">
                These terms apply to all users of our services, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Use License</h3>
              <p className="text-gray-300 mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
=======
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-300">
                These terms apply to all visitors, users, and others who access or use our services.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">2. Description of Service</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group provides technology consulting, development, and implementation services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Artificial Intelligence and Machine Learning solutions</li>
                <li>Cloud infrastructure and DevOps services</li>
                <li>Cybersecurity and data protection</li>
                <li>IT infrastructure management</li>
                <li>Digital transformation consulting</li>
                <li>Custom software development</li>
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
              </ul>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Service Terms</h3>
              <p className="text-gray-300 mb-4">When you engage our services, the following terms apply:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>We will provide services as outlined in the agreed-upon scope of work</li>
                <li>Services will be performed in a professional and timely manner</li>
                <li>We will communicate regularly about project progress and any issues</li>
                <li>Payment terms will be as specified in the service agreement</li>
                <li>Intellectual property rights will be as outlined in the service agreement</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Payment Terms</h3>
              <p className="text-gray-300 mb-6">
                Our payment terms vary by service type. For consulting services, payment is typically due upon completion of deliverables. 
                For ongoing services, payment is due monthly or as specified in the service agreement.
              </p>
              <p className="text-gray-300 mb-6">
                Late payments may result in suspension of services and may incur additional fees. We reserve the right to charge interest 
                on overdue amounts at the rate of 1.5% per month.
=======
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">3. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not interfere with the proper functioning of our services</li>
                <li>Report any security vulnerabilities or issues</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">4. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and designs, are owned by Zion Tech Group or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-300">
                You may not reproduce, distribute, modify, or create derivative works without our express written consent.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">5. Privacy and Data Protection</h2>
              <p className="text-gray-300 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.
              </p>
              <p className="text-gray-300">
                By using our services, you consent to the collection and use of information as outlined in our{' '}
                <Link to="/privacy" className="text-blue-400 hover:text-blue-300">
                  Privacy Policy
                </Link>.
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
              </p>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Intellectual Property</h3>
              <p className="text-gray-300 mb-6">
                The content on this website, including but not limited to text, graphics, logos, images, and software, is the property 
                of Zion Tech Group and is protected by copyright laws. You may not reproduce, distribute, or create derivative works 
                without our express written consent.
              </p>
              <p className="text-gray-300 mb-6">
                For custom development projects, intellectual property rights will be specified in the individual service agreement. 
                Typically, custom code developed for clients becomes their property upon full payment.
=======
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">6. Service Availability</h2>
              <p className="text-gray-300 mb-4">
                We strive to provide reliable and uninterrupted services, but we cannot guarantee that our services will be available at all times. We may:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Perform maintenance and updates</li>
                <li>Experience technical difficulties</li>
                <li>Modify or discontinue services</li>
                <li>Limit access during peak usage</li>
              </ul>
              <p className="text-gray-300">
                We will provide reasonable notice for planned maintenance and service changes.
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
              </p>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Confidentiality</h3>
              <p className="text-gray-300 mb-6">
                We understand the sensitive nature of business information and maintain strict confidentiality standards. We will not 
                disclose any confidential information shared with us during the course of our engagement, except as required by law 
                or with your express written consent.
=======
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">7. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Reputational damage</li>
              </ul>
              <p className="text-gray-300">
                Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
              </p>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Limitation of Liability</h3>
              <p className="text-gray-300 mb-6">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable 
                for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses, resulting from your use of our services.
=======
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">8. Indemnification</h2>
              <p className="text-gray-300">
                You agree to indemnify and hold harmless Zion Tech Group, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
              </p>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Warranty Disclaimer</h3>
              <p className="text-gray-300 mb-6">
                The information on this website is provided on an "as is" basis. Zion Tech Group makes no warranties, expressed or implied, 
                and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of 
                merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Termination</h3>
              <p className="text-gray-300 mb-6">
                Either party may terminate the service agreement with written notice. Upon termination:
=======
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">9. Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your access to our services at any time, with or without cause, with or without notice. You may also terminate your use of our services at any time.
              </p>
              <p className="text-gray-300">
                Upon termination, your right to use our services will cease immediately, and we may delete or deactivate your account and related information.
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>We will complete any work in progress up to the termination date</li>
                <li>You will pay for services rendered up to the termination date</li>
                <li>We will return any materials or data belonging to you</li>
                <li>Confidentiality obligations will continue to apply</li>
              </ul>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Governing Law</h3>
              <p className="text-gray-300 mb-6">
                These terms shall be governed by and construed in accordance with the laws of the State of California, United States, 
                without regard to its conflict of law provisions. Any disputes arising from these terms or our services will be resolved 
                through binding arbitration in San Francisco, California.
=======
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">10. Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-300">
                Any disputes arising from these terms or your use of our services shall be resolved in the courts of San Francisco County, California.
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
              </p>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Changes to Terms</h3>
              <p className="text-gray-300 mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. 
                Your continued use of our services after changes are posted constitutes acceptance of the new terms.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Contact Information</h3>
              <p className="text-gray-300 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-white/5 rounded-lg p-4 mb-6">
                <p className="text-gray-300"><strong>Email:</strong> legal@ziontechgroup.com</p>
                <p className="text-gray-300"><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p className="text-gray-300"><strong>Address:</strong> San Francisco, CA</p>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Severability</h3>
              <p className="text-gray-300 mb-6">
                If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated 
                to the minimum extent necessary so that these terms will otherwise remain in full force and effect and enforceable.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Entire Agreement</h3>
              <p className="text-gray-300 mb-6">
                These terms constitute the entire agreement between you and Zion Tech Group regarding the use of our services and website, 
                superseding any prior agreements between you and Zion Tech Group relating to your use of our services.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have questions about these terms, don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/privacy"
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
=======
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">11. Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group reserves the right to modify these terms at any time. We will notify users of any material changes by:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Posting updated terms on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying prominent notices on our platform</li>
              </ul>
              <p className="text-gray-300">
                Your continued use of our services after such changes constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 mt-8">
              <h2 className="text-2xl font-bold text-white mb-6">12. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><strong>Email:</strong> <a href="mailto:legal@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">legal@ziontechgroup.com</a></p>
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
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our legal team is available to clarify any terms or answer questions about our services.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
          >
            Contact Legal Team
          </Link>
        </div>
      </section>
    </div>
>>>>>>> 59823368181c8d4f754bc3967926aee3d210664f
  );
};

export default Terms;