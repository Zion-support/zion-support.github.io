import React from 'react';
import {
Helmet
} from 'react-helmet-async';
const Terms: React.FC = () => {,
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - Our terms and conditions for using our services." /><meta name="robots" content="index, follow" /></Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 py-16">",
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-lg text-gray-600 mb-8">
              Last updated: January 2, 2025,
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound ;
                  by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
                <p className="text-gray-600 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's ;
                  website for personal, non-commercial transitory viewing only.
                </p>
                <p className="text-gray-600 mb-4">
                  This is the grant of a license, not a transfer of title, and under this license you may not: </p>,
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
                <p className="text-gray-600 mb-4">
                  We strive to maintain high service availability, but we do not guarantee uninterrupted 
                  access to our services. We reserve the right to modify or discontinue services at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
                <p className="text-gray-600 mb-4">
                  Users are responsible for: </p>,
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Maintaining the confidentiality of their account credentials</li>
                  <li>All activities that occur under their account</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Not using our services for illegal or unauthorized purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-600 mb-4">
                  All content, trademarks, and intellectual property on this website are the property 
                  of Zion Tech Group or its licensors and are protected by copyright and other laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, or due to business 
                  interruption) arising out of the use or inability to use the materials on Zion Tech Group's ;
                  website, even if Zion Tech Group or an authorized representative has been notified orally 
                  or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-600 mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws 
                  of the State of California and you irrevocably submit to the exclusive jurisdiction of 
                  the courts in that State or location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us at: </p>,
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">
                    Email: legal@ziontechgroup.com<br />,
                    Phone: +1 (555) 123-4567<br />,
                    Address: 123 Tech Street, Innovation City, IC 12345,
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;