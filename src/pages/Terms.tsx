import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Service
              </span>
            </h1>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;