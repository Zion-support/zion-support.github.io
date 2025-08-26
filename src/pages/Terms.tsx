import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/website-audit-and-enhancement-98df

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
=======
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service — Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Learn about the terms and conditions governing our services." />
        <meta property="og:title" content="Terms of Service — Zion Tech Group" />
        <meta property="og:description" content="Terms of Service for Zion Tech Group. Learn about the terms and conditions governing our services." />
        <meta property="og:url" content="https://ziontechgroup.com/terms" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Service
              </span>
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                <p className="text-gray-300 mb-4">
                  These Terms of Service ("Terms") govern your use of Zion Tech Group's services, including our website and technology solutions. By accessing or using our Services, you agree to be bound by these Terms.
                </p>
=======
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              These terms and conditions govern your use of Zion Tech Group's services and website.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
=======
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              These terms and conditions govern your use of Zion Tech Group's services and website.
            </p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Use License</h3>
              <p className="text-gray-300 mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>

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
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Intellectual Property</h3>
              <p className="text-gray-300 mb-6">
                The content on this website, including but not limited to text, graphics, logos, images, and software, is the property 
                of Zion Tech Group and is protected by copyright laws. You may not reproduce, distribute, or create derivative works 
                without our express written consent.
              </p>
              <p className="text-gray-300 mb-6">
                For custom development projects, intellectual property rights will be specified in the individual service agreement. 
                Typically, custom code developed for clients becomes their property upon full payment.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Confidentiality</h3>
              <p className="text-gray-300 mb-6">
                We understand the sensitive nature of business information and maintain strict confidentiality standards. We will not 
                disclose any confidential information shared with us during the course of our engagement, except as required by law 
                or with your express written consent.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Limitation of Liability</h3>
              <p className="text-gray-300 mb-6">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable 
                for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, 
                data, use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Warranty Disclaimer</h3>
              <p className="text-gray-300 mb-6">
                The information on this website is provided on an "as is" basis. Zion Tech Group makes no warranties, expressed or implied, 
                and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of 
                merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Termination</h3>
              <p className="text-gray-300 mb-6">
                Either party may terminate the service agreement with written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>We will complete any work in progress up to the termination date</li>
                <li>You will pay for services rendered up to the termination date</li>
                <li>We will return any materials or data belonging to you</li>
                <li>Confidentiality obligations will continue to apply</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Governing Law</h3>
              <p className="text-gray-300 mb-6">
                These terms shall be governed by and construed in accordance with the laws of the State of California, United States, 
                without regard to its conflict of law provisions. Any disputes arising from these terms or our services will be resolved 
                through binding arbitration in San Francisco, California.
              </p>

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
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Services Description</h2>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group provides technology consulting, AI solutions, cloud services, cybersecurity, and digital transformation services. We reserve the right to modify or discontinue any service at any time.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
                <p className="text-gray-300 mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain the security of your account</li>
                </ul>
              </div>

<<<<<<< HEAD
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
                <p className="text-gray-300 mb-4">
                  Payment for our services is due according to the terms specified in your service agreement. We offer various payment plans and can customize terms for enterprise clients.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                <p className="text-gray-300 mb-4">
                  All content, features, and functionality on our website and services are owned by Zion Tech Group and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                <p className="text-gray-300 mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                <p className="text-gray-300 mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States.
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300">
                    <strong>Email:</strong> legal@ziontechgroup.com<br />
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
=======
                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Service Description</h3>
                <p className="text-gray-300 mb-6">
                  Zion Tech Group provides technology consulting, development, and digital transformation services including but not limited to:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• AI Solutions and Machine Learning</li>
                  <li>• Cloud Migration and DevOps</li>
                  <li>• Cybersecurity and IT Infrastructure</li>
                  <li>• Digital Transformation Consulting</li>
                  <li>• Custom Software Development</li>
                  <li>• Technology Strategy and Planning</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Service Terms</h3>
                <p className="text-gray-300 mb-4">When you engage our services, the following terms apply:</p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Services are provided on an "as-is" basis</li>
                  <li>• Project timelines and deliverables are estimates and may vary</li>
                  <li>• Payment terms are specified in individual service agreements</li>
                  <li>• Intellectual property rights are governed by separate agreements</li>
                  <li>• Confidentiality obligations apply to all engagements</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">User Responsibilities</h3>
                <p className="text-gray-300 mb-4">As a user of our services, you agree to:</p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Provide accurate and complete information</li>
                  <li>• Maintain the security of your account credentials</li>
                  <li>• Use services only for lawful purposes</li>
                  <li>• Not interfere with service operation</li>
                  <li>• Comply with all applicable laws and regulations</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Intellectual Property</h3>
                <p className="text-gray-300 mb-6">
                  All content, features, and functionality on this website, including but not limited to text, graphics, logos, and software, are owned by Zion Tech Group and are protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Confidentiality</h3>
                <p className="text-gray-300 mb-6">
                  We maintain strict confidentiality regarding client information and project details. All proprietary and confidential information shared with us is protected and will not be disclosed to third parties without explicit consent, except as required by law.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Limitation of Liability</h3>
                <p className="text-gray-300 mb-6">
                  Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Warranty Disclaimer</h3>
                <p className="text-gray-300 mb-6">
                  Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Termination</h3>
                <p className="text-gray-300 mb-6">
                  Either party may terminate this agreement at any time with written notice. Upon termination:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• All outstanding obligations must be fulfilled</li>
                  <li>• Access to services will be discontinued</li>
                  <li>• Confidentiality obligations will continue to apply</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Governing Law</h3>
                <p className="text-gray-300 mb-6">
                  These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of San Francisco County, California.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Changes to Terms</h3>
                <p className="text-gray-300 mb-6">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after such changes constitutes acceptance of the modified terms.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Entire Agreement</h3>
                <p className="text-gray-300 mb-6">
                  These terms constitute the entire agreement between you and Zion Tech Group regarding the use of our services, superseding any prior agreements between you and Zion Tech Group relating to your use of our services.
                </p>
              </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
            </div>
          </div>
        </div>
      </section>
    </div>
=======
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us if you need clarification on any of our terms and conditions.
            </p>
            <a
              href="mailto:legal@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Legal Team
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

export default Terms;