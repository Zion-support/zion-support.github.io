import React from 'react';
import { SEO } from '@/components/SEO';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-zion-blue pt-24 pb-20">
      <SEO 
        title="Privacy Policy - Zion Tech Group" 
        description="Learn about how Zion Tech Group collects, uses, and protects your personal information." 
        keywords="privacy policy, data protection, Zion Tech Group, personal information"
        canonical="https://ziontechgroup.com/privacy"
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
            Your privacy is important to us. This page explains how we collect,
            use, and safeguard your information.
          </p>
          <p className="text-zion-slate-light text-sm mt-4">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-zion-slate-light mb-4">
              Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
            </p>
            <p className="text-zion-slate-light">
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-zion-cyan mb-3">2.1 Personal Information</h3>
            <p className="text-zion-slate-light mb-4">
              We may collect personal information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Professional information (resume, skills, work history)</li>
              <li>Account credentials and profile information</li>
              <li>Communication preferences and marketing opt-ins</li>
              <li>Payment and billing information</li>
            </ul>

            <h3 className="text-xl font-semibold text-zion-cyan mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-zion-slate-light mb-4">
              We automatically collect certain information when you use our services:
            </p>
            <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, time spent, features used)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Log files and analytics data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-zion-slate-light mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
              <li>Providing and maintaining our services</li>
              <li>Processing transactions and managing accounts</li>
              <li>Communicating with you about our services</li>
              <li>Improving our platform and user experience</li>
              <li>Ensuring security and preventing fraud</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-zion-slate-light mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers who assist us in operating our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-zion-slate-light mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
              <li>Encryption of sensitive data</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure data transmission protocols</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
            <p className="text-zion-slate-light mb-4">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
              <li>Access and review your personal information</li>
              <li>Update or correct inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Control cookie preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="text-zion-slate-light mb-4">
              We use cookies and similar technologies to enhance your experience on our platform. These technologies help us:
            </p>
            <ul className="list-disc list-inside text-zion-slate-light mb-4 space-y-2 ml-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertisements</li>
              <li>Improve our services and user experience</li>
            </ul>
            <p className="text-zion-slate-light">
              You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Services</h2>
            <p className="text-zion-slate-light mb-4">
              Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Data Retention</h2>
            <p className="text-zion-slate-light mb-4">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
            <p className="text-zion-slate-light mb-4">
              Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">11. Children's Privacy</h2>
            <p className="text-zion-slate-light mb-4">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Policy</h2>
            <p className="text-zion-slate-light mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">13. Contact Us</h2>
            <p className="text-zion-slate-light mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg p-6">
              <p className="text-zion-slate-light mb-2">
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="text-zion-cyan hover:underline"
                >
                  privacy@ziontechgroup.com
                </a>
              </p>
              <p className="text-zion-slate-light mb-2">
                <strong>Phone:</strong> +1 (302) 464-0950
              </p>
              <p className="text-zion-slate-light">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
