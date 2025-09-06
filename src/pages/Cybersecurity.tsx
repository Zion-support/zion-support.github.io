import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Cybersecurity: React.FC = () => {
<<<<<<< HEAD
  const services = [
    {
      title: 'Security Audits & Assessments',
      description: 'Comprehensive security evaluation of your systems and infrastructure',
      features: [
        'Vulnerability assessments',
        'Penetration testing',
        'Code security reviews',
        'Compliance audits',
        'Risk analysis reports',
      ],
      price: '$2,500 - $15,000',
      duration: '1-4 weeks',
    },
    {
      title: 'Threat Monitoring & Detection',
      description: '24/7 monitoring and threat detection services',
      features: [
        'SIEM implementation',
        'Real-time threat detection',
        'Incident response',
        'Security analytics',
        'Threat intelligence',
      ],
      price: '$3,000 - $8,000/month',
      duration: 'Ongoing',
    },
    {
      title: 'Compliance Management',
      description: 'Ensure compliance with industry standards and regulations',
      features: [
        'SOC 2 Type II',
        'ISO 27001',
        'GDPR compliance',
        'HIPAA compliance',
        'PCI DSS',
      ],
      price: '$5,000 - $25,000',
      duration: '3-6 months',
    },
    {
      title: 'Security Training & Awareness',
      description: 'Educate your team on cybersecurity best practices',
      features: [
        'Phishing simulations',
        'Security awareness training',
        'Incident response training',
        'Policy development',
        'Regular assessments',
      ],
      price: '$1,500 - $5,000',
      duration: 'Ongoing',
    },
  ];

  const technologies = [
    'AWS Security Hub', 'Azure Security Center', 'Splunk', 'QRadar', 'CrowdStrike',
    'Palo Alto Networks', 'Fortinet', 'Check Point', 'Nessus', 'Burp Suite',
    'OWASP ZAP', 'Metasploit', 'Wireshark', 'Nmap', 'Kali Linux',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Cybersecurity Services</h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
            Protect your digital assets with comprehensive cybersecurity solutions.
            Our expert team provides 24/7 monitoring, threat detection, and compliance management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl"
            >
              Get Security Assessment
            </Link>
            <Link
              to="/pricing"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold text-lg"
            >
              View Pricing
            </Link>
=======
  return (
    <>
      <SEO title="Cybersecurity" description="Cybersecurity page" url="/services/cybersecurity" />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Cybersecurity</h1>
            <p className="text-xl text-gray-300">Coming soon...</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-9d47
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Cybersecurity;
