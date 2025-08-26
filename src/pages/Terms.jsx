import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  Users, 
  Globe,
  Mail,
  Phone,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export default function Terms() {
  const lastUpdated = 'January 15, 2025';

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. By using Zion Tech Group, you agree to these terms.
          </p>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <FileText className="w-5 h-5" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-zion-blue-dark/50 rounded-lg border border-zion-cyan/20 p-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 text-zion-cyan mr-3" />
                Agreement to Terms
              </h2>
              <p className="text-zion-slate-light mb-6">
                By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 text-zion-cyan mr-3" />
                Description of Service
              </h2>
              <p className="text-zion-slate-light mb-6">
                Zion Tech Group provides a marketplace platform connecting talented professionals with innovative companies. Our services include AI solutions, IT services, talent matching, and technology consulting. We facilitate connections but are not directly involved in the transactions between users.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-zion-cyan mr-3" />
                User Accounts and Responsibilities
              </h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Account Creation</h3>
              <p className="text-zion-slate-light mb-4">
                To access certain features, you must create an account. You agree to provide accurate, current, and complete information and keep your account credentials secure.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">User Conduct</h3>
              <p className="text-zion-slate-light mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Use our services for illegal or fraudulent purposes</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-6 h-6 text-zion-cyan mr-3" />
                Marketplace Rules
              </h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">For Talent/Service Providers</h3>
              <p className="text-zion-slate-light mb-4">
                When offering services through our platform:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                <li>Provide accurate and truthful information about your skills and experience</li>
                <li>Deliver services as promised and within agreed timelines</li>
                <li>Maintain professional standards and ethical conduct</li>
                <li>Respect client confidentiality and intellectual property</li>
                <li>Resolve disputes professionally and in good faith</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">For Clients</h3>
              <p className="text-zion-slate-light mb-4">
                When hiring through our platform:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                <li>Provide clear project requirements and expectations</li>
                <li>Pay for services as agreed upon</li>
                <li>Provide timely feedback and communication</li>
                <li>Respect the work and intellectual property of service providers</li>
                <li>Resolve disputes professionally and in good faith</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-zion-cyan mr-3" />
                Payment and Billing
              </h2>
              <p className="text-zion-slate-light mb-6">
                Payment terms are agreed upon between users. Zion Tech Group may facilitate payments but is not responsible for payment disputes. We reserve the right to charge service fees as outlined in our pricing structure.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-zion-cyan mr-3" />
                Dispute Resolution
              </h2>
              <p className="text-zion-slate-light mb-6">
                We encourage users to resolve disputes directly. If resolution cannot be reached, our support team may assist in mediation. For legal disputes, users agree to resolve issues through appropriate legal channels.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-zion-cyan mr-3" />
                Intellectual Property
              </h2>
              <p className="text-zion-slate-light mb-6">
                Users retain ownership of their intellectual property. By using our services, you grant us a limited license to use your content for platform operation. We respect intellectual property rights and expect users to do the same.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-6 h-6 text-zion-cyan mr-3" />
                Privacy and Data Protection
              </h2>
              <p className="text-zion-slate-light mb-6">
                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-zion-cyan mr-3" />
                Limitation of Liability
              </h2>
              <p className="text-zion-slate-light mb-6">
                Zion Tech Group provides a platform for connecting users but is not responsible for the quality, safety, or legality of services provided by users. We are not liable for indirect, incidental, or consequential damages arising from your use of our services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-zion-cyan mr-3" />
                Indemnification
              </h2>
              <p className="text-zion-slate-light mb-6">
                You agree to indemnify and hold harmless Zion Tech Group from any claims, damages, or expenses arising from your use of our services or violation of these terms.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 text-zion-cyan mr-3" />
                Modifications to Terms
              </h2>
              <p className="text-zion-slate-light mb-6">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of modified terms.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-6 h-6 text-zion-cyan mr-3" />
                Governing Law
              </h2>
              <p className="text-zion-slate-light mb-6">
                These terms are governed by the laws of the State of Delaware, United States. Any disputes shall be resolved in the courts of Delaware, unless otherwise agreed upon.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 text-zion-cyan mr-3" />
                Contact Information
              </h2>
              <p className="text-zion-slate-light mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-zion-blue-dark/30 p-4 rounded-lg border border-zion-cyan/20">
                <div className="space-y-2 text-zion-slate-light">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-zion-cyan" />
                    <span>Email: kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-zion-cyan" />
                    <span>Phone: +1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-zion-cyan" />
                    <span>Address: 364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Summary */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Key Points Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 text-zion-cyan mr-2" />
                What You Can Do
              </h3>
              <ul className="space-y-2 text-zion-slate-light text-sm">
                <li>• Use our platform to connect with talent or clients</li>
                <li>• Access our AI and technology services</li>
                <li>• Build professional relationships</li>
                <li>• Access learning and development resources</li>
              </ul>
            </div>
            
            <div className="bg-zion-blue-dark/50 p-6 rounded-lg border border-zion-cyan/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 text-zion-cyan mr-2" />
                What You Cannot Do
              </h3>
              <ul className="space-y-2 text-zion-slate-light text-sm">
                <li>• Violate laws or regulations</li>
                <li>• Infringe on intellectual property</li>
                <li>• Use services for illegal purposes</li>
                <li>• Interfere with platform operations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            By using our services, you agree to these terms. If you have any questions or concerns, please don't hesitate to reach out to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform">
                Contact Support
              </button>
            </Link>
            <Link to="/privacy">
              <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors">
                View Privacy Policy
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
