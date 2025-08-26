import React from 'react';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
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
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group provides technology consulting, AI solutions, cloud services, 
                cybersecurity, and digital transformation services. We reserve the right to modify, 
                suspend, or discontinue any part of our services at any time.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Report any security vulnerabilities you discover</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content, features, and functionality of our services are owned by Zion Tech Group 
                and are protected by international copyright, trademark, and other intellectual property laws. 
                You may not reproduce, distribute, or create derivative works without our express written consent.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                In no event shall Zion Tech Group be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including without limitation, loss of profits, data, 
                use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Privacy and Data Protection</h2>
              <p className="text-gray-300 mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of our services, to understand our practices regarding the collection and use 
                of your information.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice 
                or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These Terms shall be interpreted and governed by the laws of the United States, 
                without regard to its conflict of law provisions.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> legal@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (302) 464-0950<br />
                  <strong>Address:</strong> Zion Tech Group, Legal Department
                </p>
              </div>
            </div>
            
            <div className="text-center pt-8 space-x-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/privacy"
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;