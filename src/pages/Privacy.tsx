<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
=======
import { AppLayout } from "@/layout/AppLayout";
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { AppLayout } from "@/layout";
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5

const Privacy: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
=======
import { Helmet } from 'react-helmet-async';

const Privacy: React.FC = () => {
  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>Privacy Policy — Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta property="og:title" content="Privacy Policy — Zion Tech Group" />
        <meta property="og:description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta property="og:url" content="https://ziontechgroup.com/privacy" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
=======
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
    <AppLayout>
      <SEO
        title="Privacy Policy | Zion Tech Group"
        description="Learn how Zion Tech Group handles your data and protects your privacy."
        canonical="https://ziontechgroup.com/privacy"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5
          <div className="text-center mb-16">
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Policy
              </span>
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we protect and handle your personal information
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Contact us through our website forms</li>
                  <li>Request a quote or consultation</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Apply for employment opportunities</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Communicate with you about our services</li>
                  <li>Send you marketing materials (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
=======
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
              </p>
              <p className="text-gray-600">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Company name and job title</li>
                <li>Information about your business needs and requirements</li>
                <li>Communication preferences</li>
                <li>Resume or CV information (for job applications)</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-600 mb-4">
                When you visit our website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">2.3 Cookies and Tracking Technologies</h3>
              <p className="text-gray-600">
                We use cookies and similar tracking technologies to enhance your experience, analyze website usage, and provide personalized content. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Providing and improving our services</li>
                <li>Communicating with you about our services</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Sending newsletters and marketing communications (with your consent)</li>
                <li>Analyzing website usage and improving user experience</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and security threats</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="text-gray-600">
                However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="text-gray-600">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-600">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600">
                Our services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Third-Party Links</h2>
              <p className="text-gray-600">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@ziontechgroup.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> 123 Tech Street, Innovation District, CA 90210
                </p>
                <p className="text-gray-700">
                  <strong>Data Protection Officer:</strong> dpo@ziontechgroup.com
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
                </p>
              </div>

<<<<<<< HEAD
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-gray-300 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
                <p className="text-gray-300 mb-6">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Contact us through our website or email</li>
                  <li>• Request a quote or consultation</li>
                  <li>• Sign up for our newsletter</li>
                  <li>• Apply for employment</li>
                  <li>• Use our services</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Types of Information</h3>
                <p className="text-gray-300 mb-6">
                  The information we collect may include:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Name and contact information (email, phone, address)</li>
                  <li>• Company information and job title</li>
                  <li>• Project requirements and technical specifications</li>
                  <li>• Communication preferences</li>
                  <li>• Resume and employment history (for job applicants)</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">How We Use Your Information</h3>
                <p className="text-gray-300 mb-6">
                  We use the information we collect to:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Provide and improve our services</li>
                  <li>• Communicate with you about projects and services</li>
                  <li>• Send newsletters and marketing communications (with your consent)</li>
                  <li>• Process job applications</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Protect our rights and prevent fraud</li>
                </ul>

<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">How We Use Your Information</h3>
              <p className="text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you relevant information about our services</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Information Sharing</h3>
              <p className="text-gray-300 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Data Security</h3>
              <p className="text-gray-300 mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
=======
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. California Privacy Rights</h2>
              <p className="text-gray-600 mb-4">
                California residents have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Right to know what personal information is collected and how it's used</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>
              <p className="text-gray-600">
                To exercise these rights, please contact us using the information provided above.
>>>>>>> origin/cursor/website-audit-and-enhancement-cf0c
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>
>>>>>>> origin/cursor/website-audit-and-enhancement-98df

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-gray-300 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

<<<<<<< HEAD
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300">
                    <strong>Email:</strong> privacy@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Address:</strong> San Francisco, CA
                  </p>
                </div>
              </div>

              <div className="text-center pt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">14. GDPR Compliance (EU Users)</h2>
              <p className="text-gray-600 mb-4">
                For users in the European Union, we process your personal information in accordance with the General Data Protection Regulation (GDPR). You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Request access to your personal data</li>
                <li>Request rectification of inaccurate data</li>
                <li>Request erasure of your personal data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Object to processing</li>
                <li>Withdraw consent</li>
                <li>Lodge a complaint with a supervisory authority</li>
=======
import { Shield, Lock, Eye, Database, Users, Globe, Mail, Phone } from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  const dataCategories = [
    {
      icon: Users,
      title: "Personal Information",
      description: "Name, email address, phone number, company name, and job title",
      examples: ["Contact forms", "Newsletter signups", "Service inquiries"]
    },
    {
      icon: Database,
      title: "Technical Data",
      description: "IP address, browser type, device information, and usage analytics",
      examples: ["Website visits", "Service usage", "Performance monitoring"]
    },
    {
      icon: Globe,
      title: "Business Information",
      description: "Company details, project requirements, and service preferences",
      examples: ["Service consultations", "Project proposals", "Client communications"]
    }
  ];

  const dataUsage = [
    {
      icon: Mail,
      title: "Communication",
      description: "Respond to inquiries, provide support, and send important updates"
    },
    {
      icon: Shield,
      title: "Service Delivery",
      description: "Provide requested services, manage accounts, and ensure quality"
    },
    {
      icon: Users,
      title: "Improvement",
      description: "Enhance our services, develop new features, and optimize performance"
    }
  ];

  const dataProtection = [
    {
      icon: Lock,
      title: "Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard protocols"
    },
    {
      icon: Shield,
      title: "Access Control",
      description: "Strict access controls and authentication measures protect your data"
    },
    {
      icon: Eye,
      title: "Monitoring",
      description: "Continuous monitoring and regular security audits ensure data protection"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Privacy is Our
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Priority</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {lastUpdated}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Privacy Policy Overview</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website, 
                use our services, or interact with us in any way.
              </p>
              <p className="text-lg text-gray-300">
                By using our services, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Information We Collect
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We collect various types of information to provide and improve our services while ensuring your privacy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataCategories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-4">{category.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-green-400">Examples:</p>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {category.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Use Your Information
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We use the information we collect for specific, legitimate business purposes to serve you better.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataUsage.map((usage, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <usage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{usage.title}</h3>
                <p className="text-gray-300">{usage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Protect Your Data
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We implement comprehensive security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataProtection.map((protection, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <protection.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{protection.title}</h3>
                <p className="text-gray-300">{protection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policy Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Information Sharing */}
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Information Sharing and Disclosure</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except in the following circumstances:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>With your explicit consent</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>To comply with legal obligations or court orders</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>To protect our rights, property, or safety</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>With trusted service providers who assist in operating our business</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Access:</strong> Request a copy of the personal information we hold about you</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Correction:</strong> Request correction of inaccurate or incomplete information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Deletion:</strong> Request deletion of your personal information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Portability:</strong> Request transfer of your data to another service provider</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Objection:</strong> Object to processing of your personal information</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cookies and Tracking */}
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Essential Cookies:</strong> Required for basic website functionality</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Functional Cookies:</strong> Remember your preferences and settings</span>
                </li>
              </ul>
              <p className="text-gray-300 mt-4">
                You can control cookie settings through your browser preferences. However, disabling certain cookies 
                may affect website functionality.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Data Retention</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy:
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Active Accounts:</strong> For the duration of your account and service relationship</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Marketing Communications:</strong> Until you opt out or request deletion</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span><strong>Legal Requirements:</strong> As required by applicable laws and regulations</span>
                </li>
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
              </ul>
=======
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, EyeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-green-600/20 rounded-full">
                <ShieldCheckIcon className="h-12 w-12 text-green-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              At Zion Tech Group, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This policy outlines how we collect, use, and safeguard your data.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <EyeIcon className="h-8 w-8 text-blue-400 mr-3" />
                Information We Collect
              </h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Personal Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Name and contact information (email, phone number)</li>
                  <li>• Company name and job title</li>
                  <li>• Business requirements and project details</li>
                  <li>• Communication preferences</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-4 text-blue-400 mt-6">Technical Information</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• IP address and device information</li>
                  <li>• Browser type and version</li>
                  <li>• Usage patterns and analytics data</li>
                  <li>• Cookies and similar technologies</li>
                </ul>
              </div>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <LockClosedIcon className="h-8 w-8 text-green-400 mr-3" />
                How We Use Your Information
              </h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <ul className="space-y-3 text-gray-300">
                  <li>• Provide and improve our services</li>
                  <li>• Communicate with you about our services</li>
                  <li>• Process your requests and transactions</li>
                  <li>• Send you relevant updates and newsletters</li>
                  <li>• Analyze usage patterns to enhance user experience</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Protect against fraud and security threats</li>
                </ul>
              </div>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Information Sharing and Disclosure</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information only in the following circumstances:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• With your explicit consent</li>
                  <li>• To comply with legal requirements</li>
                  <li>• To protect our rights and safety</li>
                  <li>• With trusted service providers who assist in our operations</li>
                  <li>• In connection with a business transfer or merger</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Data Security</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security audits and assessments</li>
                  <li>• Access controls and authentication measures</li>
                  <li>• Employee training on data protection</li>
                  <li>• Incident response and breach notification procedures</li>
                </ul>
              </div>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Data Retention</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  We retain your personal information only for as long as necessary to fulfill the purposes 
                  outlined in this policy, unless a longer retention period is required by law. When we no 
                  longer need your information, we will securely delete or anonymize it.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Your Rights and Choices</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Access and review your personal information</li>
                  <li>• Request correction of inaccurate data</li>
                  <li>• Request deletion of your personal information</li>
                  <li>• Object to processing of your data</li>
                  <li>• Request data portability</li>
                  <li>• Withdraw consent at any time</li>
                  <li>• Opt-out of marketing communications</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Cookies and Tracking Technologies</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  We use cookies and similar technologies to enhance your browsing experience and analyze 
                  website usage. You can control cookie settings through your browser preferences.
                </p>
                <p className="text-gray-300">
                  For more detailed information about our use of cookies, please see our{' '}
                  <Link to="/cookies" className="text-blue-400 hover:text-blue-300 underline">
                    Cookie Policy
                  </Link>.
                </p>
              </div>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Third-Party Services</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  Our website may contain links to third-party services and integrate with external platforms. 
                  We are not responsible for the privacy practices of these third parties. We encourage you 
                  to review their privacy policies before providing any personal information.
                </p>
              </div>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-3xl font-bold mb-6">International Data Transfers</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  Your personal information may be transferred to and processed in countries other than your 
                  own. We ensure that such transfers comply with applicable data protection laws and implement 
                  appropriate safeguards to protect your information.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Children's Privacy</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  Our services are not intended for children under the age of 16. We do not knowingly collect 
                  personal information from children under 16. If you believe we have collected such information, 
                  please contact us immediately.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Changes to This Privacy Policy</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300">
                  We may update this privacy policy from time to time to reflect changes in our practices 
                  or applicable laws. We will notify you of any material changes by posting the updated 
                  policy on our website and updating the "Last updated" date.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <p className="text-gray-300 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a></p>
                  <p>Phone: <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 (302) 464-0950</a></p>
                  <p>Address: Zion Tech Group, Global Operations</p>
                </div>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About Privacy?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We're committed to transparency and protecting your privacy. Contact us if you have any questions or concerns.
=======
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600/20 to-emerald-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're committed to transparency and protecting your privacy. Contact us if you have any questions.
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <a
              href="mailto:privacy@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Email Privacy Team
            </a>
=======
      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about this Privacy Policy or our data practices, 
            please don't hesitate to contact us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>privacy@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+1 (302) 464-0950</span>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
=======
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-lg"
            >
              Contact Us
            </Link>
            <Link
              to="/terms"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300 text-lg"
            >
              View Terms of Service
            </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Cookies and Tracking</h3>
              <p className="text-gray-300 mb-6">
                We use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze website traffic, and understand where our visitors are coming from. You can 
                control cookie settings through your browser preferences.
              </p>

              <h3 className="text-2xl font-bold text-white mb-4 mt-8">Third-Party Links</h3>
              <p className="text-gray-300 mb-6">
                Our website may contain links to third-party websites. We are not responsible for the 
                privacy practices or content of these external sites. We encourage you to review their 
                privacy policies before providing any personal information.
              </p>
=======
                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Information Sharing</h3>
                <p className="text-gray-300 mb-6">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• With your explicit consent</li>
                  <li>• With service providers who assist in our operations</li>
                  <li>• To comply with legal requirements</li>
                  <li>• To protect our rights and safety</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Data Security</h3>
                <p className="text-gray-300 mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Data Retention</h3>
                <p className="text-gray-300 mb-6">
                  We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Your Rights</h3>
                <p className="text-gray-300 mb-6">
                  You have the right to:
                </p>
                <ul className="text-gray-300 mb-6 space-y-2">
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Request deletion of your information</li>
                  <li>• Object to processing of your information</li>
                  <li>• Withdraw consent for marketing communications</li>
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Cookies and Tracking</h3>
                <p className="text-gray-300 mb-6">
                  Our website uses cookies and similar technologies to improve user experience and analyze website traffic. You can control cookie settings through your browser preferences.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Third-Party Links</h3>
                <p className="text-gray-300 mb-6">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Children's Privacy</h3>
                <p className="text-gray-300 mb-6">
                  Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.
                </p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">International Transfers</h3>
                <p className="text-gray-300 mb-6">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Changes to This Policy</h3>
                <p className="text-gray-300 mb-6">
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website.
                </p>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">Contact Us</h3>
                <p className="text-gray-300 mb-6">
                  If you have questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-white/5 rounded-lg p-4">
                  <p className="text-gray-300"><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p className="text-gray-300"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p className="text-gray-300"><strong>Address:</strong> San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Privacy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help. Contact us with any privacy-related questions.
            </p>
            <a
              href="mailto:privacy@ziontechgroup.com"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-98df
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
=======
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              How we collect, use, and protect your information
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Name, email address, and contact information</li>
                <li>Company and job title information</li>
                <li>Service usage data and preferences</li>
                <li>Communication history with our team</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy or as required by law.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-300 mb-4">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> privacy@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (302) 464-0950<br />
                  <strong>Address:</strong> Zion Tech Group, Privacy Team
                </p>
              </div>
            </div>
            
            <div className="text-center pt-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-67e4
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
=======
      </main>
    </AppLayout>
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5
=======
      </main>
    </AppLayout>
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
  );
};

export default Privacy;