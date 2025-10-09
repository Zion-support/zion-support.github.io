import React from 'react';
<<<<<<< HEAD
=======
import { FileText, Scale, Shield, Phone, Mail } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-d933
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
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
              <h2 className="text-2xl font-bold text-white mb-4">
                Payment Terms
              </h2>
              <p className="text-gray-300 mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>All fees are due in advance unless otherwise agreed</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Late payments may result in service suspension</li>
                <li>Prices are subject to change with 30 days notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-300">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                to use our services, even if we have been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+13024640950"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  kleber@ziontechgroup.com
                </a>
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
