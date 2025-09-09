import React from 'react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Zion Tech Group handles your data and protects your privacy."
        canonical="https://ziontechgroup.com/privacy"
      />
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="mt-4 text-gray-300 text-xl max-w-3xl mx-auto">
              Your privacy is important to us. This page explains how we
              collect, use, and safeguard your information.
            </p>
          </div>
          <div className="space-y-6 text-gray-300 text-lg max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p>
                We collect personal information you provide when creating an
                account or using our services. This may include your name, email,
                and other details required to deliver our marketplace features.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p>
                Zion Tech Group uses this data solely to operate and improve our
                platform. We do not sell your personal information to third
                parties.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your
                personal information. All data is encrypted and stored securely.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about our privacy practices, please contact
                us at{' '}
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-blue-400 hover:underline"
                >
                  support@ziontechgroup.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
