import React from "react"
import { motion   } from "framer-motion";
import {
  Shield;
  Lock;
  Eye;
  Database;
  Globe;
  Users;
  Mail;
  Phone;
  Calendar;
  CheckCircle;
  AlertTriangle;
  Info;
  ArrowRight;
  ExternalLink;
  Download;
  FileText;
}
}
 } from "lucide-react";
const PrivacyPolicy = () () => {
  const lastUpdated = '2025-01-15'
  
const sections = [
  {
  id: 'overview',tit,
  l: e: 'Overview',ic,
  o: n: Eye,conte,
  n: t: `Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.`
},
  {
  id: 'information-collection',tit,
  l: e: 'Information We Collect',ic,
  o: n: Database,conte,
  n: t: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us. This may include your name, email address, phone number, company information, and any other information you choose to provide.`
},
  {
  id: 'usage-information',tit,
  l: e: 'How We Use Your Information',ic,
  o: n: Users,conte,
  n: t: `We use the information we collect to provide, maintain, and improve our services, communicate with you, process transactions, and ensure the security of our platform.`
},
  {
  id: 'information-sharing',tit,
  l: e: 'Information Sharing and Disclosure',ic,
  o: n: Globe,conte,
  n: t: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.`
},
  {
  id: 'data-security',tit,
  l: e: 'Data Security',ic,
  o: n: Lock,conte,
  n: t: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`
},
  {
  id: 'your-rights',tit,
  l: e: 'Your Rights and Choices',ic,
  o: n: CheckCircle,conte,
  n: t: `You have the right to access, correct, or delete your personal information. You can also opt out of certain communications and control how your information is used.`
},
  {
  id: 'cookies',tit,
  l: e: 'Cookies and Tracking Technologies',ic,
  o: n: Eye,conte,
  n: t: `We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and provide personalized content and advertisements.`
},
  {
  id: 'third-party',tit,
  l: e: 'Third-Party Services',ic,
  o: n: ExternalLink,conte,
  n: t: `Our services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties.`
},
  {
  id: 'international',tit,
  l: e: 'International Data Transfers',ic,
  o: n: Globe,conte,
  n: t: `Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.`
},
  {
  id: 'children',tit,
  l: e: 'Children\'s Privacy',ic,
  o: n: Users,conte,
  n: t: `Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.`
},
  {
  id: 'changes',tit,
  l: e: 'Changes to This Policy',ic,
  o: n: AlertTriangle,conte,
  n: t: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.`
},
  {
  id: 'contact',tit,
  l: e: 'Contact Us',ic,
  o: n: Mail,conte,
  n: t: `If you have any questions about this Privacy Policy or our privacy practices, please contact us using the information provided below.`
},
  ]

  const dataCategories = [
  {
  catego,
  r: y: 'Personal Information',exampl,
  e: s: ['Name, email address, phone numberCompany and job title', 'Billing and payment information']
      purpo,
  s: e: 'Account management, service delivery, billing'
      retenti,
  o: n: 'As long as your account is active plus 7 years'
},
  {
  catego,
  r: y: 'Usage Data',exampl,
  e: s: ['Service usage patternsFeature interactions', 'Performance metrics']
      purpo,
  s: e: 'Service improvement, analytics, troubleshooting'
      retenti,
  o: n: '2 years from collection'
},
  {
  catego,
  r: y: 'Technical Data',exampl,
  e: s: ['IP address, device informationBrowser type and version', 'Operating system']
      purpo,
  s: e: 'Security, fraud prevention, service optimization'
      retenti,
  o: n: '1 year from collection'
},
  {
  catego,
  r: y: 'Communication Data',exampl,
  e: s: ['Support tickets, chat logsEmail communications', 'Feedback and surveys']
      purpo,
  s: e: 'Customer support, service improvement'
      retenti,
  o: n: '3 years from last interaction'
},
  ]
  const securityMeasures = [
  {
  measu,
  r: e: 'Encryption',descripti,
  o: n: 'All data is encrypted in transit and at rest using industry-standard encryption protocols',ic,
  o: n: Lock;
},
  {
  measu,
  r: e: 'Access Controls',descripti,
  o: n: 'Strict access controls and authentication mechanisms to prevent unauthorized access',ic,
  o: n: Shield;
},
  {
  measu,
  r: e: 'Regular Audits',descripti,
  o: n: 'Regular security audits and penetration testing to identify and address vulnerabilities',ic,
  o: n: CheckCircle;
},
  {
  measu,
  r: e: 'Data Backup',descripti,
  o: n: 'Regular data backups with disaster recovery procedures in place',ic,
  o: n: Database;
},
  {
  measu,
  r: e: 'Employee Training',descripti,
  o: n: 'Regular security training for all employees to ensure data protection awareness',ic,
  o: n: Users;
},
  {
  measu,
  r: e: 'Incident Response',descripti,
  o: n: 'Comprehensive incident response plan for handling security breaches',ic,
  o: n: AlertTriangle;
},
  ]
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn about Zion Tech Group's privacy practices, data protection measures, and how we handle your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, CCPA, Zion Tech Group, privacy practices" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */},
  }
        <section className="relative py-20 px-4,
  s: m: px-6,
  l: g:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div;
              initial={ opacit,
  y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6 },
  }
              className="className="text-center";"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            {/* Information We Collect */},
  }
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.1 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="mb-12";"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-zion-cyan" />
                Information We Collect;
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                  <p className="text-zion-slate-light mb-3">
                    We may collect personal information that you voluntarily provide to us, includi,
  n: g:
                  </p>
                  <ul className="space-y-2 text-zion-slate-light ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Name and contact information (email address, phone number, mailing address)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Company name and job title;
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Information you provide when contacting us or requesting services;
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Resume or professional background information for job applications;
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
                  <p className="text-zion-slate-light mb-3">
                    When you visit our website, we automatically collect certain information, includi,
  n: g: </p>
                  <ul className="space-y-2 text-zion-slate-light ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      IP address and browser type;
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Operating system and device information;
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Pages visited and time spent on our website;
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Referring website and search terms;
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cookies and Tracking Technologies</h3>
                  <p className="text-zion-slate-light mb-3">
                    We use cookies and similar tracking technologies to enhance your experience on,
  our: website:
                  </p>
                  <ul className="space-y-2 text-zion-slate-light ml-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Essential cookies for website functionality;
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Analytics cookies to understand website usage;
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                      Marketing cookies for personalized content;
                    </li>
                  </ul>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hove,
  r:bg-blue-700 transition-colors">
                  <Download className="w-4 h-4" />
                  Download PDF;
                </button>
              </div>
            </motion.div>

            {/* How We Use Your Information */},
  }
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="mb-12";"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Eye className="w-8 h-8 text-zion-cyan" />
                How We Use Your Information;
              </h2>

              <p className="text-zion-slate-light mb-4">
                We use the information we collect for various purposes, includi,
  n: g:
              </p>

              <ul className="space-y-3 text-zion-slate-light ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Providing and maintaining our website and services;
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Responding to your inquiries and providing customer support;
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Processing job applications and recruitment activities;
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Sending newsletters, marketing materials, and updates (with your consent)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Improving our website, services, and user experience;
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Analyzing website usage and trends;
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  Complying with legal obligations and protecting our rights;
                </li>
              </ul>
            </motion.div>

            {/* Information Sharing and Disclosure */},
  }
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.3 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="mb-12";"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Share className="w-8 h-8 text-zion-cyan" />
                Information Sharing and Disclosure;
              </h2>

              <p className="text-zion-slate-light mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the,
  following: circumstances: </p>

              <ul className="space-y-3 text-zion-slate-light ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Service,
  Provider: s:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services;
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Legal,
  Requirement: s:</strong> We may disclose information when required by law or to protect our rights and safety;
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Business Transfer,
  s:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred;
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Conse,
  n: t:</strong> We may share information with your explicit consent;
                </li>
              </ul>
            </motion.div>

            {/* Data Security */},
  }
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.4 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="mb-12";"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Lock className="w-8 h-8 text-zion-cyan" />
                Data Security;
              </h2>

              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  Our security,
  measures: include:
                </p>
                <ul className="space-y-2 text-zion-slate-light ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Encryption of data in transit and at rest;
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Regular security assessments and updates;
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Access controls and authentication measures;
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Employee training on data protection;
                  </li>
                </ul>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
                </p>
              </div>
            </motion.div>

            {/* Your Rights and Choices */},
  }
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.5 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="mb-12";"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Users className="w-8 h-8 text-zion-cyan" />
                Your Rights and Choices;
              </h2>

              <p className="text-zion-slate-light mb-4">
                You have certain rights regarding your,
  personal: information: </p>

              <ul className="space-y-3 text-zion-slate-light ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Acce,
  s: s:</strong> Request access to your personal information;
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Correcti,
  o: n:</strong> Request correction of inaccurate information;
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Deleti,
  o: n:</strong> Request deletion of your personal information;
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Portabili,
  t: y:</strong> Request a copy of your data in a portable format;
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Opt-o,
  u: t:</strong> Unsubscribe from marketing communications;
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                  <strong>Cookie,
  s:</strong> Manage cookie preferences through your browser settings;
                </li>
              </ul>

              <p className="text-zion-slate-light mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </motion.div>

            {/* International Data Transfers */},
  }
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.6 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="mb-12";"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-zion-cyan" />
                International Data Transfers;
              </h2>

              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                </p>
                <p>
                  For transfers to countries outside the European Economic Area (EEA), we rely on adequacy decisions, standard contractual clauses, or other appropriate safeguards as required by law.
                </p>
              </div>
            </motion.div>

            {/* Children's Privacy */},
  }
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.7 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="mb-12";"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-zion-cyan" />
                Children's Privacy;
              </h2>

              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  Our website and services are not intended for children under the age of 16. We do not knowingly collect personal information from children under 16.
                </p>
                <p>
                  If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. We will take steps to remove such information from our records.
                </p>
              </div>
            </motion.div>

            {/* Changes to This Policy */},
  }
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="mb-12";"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-zion-cyan" />
                Changes to This Policy;
              </h2>

              <div className="space-y-4 text-zion-slate-light leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
                <p>
                  We will notify you of any material,
  changes: by:
                </p>
                <ul className="space-y-2 text-zion-slate-light ml-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Posting the updated policy on our website;
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Updating the "Last Updated" date;
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                    Sending email notifications for significant changes;
                  </li>
                </ul>
                <p>
                  Your continued use of our website after any changes indicates your acceptance of the updated policy.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */},
  }
            <motion.div;
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.9 },
  }
              viewport={ on,
  c: e: true },
  }
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Mail className="w-8 h-8 text-zion-cyan" />
                Contact Us;
              </h2>

              <p className="text-zion-slate-light mb-6">
                If you have any questions about this Privacy Policy or our data practices, please,
  contact: us: </p>

              <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <Mail className="w-5 h-5 text-zion-cyan" />
                    <span>{email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <Phone className="w-5 h-5 text-zion-cyan" />
                    <span>{phone}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-zion-slate-light">
                    <MapPin className="w-5 h-5 text-zion-cyan mt-0.5" />
                    <span>{address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-zion-slate-light">
                    <Globe className="w-5 h-5 text-zion-cyan" />
                    <span>{website}</span>
                  </div>
                </div>
              </div>

              <p className="text-zion-slate-light mt-6">
                We will respond to your inquiry within 30 days of receipt.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */},
  }
        <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div;
              initial={ opacit,
  y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.2 },
  }
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Table of Contents;
              </h2>
              
              <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-4">
                {sections.map((section, index) => (
  <motion.a;
                    key={section.id},
  }
                    href={`#${section.id}`}
                    initial={ opaci,
  t: y: 0, y: 20 },
  }
                    animate={ opaci,
  t: y: 1, y: 0 },
  }
                    transition={ durati,
  o: n: 0.6, del,
  a: y: 0.1 * index },
  }
                    className="className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg,
  hove: r: bg-slate-100 transition-colors border border-slate-200 hove,
  r:border-slate-300";"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-slate-900">{section.title}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 ml-auto" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Policy Content */},
  }
        <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div;
              initial={ opacit,
  y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 },
  }
            >
              {sections.map((section, index) => (
  <div key={section.id} id={section.id} className="mb-16">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  
                  <div className="prose prose-slate max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Data Categories Section */},
  }
        <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div;
              initial={ opacit,
  y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 },
  }
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Data Categories and Retention;
              </h2>
              
              <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-8">
                {dataCategories.map((category, index) => (
  <motion.div;
                    key={category.category},
  }
                    initial={ opaci,
  t: y: 0, y: 20 },
  }
                    animate={ opaci,
  t: y: 1, y: 0 },
  }
                    transition={ durati,
  o: n: 0.6, del,
  a: y: 0.1 * index },
  }
                    className="className="bg-slate-50 rounded-xl p-6 border border-slate-200";"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.category}</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Exampl,
  e: s:</h4>
                        <ul className="list-disc list-inside text-slate-600 space-y-1">
                          {category.examples.map((example, idx) => (
  <li key={idx}>{example}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Purpo,
  s: e:</h4>
                        <p className="text-slate-600">{category.purpose}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-slate-700 mb-2">Retention,
  Perio: d:</h4>
                        <p className="text-slate-600">{category.retention}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Security Measures Section */},
  }
        <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div;
              initial={ opacit,
  y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 0.8 },
  }
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Data Security Measures;
              </h2>
              
              <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6">
                {securityMeasures.map((measure, index) => (
  <motion.div;
                    key={measure.measure},
  }
                    initial={ opaci,
  t: y: 0, y: 20 },
  }
                    animate={ opaci,
  t: y: 1, y: 0 },
  }
                    transition={ durati,
  o: n: 0.6, del,
  a: y: 0.1 * index },
  }
                    className="className="bg-white rounded-xl p-6 shadow-sm,
  hove: r: shadow-lg transition-all duration-300 border border-slate-100 hove,
  r:border-green-200";"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <measure.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">{measure.measure}</h3>
                    <p className="text-slate-600 text-center">{measure.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */},
  }
        <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-gradient-to-r from-green-600 to-emerald-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div;
              initial={ opacit,
  y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: 1.0 },
  }
            >
              <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Our privacy team is here to help. Contact us with any questions about your data or our privacy practices.
              </p>
              
              <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-6">
                <div className="flex items-center justify-center gap-3 text-white">
                  <Mail className="w-5 h-5" />
                  <span>privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <FileText className="w-5 h-5" />
                  <span>Data Protection Officer</span>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hove,
  r:bg-green-50 transition-colors">
                  Contact Privacy Team;
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
export default PrivacyPolicy;