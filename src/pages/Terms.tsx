import React from 'react';
import SEO from "@/components/SEO";
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
          <div className="text-center mb-16">
            <GradientHeading>Terms of Service</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
              <p className="text-zion-slate-light leading-relaxed">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">2. Use License</h2>
              <p className="text-zion-slate-light leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on the website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">3. Disclaimer</h2>
              <p className="text-zion-slate-light leading-relaxed">
                The materials on our website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">4. Limitations</h2>
              <p className="text-zion-slate-light leading-relaxed">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if Zion Tech Group or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">5. Privacy Policy</h2>
              <p className="text-zion-slate-light leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">6. Contact Information</h2>
              <p className="text-zion-slate-light leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-zion-slate-light">
                <p>Email: legal@ziontechgroup.com</p>
                <p>Address: Zion Tech Group, Legal Department</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}