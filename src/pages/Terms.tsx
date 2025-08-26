import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By using our services, 
              you agree to be bound by these terms.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using the services provided by Zion Tech Group ("we," "our," or "us"), 
                you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-600">
                These Terms of Service ("Terms") govern your use of our website, services, and any 
                related applications (collectively, the "Services").
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Services</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides technology consulting, development, and implementation services, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>AI and machine learning solutions</li>
                <li>Cloud infrastructure and DevOps services</li>
                <li>Cybersecurity consulting and implementation</li>
                <li>Digital transformation consulting</li>
                <li>IT infrastructure design and management</li>
                <li>Custom software development</li>
                <li>Technology strategy and advisory services</li>
              </ul>
              <p className="text-gray-600">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Accounts and Registration</h2>
              <p className="text-gray-600 mb-4">
                To access certain features of our services, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
              <p className="text-gray-600">
                We reserve the right to terminate accounts that violate these terms or for any other reason at our discretion.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Acceptable Use Policy</h2>
              <p className="text-gray-600 mb-4">
                You agree not to use our services to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Attempt to reverse engineer or decompile our software</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-4">
                All content, features, and functionality of our services, including but not limited to text, 
                graphics, logos, icons, images, audio clips, digital downloads, and software, are owned by 
                Zion Tech Group or its licensors and are protected by copyright, trademark, and other 
                intellectual property laws.
              </p>
              <p className="text-gray-600 mb-4">
                You may not:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Copy, reproduce, distribute, or create derivative works</li>
                <li>Modify, adapt, or reverse engineer our software</li>
                <li>Remove or alter copyright or trademark notices</li>
                <li>Use our intellectual property for commercial purposes without permission</li>
              </ul>
              <p className="text-gray-600">
                Any content you submit to our services remains your property, but you grant us a 
                non-exclusive, worldwide, royalty-free license to use, modify, and distribute such content.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. Our collection and use of personal information is 
                governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-gray-600">
                By using our services, you consent to the collection and use of information as described 
                in our Privacy Policy.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Service Level Agreements</h2>
              <p className="text-gray-600 mb-4">
                For certain services, we may provide specific Service Level Agreements (SLAs) that outline 
                performance standards, availability guarantees, and support response times.
              </p>
              <p className="text-gray-600">
                SLAs are provided separately and may be subject to additional terms and conditions.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment terms for our services are as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
                <li>Late payments may incur additional charges</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Prices are subject to change with 30 days' notice</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including but not 
                limited to loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p className="text-gray-600 mb-4">
                Our total liability to you for any claims arising from the use of our services shall 
                not exceed the amount you paid us for the services in the 12 months preceding the claim.
              </p>
              <p className="text-gray-600">
                Some jurisdictions do not allow the exclusion or limitation of liability for consequential 
                or incidental damages, so the above limitation may not apply to you.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-600">
                You agree to indemnify, defend, and hold harmless Zion Tech Group and its officers, 
                directors, employees, agents, and affiliates from and against any claims, damages, 
                losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising 
                from your use of our services or violation of these Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Disclaimers</h2>
              <p className="text-gray-600 mb-4">
                Our services are provided "as is" and "as available" without warranties of any kind, 
                either express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties that the services will be uninterrupted or error-free</li>
                <li>Warranties regarding the accuracy or reliability of any information</li>
                <li>Warranties that defects will be corrected</li>
              </ul>
              <p className="text-gray-600">
                We do not warrant that our services will meet your specific requirements or that the 
                results obtained from using our services will be accurate or reliable.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Termination</h2>
              <p className="text-gray-600 mb-4">
                These Terms are effective until terminated. We may terminate or suspend your access 
                to our services immediately, without prior notice, for any reason, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Non-payment of fees</li>
                <li>At our sole discretion</li>
              </ul>
              <p className="text-gray-600">
                Upon termination, your right to use our services will cease immediately, and we may 
                delete your account and data.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the 
                State of California, without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-600 mb-4">
                Any disputes arising from these Terms or your use of our services shall be resolved 
                through binding arbitration in accordance with the rules of the American Arbitration 
                Association, with the venue in San Francisco, California.
              </p>
              <p className="text-gray-600">
                You agree to waive any right to a jury trial or to participate in a class action lawsuit.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Force Majeure</h2>
              <p className="text-gray-600">
                We shall not be liable for any failure to perform our obligations under these Terms 
                due to circumstances beyond our reasonable control, including but not limited to acts 
                of God, natural disasters, war, terrorism, riots, fire, labor disputes, or government actions.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Severability</h2>
              <p className="text-gray-600">
                If any provision of these Terms is found to be unenforceable or invalid, that provision 
                will be limited or eliminated to the minimum extent necessary so that these Terms will 
                otherwise remain in full force and effect and enforceable.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Entire Agreement</h2>
              <p className="text-gray-600">
                These Terms, together with our Privacy Policy and any other agreements referenced herein, 
                constitute the entire agreement between you and Zion Tech Group regarding the use of our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">17. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of any 
                changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>
              <p className="text-gray-600">
                Your continued use of our services after any changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">18. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> legal@ziontechgroup.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> 123 Tech Street, Innovation District, CA 90210
                </p>
                <p className="text-gray-700">
                  <strong>Legal Department:</strong> legal@ziontechgroup.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Our Terms?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're here to help clarify any questions you may have about our terms of service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <a
              href="mailto:legal@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Email Legal Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;