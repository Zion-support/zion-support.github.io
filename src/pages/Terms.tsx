import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Terms() {
  return (
    <>
      <SEO 
        title="Terms of Service - Zion Tech Group" 
        description="Read Zion Tech Group's terms of service and user agreement for our AI and tech marketplace platform." 
        url="https://ziontechgroup.com/terms"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <GradientHeading className="text-center mb-12">
              Terms of Service
            </GradientHeading>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-zion-gray text-lg leading-relaxed">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="space-y-8">
              <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-zion-gray leading-relaxed">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                <p className="text-zion-gray leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-zion-gray space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
                <p className="text-zion-gray leading-relaxed">
                  The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
                <p className="text-zion-gray leading-relaxed">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Privacy Policy</h2>
                <p className="text-zion-gray leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                </p>
              </section>

              <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
                <p className="text-zion-gray leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 text-zion-gray">
                  <p>Email: legal@ziontechgroup.com</p>
                  <p>Address: Zion Tech Group, 123 Innovation Drive, Tech City, TC 12345</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}