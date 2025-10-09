import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Scale, Shield, CreditCard, AlertTriangle } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Last updated: January 2025
          </p>
          
          <div className="cyber-card p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-300">
                By accessing and using our services, you accept and agree to be bound by the terms and
                provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Scale className="w-6 h-6 mr-3 text-cyan-400" />
                Use License
              </h2>
              <p className="text-gray-300 mb-4">
                Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on our website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Service Availability
              </h2>
              <p className="text-gray-300">
                We strive to maintain high service availability but do not guarantee uninterrupted access.
                We reserve the right to modify, suspend, or discontinue any part of our services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <CreditCard className="w-6 h-6 mr-3 text-cyan-400" />
                Payment Terms
              </h2>
              <p className="text-gray-300 mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>All fees are due in advance unless otherwise specified</li>
                <li>Payment is required before service delivery</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Prices are subject to change with 30 days notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-cyan-400" />
                Limitation of Liability
              </h2>
              <p className="text-gray-300">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use
                the materials on our website, even if we or our authorized representative has been notified orally or in writing
                of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Privacy Policy
              </h2>
              <p className="text-gray-300">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services,
                to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Governing Law
              </h2>
              <p className="text-gray-300">
                These terms and conditions are governed by and construed in accordance with the laws of the United States
                and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-300">
                We reserve the right to revise these terms of service at any time without notice. By using this service,
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-300">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-cyan-400">
                <p>Email: legal@ziontechgroup.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: San Francisco, CA</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;