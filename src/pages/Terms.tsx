import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, Users, Globe, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function Terms() {
  const lastUpdated = "December 2024";

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300 mb-4 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-slate-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 md:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-slate-300 mb-4">
                These Terms of Service ("Terms") govern your use of Zion Tech Group's website, services, and applications (collectively, the "Services"). 
                By accessing or using our Services, you agree to be bound by these Terms.
              </p>
              <p className="text-slate-300">
                If you do not agree to these Terms, please do not use our Services. We reserve the right to modify these Terms at any time.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
              <p className="text-slate-300 mb-4">
                Zion Tech Group provides technology consulting, development, and implementation services including:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
                <li>AI and Machine Learning solutions</li>
                <li>Cloud infrastructure and DevOps services</li>
                <li>Cybersecurity and compliance services</li>
                <li>Digital transformation consulting</li>
                <li>IT infrastructure and support</li>
                <li>Custom software development</li>
              </ul>
            </div>

            {/* User Accounts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts and Registration</h2>
              <p className="text-slate-300 mb-4">
                To access certain Services, you may be required to create an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </div>

            {/* Acceptable Use */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use Policy</h2>
              <p className="text-slate-300 mb-4">
                You agree not to use our Services to:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our Services</li>
                <li>Engage in any fraudulent or deceptive practices</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h2>
              <p className="text-slate-300 mb-4">
                Our Services and their content are protected by intellectual property laws. You retain ownership of content you submit, 
                but grant us a license to use it for service provision.
              </p>
              <p className="text-slate-300">
                We retain all rights to our proprietary technology, trademarks, and service marks.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
              <p className="text-slate-300 mb-4">
                For paid services, you agree to:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
                <li>Pay all fees in accordance with our pricing</li>
                <li>Provide accurate billing information</li>
                <li>Pay applicable taxes</li>
                <li>Maintain valid payment methods</li>
              </ul>
              <p className="text-slate-300">
                Late payments may result in service suspension or termination.
              </p>
            </div>

            {/* Service Level Agreements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">7. Service Level Agreements</h2>
              <p className="text-slate-300 mb-4">
                Our services include:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
                <li>Professional and timely service delivery</li>
                <li>Quality assurance and testing</li>
                <li>Ongoing support and maintenance</li>
                <li>Documentation and training</li>
              </ul>
              <p className="text-slate-300">
                Specific SLAs will be detailed in individual service agreements.
              </p>
            </div>

            {/* Privacy and Data */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">8. Privacy and Data Protection</h2>
              <p className="text-slate-300 mb-4">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, 
                which is incorporated into these Terms by reference.
              </p>
              <p className="text-slate-300">
                We implement appropriate security measures to protect your data and comply with applicable data protection laws.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-slate-300 mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Service interruptions or technical issues</li>
                <li>Third-party actions or content</li>
              </ul>
              <p className="text-slate-300">
                Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">10. Disclaimers</h2>
              <p className="text-slate-300 mb-4">
                Our Services are provided "as is" and "as available" without warranties of any kind. We disclaim all warranties, 
                including but not limited to:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
                <li>Implied warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li>Uninterrupted or error-free service</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
              <p className="text-slate-300">
                You agree to indemnify and hold harmless Zion Tech Group from any claims, damages, or expenses arising from your use 
                of our Services or violation of these Terms.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
              <p className="text-slate-300 mb-4">
                Either party may terminate these Terms with written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
                <li>Your access to Services will cease</li>
                <li>You must pay any outstanding fees</li>
                <li>We will return or destroy your data as agreed</li>
                <li>Surviving provisions will remain in effect</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law and Dispute Resolution</h2>
              <p className="text-slate-300 mb-4">
                These Terms are governed by the laws of Delaware, United States. Any disputes will be resolved through:
              </p>
              <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
                <li>Good faith negotiations</li>
                <li>Mediation if negotiations fail</li>
                <li>Binding arbitration as a last resort</li>
              </ul>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">14. Changes to Terms</h2>
              <p className="text-slate-300">
                We may modify these Terms at any time. We will notify you of significant changes via email or website notice. 
                Continued use of our Services constitutes acceptance of the modified Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
              <p className="text-slate-300 mb-6">
                If you have questions about these Terms, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-slate-700/30 rounded-lg">
                    <contact.icon className="h-5 w-5 text-cyan-400" />
                    <div>
                      <span className="text-slate-400 text-sm">{contact.label}: </span>
                      <a 
                        href={contact.href} 
                        className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center pt-8 border-t border-slate-700">
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
