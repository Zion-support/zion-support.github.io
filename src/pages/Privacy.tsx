import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Zion Tech Group handles your data and protects your privacy."
        canonical="https://ziontechgroup.com/privacy"
      />
      <Header />
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database,
  CheckCircle,
  Clock
} from 'lucide-react';

const Privacy: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <SEO 
        title="Privacy Policy - Zion Tech Group" 
        description="Learn about how Zion Tech Group collects, uses, and protects your personal information." 
        keywords="privacy policy, data protection, Zion Tech Group, personal information"
        canonical="https://ziontechgroup.com/privacy"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Privacy Policy</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Your privacy is important to us. This page explains how we collect,
              use, and safeguard your information.
            </p>
          </div>
          <div className="space-y-6 text-zion-slate-light text-lg">
            <p>
              We collect personal information you provide when creating an
              account or using our services. This may include your name, email,
              and any other details required to deliver our marketplace
              features.
            </p>
            <p>
              Zion Tech Group uses this data solely to operate and improve our
              platform. We do not sell your personal information to third
              parties.
            </p>
            <p>
              If you have questions about our privacy practices, please contact
              us at
              {" "}
              <a
                href="mailto:support@ziontechgroup.com"
                className="text-zion-cyan hover:underline"
              >
                support@ziontechgroup.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-zion-slate-light mb-4">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you visit our website, use our services, 
                or interact with us in any way.
              </p>
              <p className="text-zion-slate-light">
                By using our services, you consent to the data practices described in this policy. If you do not agree with 
                our policies and practices, please do not use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
              <p className="text-zion-slate-light mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4 mb-4">
                <li>Name and contact information (email, phone, address)</li>
                <li>Company and job title information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
                <li>Project requirements and specifications</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mb-3">Automatically Collected Information</h3>
              <p className="text-zion-slate-light mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4 mb-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website information</li>
              </ul>

              <h3 className="text-lg font-semibold text-white mb-3">Cookies and Tracking Technologies</h3>
              <p className="text-zion-slate-light">
                We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, 
                and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-zion-slate-light mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and payments</li>
                <li>Communicating with you about our services</li>
                <li>Improving our website and services</li>
                <li>Providing customer support</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and security threats</li>
              </ul>
            </div>

            {/* Information Sharing and Disclosure */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-zion-slate-light mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="text-zion-slate-light mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4 mb-4">
                <li>Unauthorized access and disclosure</li>
                <li>Data alteration and destruction</li>
                <li>Data loss and corruption</li>
                <li>Security breaches and cyber attacks</li>
              </ul>
              <p className="text-zion-slate-light">
                These measures include encryption, secure servers, access controls, and regular security assessments. 
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
              <p className="text-zion-slate-light mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, including:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4 mb-4">
                <li>Providing our services to you</li>
                <li>Complying with legal obligations</li>
                <li>Resolving disputes and enforcing agreements</li>
                <li>Improving our services</li>
              </ul>
              <p className="text-zion-slate-light">
                When we no longer need your information, we will securely delete or anonymize it in accordance with applicable laws.
              </p>
            </div>

            {/* Your Rights and Choices */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights and Choices</h2>
              <p className="text-zion-slate-light mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4 mb-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Restriction:</strong> Request restriction of processing</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
              </ul>
              <p className="text-zion-slate-light">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            {/* Marketing Communications */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Marketing Communications</h2>
              <p className="text-zion-slate-light mb-4">
                We may send you marketing communications about our services, industry updates, and company news. 
                You can opt out of these communications at any time by:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4 mb-4">
                <li>Clicking the unsubscribe link in our emails</li>
                <li>Updating your communication preferences in your account</li>
                <li>Contacting us directly</li>
              </ul>
              <p className="text-zion-slate-light">
                Even if you opt out of marketing communications, we may still send you important service-related messages.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Third-Party Links</h2>
              <p className="text-zion-slate-light">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy 
                practices of these third parties. We encourage you to review their privacy policies before providing any 
                personal information.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Children's Privacy</h2>
              <p className="text-zion-slate-light">
                Our services are not intended for children under the age of 13. We do not knowingly collect personal 
                information from children under 13. If you believe we have collected information from a child under 13, 
                please contact us immediately.
              </p>
            </div>

            {/* International Data Transfers */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. International Data Transfers</h2>
              <p className="text-zion-slate-light">
                Your personal information may be transferred to and processed in countries other than your own. 
                We ensure that such transfers comply with applicable data protection laws and implement appropriate 
                safeguards to protect your information.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Policy</h2>
              <p className="text-zion-slate-light mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. 
                We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light space-y-2 ml-4 mb-4">
                <li>Posting the updated policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Updating the "Last updated" date</li>
              </ul>
              <p className="text-zion-slate-light">
                Your continued use of our services after any changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-zion-slate-light">
                  <strong>Zion Tech Group</strong><br />
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709<br />
                  Email: <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">kleber@ziontechgroup.com</a><br />
                  Phone: <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light">+1 (302) 464-0950</a><br />
                  Data Protection Officer: <a href="mailto:dpo@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">dpo@ziontechgroup.com</a>
                </p>
              </div>
            </div>

            {/* Compliance Information */}
            <div className="bg-zion-cyan/10 border border-zion-cyan/20 rounded-lg p-6">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-zion-cyan mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Compliance</h3>
                  <p className="text-zion-slate-light mb-3">
                    We are committed to complying with applicable data protection laws and regulations, including:
                  </p>
                  <ul className="list-disc list-inside text-zion-slate-light space-y-1 ml-4">
                    <li>General Data Protection Regulation (GDPR)</li>
                    <li>California Consumer Privacy Act (CCPA)</li>
                    <li>Health Insurance Portability and Accountability Act (HIPAA)</li>
                    <li>Other applicable federal and state privacy laws</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            If you have any questions about our privacy practices or need to exercise your data rights, 
            our privacy team is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-white text-zion-cyan hover:bg-zion-slate-light px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
            <a 
              href="mailto:dpo@ziontechgroup.com"
              className="border border-white text-white hover:bg-white hover:text-zion-cyan px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email DPO
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
