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
          <div className="text-center mb-16">
            <GradientHeading>Terms of Service</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Please read these terms carefully before using our platform
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-zion-slate-light mb-4">
                By accessing and using Zion Tech Group's platform, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              <p className="text-zion-slate-light">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-zion-slate-light mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Zion Tech Group's website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-zion-slate-light mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="text-zion-slate-light list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on Zion Tech Group's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p className="text-zion-slate-light mb-4">
                The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
              <p className="text-zion-slate-light mb-4">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Privacy Policy</h2>
              <p className="text-zion-slate-light mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.
              </p>
            </div>

            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="text-zion-slate-light space-y-2">
                <p>Email: legal@ziontechgroup.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Tech Street, Innovation City, IC 12345</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
