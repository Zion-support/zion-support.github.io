import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  FileText, 
  Shield, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  Calendar,
  Mail,
  Phone
} from 'lucide-react';

const Terms: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  const keyTerms = [
    {
      term: "Services",
      definition: "AI-powered technology solutions, consulting, and related services provided by Zion Tech Group"
    },
    {
      term: "Client",
      definition: "Any individual or entity that uses our services or accesses our website"
    },
    {
      term: "Intellectual Property",
      definition: "All proprietary rights, including patents, copyrights, trademarks, and trade secrets"
    },
    {
      term: "Confidential Information",
      definition: "Non-public information shared between parties during business relationships"
    }
  ];

  const userObligations = [
    "Provide accurate and complete information",
    "Use services only for lawful purposes",
    "Maintain security of account credentials",
    "Comply with all applicable laws and regulations",
    "Respect intellectual property rights",
    "Report security vulnerabilities promptly"
  ];

  const serviceTerms = [
    {
      title: "Service Delivery",
      description: "We commit to delivering services according to agreed specifications and timelines"
    },
    {
      title: "Quality Assurance",
      description: "All services undergo rigorous testing and quality control processes"
    },
    {
      title: "Support & Maintenance",
      description: "We provide ongoing support and maintenance for all delivered solutions"
    },
    {
      title: "Updates & Improvements",
      description: "Regular updates and improvements are included in our service packages"
    }
  ];

  const limitations = [
    {
      title: "Service Availability",
      description: "Services are provided on an 'as-is' basis with 99.9% uptime commitment"
    },
    {
      title: "Data Backup",
      description: "Clients are responsible for maintaining their own data backups"
    },
    {
      title: "Third-party Services",
      description: "We are not responsible for third-party services or integrations"
    },
    {
      title: "Force Majeure",
      description: "We are not liable for delays due to circumstances beyond our control"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="Terms of Service - Zion Tech Group"
        description="Read our terms of service to understand the conditions for using Zion Tech Group services. Clear guidelines for our business relationship."
        keywords="terms of service, terms and conditions, legal, Zion Tech Group"
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-12 w-12 text-cyan-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Please read these terms carefully before using our services. They outline the rules and guidelines for our business relationship.
          </p>
          <div className="flex items-center justify-center text-gray-400">
            <Calendar className="h-5 w-5 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              These Terms of Service ("Terms") govern your use of Zion Tech Group's services, website, and any related applications. 
              By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-300">
              If you disagree with any part of these terms, you may not access our services. We reserve the right to modify these terms at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Key Terms Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Key Terms & Definitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyTerms.map((item, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">{item.term}</h3>
                <p className="text-gray-300">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Obligations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Your Obligations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userObligations.map((obligation, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{obligation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Terms Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Service Commitments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTerms.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Service Limitations & Disclaimers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {limitations.map((limitation, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="bg-cyan-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{limitation.title}</h3>
                <p className="text-gray-300">{limitation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Questions About These Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about these Terms of Service, please contact our legal team:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Mail className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-cyan-400">legal@ziontechgroup.com</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <Phone className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-cyan-400">+1 (302) 464-0950</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            By using our services, you agree to these terms. Contact us if you need any clarification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Legal Team
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              View Privacy Policy
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;