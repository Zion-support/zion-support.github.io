import React from "react"
import { motion } from "framer-motion"
import {;
  Shield,;
  Lock,;
  Eye,;
  Database,;
  Globe,;
  Users,;
  Mail,;
  Phone,;
  Calendar,;
  CheckCircle,;
  AlertTriangle,;
  Info,;
  ArrowRight,;
  ExternalLink,;
  Download,;
  FileText;
} from "lucide-react"
const PrivacyPolicy = () => {;
  const lastUpdated = '2025-01-15'
  ;
  const sections = [;
    {;
      id: 'overview',title: 'Overview',icon: Eye,content: `Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.`
    },;
    {;
      id: 'information-collection',title: 'Information We Collect',icon: Database,content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, phone number, company information, and any other information you choose to provide.`
    },;
    {;
      id: 'usage-information',title: 'How We Use Your Information',icon: Users,content: `We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and ensure the security of our platform.`
    },;
    {;
      id: 'information-sharing',title: 'Information Sharing and Disclosure',icon: Globe,content: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.`
    },;
    {;
      id: 'data-security',title: 'Data Security',icon: Lock,content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`
    },;
    {;
      id: 'your-rights',title: 'Your Rights and Choices',icon: CheckCircle,content: `You have the right to access, correct, or delete your personal information. You can also opt out of certain communications and control how your information is used.`
    },;
    {;
      id: 'cookies',title: 'Cookies and Tracking Technologies',icon: Eye,content: `We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content and advertisements.`
    },;
    {;
      id: 'third-party',title: 'Third-Party Services',icon: ExternalLink,content: `Our services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties.`
    };
    {;
      id: 'international',title: 'International Data Transfers',icon: Globe,content: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.`
    };
    {;
      id: 'children',title: 'Children\'s Privacy',icon: Users,content: `Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.`
    };
    {;
      id: 'changes',title: 'Changes to This Policy',icon: AlertTriangle,content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.`
    };
    {;
      id: 'contact',title: 'Contact Us',icon: Mail,content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us using the information provided below.`
    };
  ],;

  const dataCategories = [;
    {;
      category: 'Personal Information',examples: ['Name, email address, phone numberCompany and job title', 'Billing and payment information'],;
      purpose: 'Account management, service delivery, billing',;
      retention: 'As long as your account is active plus 7 years'
    };
    {;
      category: 'Usage Data',examples: ['Service usage patternsFeature interactions', 'Performance metrics'],;
      purpose: 'Service improvement, analytics, troubleshooting',;
      retention: '2 years from collection'
    };
    {;
      category: 'Technical Data',examples: ['IP address, device informationBrowser type and version', 'Operating system'],;
      purpose: 'Security, fraud prevention, service optimization',;
      retention: '1 year from collection'
    };
    {;
      category: 'Communication Data',examples: ['Support tickets, chat logsEmail communications', 'Feedback and surveys'],;
      purpose: 'Customer support, service improvement',;
      retention: '3 years from last interaction'
    };
  ];
  const securityMeasures = [;
    {;
      measure: 'Encryption',description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols',icon: Lock;
    };
    {;
      measure: 'Access Controls',description: 'Strict access controls and authentication mechanisms to prevent unauthorized access',icon: Shield;
    };
    {;
      measure: 'Regular Audits',description: 'Regular security audits and penetration testing to identify and address vulnerabilities',icon: CheckCircle;
    };
    {;
      measure: 'Data Backup',description: 'Regular data backups with disaster recovery procedures in place',icon: Database;
    };
    {;
      measure: 'Employee Training',description: 'Regular security training for all employees to ensure data protection awareness',icon: Users;
    };
    {;
      measure: 'Incident Response',description: 'Comprehensive incident response plan for handling security breaches',icon: AlertTriangle;
    };
  ];
  return (
    <>;
      <Helmet>;
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</[^>]*>
        <[^>]*/>
        <[^>]*/>
      </[^>]*>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">;
        {/* Hero Section */};
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">;
          <div className="max-w-7xl mx-auto">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6 }};
              className="[^"]*"
            >;
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">;
                <[^>]*/>
              </[^>]*>
            </[^>]*>

            {/* Information We Collect */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.1 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">;
                <[^>]*/>
                Information We Collect;
              </[^>]*>

              <div className="space-y-6">;
                <div>;
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Information</[^>]*>
                  <p className="text-zion-slate-light mb-3">;
                    We may collect personal information that you voluntarily provide to us, including:;
                  </[^>]*>
                  <ul className="space-y-2 text-zion-slate-light ml-6">;
                    <li className="flex items-start gap-2">;
                      <[^>]*/>
                      Name and contact information (email address, phone number, mailing address);
                    </[^>]*>
                    <li className="flex items-start gap-2">;
                      <[^>]*/>
                      Company name and job title;
                    </[^>]*>
                    <li className="flex items-start gap-2">;
                      <[^>]*/>
                      Information you provide when contacting us or requesting services;
                    </[^>]*>
                    <li className="flex items-start gap-2">;
                      <[^>]*/>
                      Resume or professional background information for job applications;
                    </[^>]*>
                  </[^>]*>
                </[^>]*>

                <div>;
                  <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</[^>]*>
                  <p className="text-zion-slate-light mb-3">;
                    When you visit our website, we automatically collect certain information, including:;
                  </[^>]*>
                  <ul className="space-y-2 text-zion-slate-light ml-6">;
                    <li className="flex items-start gap-2">;
                      <[^>]*/>
                      IP address and browser type;
                    </[^>]*>
                    <li className="flex items-start gap-2">;
                      <[^>]*/>
                      Operating system and device information;
                    </[^>]*>
                    <li className="flex items-start gap-2">;
                      <[^>]*/>
                      Pages visited and time spent on our website;
                    </[^>]*>
                    <li className="flex items-start gap-2">;
                      <[^>]*/>
                      Referring website and search terms;
                    </[^>]*>
                  </[^>]*>
                </[^>]*>

                <div>;
                  <h3 className="text-xl font-semibold text-white mb-3">Cookies and Tracking Technologies</[^>]*>
                  <p className="text-zion-slate-light mb-3">;
                    We use cookies and similar tracking technologies to enhance your experience on our website:;
                  </[^>]*>
                  <ul className="space-y-2 text-zion-slate-light ml-6">;
                    <li className="flex items-start gap-2">;
                      <[^>]*/>
                      Essential cookies for website functionality;
                    </[^>]*>
                    <li className="flex items-start gap-2">;
                      <[^>]*/>
                      Analytics cookies to understand website usage;
                    </[^>]*>
                    <li className="flex items-start gap-2">;
                      <[^>]*/>
                      Marketing cookies for personalized content;
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">;
                  <[^>]*/>
                  Download PDF;
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* How We Use Your Information */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.2 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">;
                <[^>]*/>
                How We Use Your Information;
              </[^>]*>

              <p className="text-zion-slate-light mb-4">;
                We use the information we collect for various purposes, including:;
              </[^>]*>

              <ul className="space-y-3 text-zion-slate-light ml-6">;
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  Providing and maintaining our website and services;
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  Responding to your inquiries and providing customer support;
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  Processing job applications and recruitment activities;
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  Sending newsletters, marketing materials, and updates (with your consent);
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  Improving our website, services, and user experience;
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  Analyzing website usage and trends;
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  Complying with legal obligations and protecting our rights;
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Information Sharing and Disclosure */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.3 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">;
                <[^>]*/>
                Information Sharing and Disclosure;
              </[^>]*>

              <p className="text-zion-slate-light mb-4">;
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:;
              </[^>]*>

              <ul className="space-y-3 text-zion-slate-light ml-6">;
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  <strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services;
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  <strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety;
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred;
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  <strong>Consent:</strong> We may share information with your explicit consent;
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Data Security */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.4 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">;
                <[^>]*/>
                Data Security;
              </[^>]*>

              <div className="space-y-4 text-zion-slate-light leading-relaxed">;
                <p>;
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.;
                </[^>]*>
                <p>;
                  Our security measures include:;
                </[^>]*>
                <ul className="space-y-2 text-zion-slate-light ml-6">;
                  <li className="flex items-start gap-2">;
                    <[^>]*/>
                    Encryption of data in transit and at rest;
                  </[^>]*>
                  <li className="flex items-start gap-2">;
                    <[^>]*/>
                    Regular security assessments and updates;
                  </[^>]*>
                  <li className="flex items-start gap-2">;
                    <[^>]*/>
                    Access controls and authentication measures;
                  </[^>]*>
                  <li className="flex items-start gap-2">;
                    <[^>]*/>
                    Employee training on data protection;
                  </[^>]*>
                </[^>]*>
                <p>;
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.;
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Your Rights and Choices */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.5 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">;
                <[^>]*/>
                Your Rights and Choices;
              </[^>]*>

              <p className="text-zion-slate-light mb-4">;
                You have certain rights regarding your personal information:;
              </[^>]*>

              <ul className="space-y-3 text-zion-slate-light ml-6">;
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  <strong>Access:</strong> Request access to your personal information;
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  <strong>Correction:</strong> Request correction of inaccurate information;
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  <strong>Deletion:</strong> Request deletion of your personal information;
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  <strong>Portability:</strong> Request a copy of your data in a portable format;
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications;
                </[^>]*>
                <li className="flex items-start gap-2">;
                  <[^>]*/>
                  <strong>Cookies:</strong> Manage cookie preferences through your browser settings;
                </[^>]*>
              </[^>]*>

              <p className="text-zion-slate-light mt-4">;
                To exercise these rights, please contact us using the information provided below.;
              </[^>]*>
            </[^>]*>

            {/* International Data Transfers */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.6 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">;
                <[^>]*/>
                International Data Transfers;
              </[^>]*>

              <div className="space-y-4 text-zion-slate-light leading-relaxed">;
                <p>;
                  Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.;
                </[^>]*>
                <p>;
                  For transfers to countries outside the European Economic Area (EEA), we rely on adequacy decisions, standard contractual clauses, or other appropriate safeguards as required by law.;
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Children's Privacy */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.7 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">;
                <[^>]*/>
                Children's Privacy;
              </[^>]*>

              <div className="space-y-4 text-zion-slate-light leading-relaxed">;
                <p>;
                  Our website and services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16.;
                </[^>]*>
                <p>;
                  If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. We will take steps to remove such information from our records.;
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Changes to This Policy */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.8 }};
              viewport={{ once: true }};
              className="[^"]*"
            >;
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">;
                <[^>]*/>
                Changes to This Policy;
              </[^>]*>

              <div className="space-y-4 text-zion-slate-light leading-relaxed">;
                <p>;
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.;
                </[^>]*>
                <p>;
                  We will notify you of any material changes by:;
                </[^>]*>
                <ul className="space-y-2 text-zion-slate-light ml-6">;
                  <li className="flex items-start gap-2">;
                    <[^>]*/>
                    Posting the updated policy on our website;
                  </[^>]*>
                  <li className="flex items-start gap-2">;
                    <[^>]*/>
                    Updating the "Last Updated" date;
                  </[^>]*>
                  <li className="flex items-start gap-2">;
                    <[^>]*/>
                    Sending email notifications for significant changes;
                  </[^>]*>
                </[^>]*>
                <p>;
                  Your continued use of our website after any changes indicates your acceptance of the updated policy.;
                </[^>]*>
              </[^>]*>
            </[^>]*>

            {/* Contact Information */};
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.9 }};
              viewport={{ once: true }};
            >;
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">;
                <[^>]*/>
                Contact Us;
              </[^>]*>

              <p className="text-zion-slate-light mb-6">;
                If you have any questions about this Privacy Policy or our data practices, please contact us:;
              </[^>]*>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                <div className="space-y-4">;
                  <div className="flex items-center gap-3 text-zion-slate-light">;
                    <[^>]*/>
                    <span>{email}</[^>]*>
                  </[^>]*>
                  <div className="flex items-center gap-3 text-zion-slate-light">;
                    <[^>]*/>
                    <span>{phone}</[^>]*>
                  </[^>]*>
                </[^>]*>
                <div className="space-y-4">;
                  <div className="flex items-start gap-3 text-zion-slate-light">;
                    <[^>]*/>
                    <span>{address}</[^>]*>
                  </[^>]*>
                  <div className="flex items-center gap-3 text-zion-slate-light">;
                    <[^>]*/>
                    <span>{website}</[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              <p className="text-zion-slate-light mt-6">;
                We will respond to your inquiry within 30 days of receipt.;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Table of Contents */};
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">;
          <div className="max-w-7xl mx-auto">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.2 }};
            >;
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">;
                Table of Contents;
              </[^>]*>
              ;
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">;
                {sections.map((section, index) => (;
                  <motion.a
                    key={section.id};
                    href={`#${section.id}`};
                    initial={{ opacity: 0, y: 20 }};
                    animate={{ opacity: 1, y: 0 }};
                    transition={{ duration: 0.6, delay: 0.1 * index }};
                    className="[^"]*"
                  >;
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">;
                      <[^>]*/>
                    </[^>]*>
                    <span className="font-medium text-slate-900">{section.title}</[^>]*>
                    <[^>]*/>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Policy Content */};
        <section className="py-16 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.4 }};
            >;
              {sections.map((section, index) => (;
                <div key={section.id} id={section.id} className="mb-16">;
                  <div className="flex items-center gap-3 mb-6">;
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">;
                      <[^>]*/>
                    </[^>]*>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</[^>]*>
                  </[^>]*>
                  ;
                  <div className="prose prose-slate max-w-none">;
                    <p className="text-lg text-slate-700 leading-relaxed">{section.content}</[^>]*>
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Data Categories Section */};
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">;
          <div className="max-w-7xl mx-auto">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.6 }};
            >;
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">;
                Data Categories and Retention;
              </[^>]*>
              ;
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
                {dataCategories.map((category, index) => (;
                  <motion.div
                    key={category.category};
                    initial={{ opacity: 0, y: 20 }};
                    animate={{ opacity: 1, y: 0 }};
                    transition={{ duration: 0.6, delay: 0.1 * index }};
                    className="[^"]*"
                  >;
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.category}</[^>]*>
                    ;
                    <div className="space-y-4">;
                      <div>;
                        <h4 className="font-medium text-slate-700 mb-2">Examples:</[^>]*>
                        <ul className="list-disc list-inside text-slate-600 space-y-1">;
                          {category.examples.map((example, idx) => (;
                            <li key={idx}>{example}</[^>]*>
                          ))};
                        </[^>]*>
                      </[^>]*>
                      ;
                      <div>;
                        <h4 className="font-medium text-slate-700 mb-2">Purpose:</[^>]*>
                        <p className="text-slate-600">{category.purpose}</[^>]*>
                      </[^>]*>
                      ;
                      <div>;
                        <h4 className="font-medium text-slate-700 mb-2">Retention Period:</[^>]*>
                        <p className="text-slate-600">{category.retention}</[^>]*>
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Security Measures Section */};
        <section className="py-16 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 0.8 }};
            >;
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">;
                Data Security Measures;
              </[^>]*>
              ;
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
                {securityMeasures.map((measure, index) => (;
                  <motion.div
                    key={measure.measure};
                    initial={{ opacity: 0, y: 20 }};
                    animate={{ opacity: 1, y: 0 }};
                    transition={{ duration: 0.6, delay: 0.1 * index }};
                    className="[^"]*"
                  >;
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                      <[^>]*/>
                    </[^>]*>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">{measure.measure}</[^>]*>
                    <p className="text-slate-600 text-center">{measure.description}</[^>]*>
                  </[^>]*>
                ))};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Contact Section */};
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-700">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              animate={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.6, delay: 1.0 }};
            >;
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">;
                Questions About Privacy?;
              </[^>]*>
              <p className="text-xl text-green-100 mb-8">;
                Our privacy team is here to help. Contact us with any questions about your data or our privacy practices.;
              </[^>]*>
              ;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
                <div className="flex items-center justify-center gap-3 text-white">;
                  <[^>]*/>
                  <span>privacy@ziontechgroup.com</[^>]*>
                </[^>]*>
                <div className="flex items-center justify-center gap-3 text-white">;
                  <[^>]*/>
                  <span>+1 (555) 123-4567</[^>]*>
                </[^>]*>
                <div className="flex items-center justify-center gap-3 text-white">;
                  <[^>]*/>
                  <span>Data Protection Officer</[^>]*>
                </[^>]*>
              </[^>]*>
              ;
              <div className="mt-8">;
                <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">;
                  Contact Privacy Team;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
export default PrivacyPolicy;