import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database,
  Users,
  Globe,
  Mail,
  Phone
} from 'lucide-react';

export default function Privacy() {
  const lastUpdated = 'January 15, 2025';

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <Shield className="w-5 h-5" />
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
                <Shield className="w-6 h-6 text-zion-cyan mr-3" />
                Introduction
              </h2>
              <p className="text-zion-slate-light mb-6">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Database className="w-6 h-6 text-zion-cyan mr-3" />
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
              <p className="text-zion-slate-light mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Company name and job title</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
                <li>Resume, portfolio, or professional credentials</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
              <p className="text-zion-slate-light mb-4">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-6 h-6 text-zion-cyan mr-3" />
                How We Use Your Information
              </h2>
              <p className="text-zion-slate-light mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                <li>Providing and improving our services</li>
                <li>Processing transactions and payments</li>
                <li>Communicating with you about our services</li>
                <li>Matching talent with opportunities</li>
                <li>Analyzing website usage and performance</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 text-zion-cyan mr-3" />
                Information Sharing and Disclosure
              </h2>
              <p className="text-zion-slate-light mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To facilitate marketplace connections between talent and clients</li>
                <li>With service providers who assist in our operations</li>
                <li>To comply with legal requirements or protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-6 h-6 text-zion-cyan mr-3" />
                Data Security
              </h2>
              <p className="text-zion-slate-light mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-6 h-6 text-zion-cyan mr-3" />
                International Data Transfers
              </h2>
              <p className="text-zion-slate-light mb-6">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-6 h-6 text-zion-cyan mr-3" />
                Your Rights and Choices
              </h2>
              <p className="text-zion-slate-light mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-zion-slate-light mb-6 space-y-2">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Database className="w-6 h-6 text-zion-cyan mr-3" />
                Cookies and Tracking Technologies
              </h2>
              <p className="text-zion-slate-light mb-6">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences, though disabling certain cookies may affect website functionality.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Users className="w-6 h-6 text-zion-cyan mr-3" />
                Children's Privacy
              </h2>
              <p className="text-zion-slate-light mb-6">
                Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you believe we have collected such information, please contact us immediately.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-zion-cyan mr-3" />
                Changes to This Privacy Policy
              </h2>
              <p className="text-zion-slate-light mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="w-6 h-6 text-zion-cyan mr-3" />
                Contact Us
              </h2>
              <p className="text-zion-slate-light mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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

      {/* CTA Section */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have Questions About Privacy?
          </h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            We're committed to transparency and protecting your privacy. If you have any concerns or need clarification about our privacy practices, don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform">
                Contact Us
              </button>
            </Link>
            <Link to="/terms">
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors">
                View Terms of Service
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
